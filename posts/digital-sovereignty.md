---
title: "Disconnecting Big Tech"
date: 2026-02-01
---

In January 2026, I made the resolution to ditch US-based **Big Tech** as much as possible. We are living through a time of intensifying geopolitical tension and accelerating consolidation of digital infrastructure into a small number of empire-scale corporations who have captured the internet. They surveil our activity, manipulate our behaviour, extract our content, and sell it back to us like bottled water — or, should I say, high fructose slop.

Most people don't care where their data lives. We just want what's cheap, familiar, and what works. The real costs of that convenience are never disclosed the moment we sign up. We have quietly normalized storing our digital fingerprints under legal systems we never agreed to, in jurisdictions where we have no standing. That normalization is worth resisting.

---

> "Every program in your computer that is adverse to your interest can be neutralized with a program that is beneficial to your interests. And that means, that when you create a program that is deliberately bad, you invite new market entrance to make one that's good." — **Cory Doctorow**

---

**Infrastructure isn't neutral**. The same data pipelines and AI systems powering our productivity tools are procured for **surveillance, unlawful policing, and warfare**. The small print doesn't mention that. And none of it is more ethical for being algorithmic. **Small Tech**, not anti-technology, is the framing here. Smaller, local alternatives that can actually be held accountable; not platforms that answer to no one.

For inspiration, I looked to Paris Marx's <a href="https://disconnect.blog/getting-off-us-tech-a-guide/" target="_blank" rel="noopener noreferrer external">Getting Off US Tech</a>, Scott Galloway's <a href="https://www.resistandunsubscribe.com/" target="_blank" rel="noopener noreferrer external">Resist and Unsubscribe</a>, and <a href="https://quitgpt.org/" target="_blank" rel="noopener noreferrer external">QuitGPT</a>, but with a few different needs as a software developer focused open source tooling and the responsible use of AI, which, for better or worse, is now considered a professional baseline.

This is not just about consumer boycott. Choosing one *Big Tech* brand over another because it's today's so-called ethical choice will hardly make a difference. But advocating for public policy and investing our time and energy in exploring and sharing real working alternatives will. 

I'm honest about US-based tech I still use — either due to professional lock-in (which I try to offset as much as possible with privacy-focused alternatives), or because, although US-based, is genuinely one of the best alternatives to Big Tech.

Note: <a href="https://proton.me/about" target="_blank" rel="noopener noreferrer external">Proton</a> suite offers an easy all-in-one alternative to Google. "Proton was born in Switzerland in 2014 when a team of scientists who met at CERN (the European Organization for Nuclear Research) decided to build a better internet where privacy is the default."

<!-- card template
<div class="card">
  <h3>SERVICE</h3>
  <p>CURRENT SERVICE <span class="pipe">|</span> <span class="flag">🇨🇭</span><span class="pipe">|</span> <span class="label">$: </span><small>free</small> / freemium / min / mid / max</p>
  <small>
    - Note<br>
    - Note<br>
  </small>
</div>
-->

## AI

Let's start with the elephant in the room — intelligence tools.  

<h3>Agentic coding:</h3>
<div class="card">
  <strong>Claude Code <span class="flag">🇺🇸</span></strong><br>
  <small>
    - leads benchmarks in 2026.
  </small>
</div>

<h3>IDE Code Completion:</h3>
<div class="card">
  <strong>Ollama <span class="flag">🇺🇸</span> + qwen2.5-coder:32b (or similar)</strong>
  <small>
    - local, private, offline, no profiling, cloud telemetry, or data harvesting.<br>
    - avoids Google entirely while matching its coding performance.<br>
  </small>
</div>

<h3>LLM Research:</h3>
<div class="card">
  <strong>NotebookLM</strong>
  <p><i>In progress…</i></p>
  <small>
  - this is the hardest to give up at the moment because of its document context awareness, but working on alternatives.
  </small>
</div>

<h3>Chat:</h3>
<div class="card">
  <strong>Claude Pro <span class="flag">🇺🇸</span> + Ollama (local)</strong>
  <small>
    - Claude via mobile app for complex questions, voice input, and more complex queries<br>
    - local Ollama model for lightweight, private, offline simple queries<br>
  </small>
</div>

<hr>

## Identity

<h3>OS:</h3>
<div class="card">
  <small>
    <em>Desktop:</em><br>
    <p><i>In progress…</i></p>
    Long-term goal: <strong>Linux</strong> <span class="flag">🇺🇸</span> is probably the principled choice but macOS is often required for professional dev and some client tooling.<br>
    <br>
    <em>Mobile:</em><br>
    <strong>GrapheneOS</strong> <span class="flag">🇨🇦</span>
    <small> 
      - privacy-hardened Android fork<br>
      - easy install on Pixel 6<br>
      - you can create separate user profiles with Google services sandboxed.<br>
    </small>
  </small>
</div>

