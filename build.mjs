import marked from 'marked';
import tinyjam from 'tinyjam';

// Markdown footnote extension for marked v2.
// Usage:  [^label] in text, [^label]: Citation. at the bottom of the post.
// Footnotes are numbered in order of first appearance; multiple refs to the
// same label share one number, with a ↩ back-link per occurrence.

const footnoteNums = new Map(); // label → display number
const footnoteRefs = new Map(); // label → [refId, ...]
let counter = 0;

// Reset per-document state before each marked() call. We override the static
// marked.walkTokens (tree traversal) rather than the per-token callback set by
// marked.use(). The walking flag prevents resets on recursive calls into nested tokens.
let walking = false;
const origWalkTokens = marked.walkTokens.bind(marked);
marked.walkTokens = function(tokens, callback) {
    if (!walking) {
        footnoteNums.clear();
        footnoteRefs.clear();
        counter = 0;
        walking = true;
        try {
            return origWalkTokens(tokens, callback);
        } finally {
            walking = false;
        }
    }
    return origWalkTokens(tokens, callback);
};

marked.use({
    walkTokens() {}, // no-op; required to trigger the override above

    extensions: [
        {
            name: 'footnoteRef',
            level: 'inline',
            start(src) { return src.indexOf('[^'); },
            tokenizer(src) {
                const match = /^\[\^([^\]\s]+)\](?!:)/.exec(src);
                if (match) return { type: 'footnoteRef', raw: match[0], label: match[1] };
            },
            renderer({ label }) {
                if (!footnoteNums.has(label)) {
                    footnoteNums.set(label, ++counter);
                    footnoteRefs.set(label, []);
                }
                const num = footnoteNums.get(label);
                const refs = footnoteRefs.get(label);
                const refId = refs.length === 0 ? `fnref-${label}` : `fnref-${label}-${refs.length + 1}`;
                refs.push(refId);
                return `<sup id="${refId}"><a href="#fn-${label}">[${num}]</a></sup>`;
            }
        },
        {
            name: 'footnoteDefinition',
            level: 'block',
            start(src) { return src.indexOf('[^'); },
            tokenizer(src) {
                const match = /^\[\^([^\]\s]+)\]:\s+(.+)\n?/.exec(src);
                if (match) return { type: 'footnoteDefinition', raw: match[0], label: match[1].trim(), text: match[2].trim() };
            },
            renderer({ label, text }) {
                const num = footnoteNums.get(label);
                const refs = footnoteRefs.get(label) || [];
                const links = refs.map((id, i) => {
                    const sup = refs.length > 1 ? `<sup>${i + 1}</sup>` : '';
                    return `<a href="#${id}" aria-label="Back to reference ${i + 1}">↩${sup}</a>`;
                }).join(' ');
                return `<p id="fn-${label}" class="footnote">[${num}] ${text} ${links}</p>\n`;
            }
        }
    ]
});

tinyjam('.', 'public', { log: !process.argv.includes('--silent') });