<h3>ISP:</h3>
<div class="card">
  <p>TekSavvy <span class="pipe">|</span> <span class="flag">🇨🇦</span> <span class="pipe">|</span> <span class="label">$: </span><small>freemium</small></p>
  <small>
    - Independent, advocates for net neutrality.<br>
    - Default ISP resolvers log every domain you visit regardless.<br>
    - Encrypted DNS (DoH/DoT) prevents ISP-level surveillance.<br>
    <br>
    <em>DNS:</em><br>
    - NextDNS <span class="flag">🇫🇷</span><br>
    - Cloud-based firewall; blocks trackers and malware; supports encrypted protocols (DoH/DoT).
  </small>
</div>

<h3>VPN:</h3>
<div class="card">
  <p>Proton VPN <span class="pipe">|</span> <span class="flag">🇨🇭</span> <span class="pipe">|</span> <span class="label">$: </span><small>freemium</small></p>
  <small>
    - No-logs policy, open source, independently audited<br>
    - TunnelBear was acquired by McAfee (US) in 2018<br>
    - Cost savings bundled with Proton suite<br>
  </small>
</div>

<h3>Password Manager:</h3>
<div class="card">
  <p>Proton Pass <span class="pipe">|</span> <span class="flag">🇨🇭</span> <span class="pipe">|</span> <span class="label">$: </span><small>freemium</small></p>
  <small>
    - Open source, end-to-end encrypted<br>
    - Cross-platform including Linux<br>
    - Bundled with Proton suite<br>
  </small>
</div>

<h3>Email:</h3>
<div class="card">
  <p>Proton Mail <span class="pipe">|</span> <span class="flag">🇨🇭</span> <span class="pipe">|</span> <span class="label">$: </span><small>freemium</small></p>
  <small>
    - End-to-end encrypted by default<br>
    - Proton suite consolidates a few useful services<br>
  </small>
</div>

<hr>

## Software Development

<h3>Hosting:</h3>
<div class="card">
  <p>Websavers.ca <span class="pipe">|</span> <span class="flag">🇨🇦</span> <span class="pipe">|</span> <span class="label">$: </span><small>min</small></p>
  <small>
    - Canadian-owned and operated, servers in Canada<br>
    - PIPEDA compliant<br>
  </small>
</div>

<h3>Code Repository:</h3>
<div class="card">
  <p><i>In progress…</i></p>
</div>

<h3>Browser & Search:</h3>
<div class="card">
  <p>Brave <span class="pipe">|</span> <span class="flag">🇺🇸</span> <span class="pipe">|</span> <span class="label">$: </span><small>free</small></p>
  <small>
    <em>Browsers:</em><br>
    - <em>Mullvad</em> <span class="flag">🇸🇪</span> for personal browsing (anti-fingerprinting, no telemetry)<br>
    - <em>Brave</em> for dev and testing (Chromium-based, Google-free)<br>
    - <em>Chrome</em> kept for dev and QA only<br>
    - A browser with tiny market share (Firefox) isn't viable as a primary browser for web dev<br>
    <br>
    <em>Search:</em><br>
    - <em>Startpage</em> <span class="flag">🇳🇱</span> for search (privacy-first, GDPR)<br>
  </small>
</div>

<hr>

## Data

<h3>Cloud Storage:</h3>
<div class="card">
  <p>Proton Drive <span class="pipe">|</span> <span class="flag">🇨🇭</span> <span class="pipe">|</span> <span class="label">$: </span><small>freemium</small></p>
  <small>
    - End-to-end encrypted<br>
    - Still maturing as a product but functional for personal storage<br>
    - Bundled with Proton Docs & Sheets<br>
  </small>
</div>

<hr>

## Communications

<h3>Messaging:</h3>
<div class="card">
  <p>Signal <span class="pipe">|</span> <span class="flag">🇺🇸</span> <span class="pipe">|</span> <span class="label">$: </span><small>free</small></p>
  <small>
    - Open source, end-to-end encrypted<br>
    - Non-profit, no data monetization<br>
    - US-based but best available option in this category<br>
  </small>
</div>

<h3>Collaboration:</h3>
<div class="card">
  <p><i>In progress…</i></p>
  <small>
  - <em>TeamSpeak?</em> <a href=https://arstechnica.com/tech-policy/2026/02/discord-faces-backlash-over-age-checks-after-data-breach-exposed-70000-ids/" target="_blank" rel="noopener noreferrer">Exodus from Discord...</a><br>
  </small>
</div>

---

*"But I have nothing to hide!"*

This argument hasn't aged well. It assumes the rules won't change, that platforms won't be sold, and the data won't be misused, especially against those less fortunate than us.

**Data Privacy** isn't about secrecy; it's about who holds power over your information and what they can do with it. **Digital Sovereignty** extends that question to jurisdiction: not just who holds the power, but under what law, with what accountability, and at what cost to community and the environment. 

For Canadians, there is a persistent gap between the privacy protections we assume we have and what is actually enforceable when a service runs on US infrastructure, regardless of where the physical servers actually sit. This isn't about national borders. It's about **legibility and accountability**.

Every time we sign up or sign in we should be asking ourselves: **who unfairly profits from our convenience, and at whose expense?**

---

> "There is no situation that is morally more evil than the situation in which evil has been so fully integrated into the situation that the individual itself is spared from being evil […] The machines that populate our world have spared us from incurring guilt, just as they have relieved us from baking bread or from calculating statistics." — **Güther Anders**.

---