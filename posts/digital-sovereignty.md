---
title: "Disconnecting From Big Tech"
date: 2026-02-01
---

In January 2026, I made the resolution to ditch US-based **Big Tech** as much as possible. We are living through a time of intensifying geopolitical tension and accelerating consolidation of digital infrastructure into a small number of empire-scale corporations who surveil our activity, mine our content, and sell it back to us like bottled water — or, should I say, high fructose slop.

Most people don't care where their data lives. We just want what's cheap, familiar, and what works. The real costs of that convenience are never disclosed the moment we sign up. We have quietly normalized storing our digital fingerprints under legal systems we never agreed to, in jurisdictions where we have no standing. That normalization is worth resisting.

**Infrastructure isn't neutral**. The same data pipelines and AI systems powering our productivity tools are procured for surveillance, unlawful policing, and warfare. The small print doesn't mention that. And none of it is more ethical for being algorithmic. **Small Tech**, not anti-technology, is the framing here. Smaller, local alternatives that can actually be held accountable; not platforms that answer to no one.

For inspiration, I looked to Paris Marx's <a href="https://disconnect.blog/getting-off-us-tech-a-guide/" target="_blank" rel="noopener noreferrer">Getting Off US Tech</a>, Scott Galloway's <a href="https://www.resistandunsubscribe.com/" target="_blank" rel="noopener noreferrer">Resist and Unsubscribe</a>, and <a href="https://quitgpt.org/" target="_blank" rel="noopener noreferrer">QuitGPT</a>, but with a few different needs as a software developer focused open source tooling and the responsible use of AI, which, for better or worse, is now considered a professional baseline.

I've started where impact is highest and personal friction is lowest, while weighing cost, effort, and the convenience of consolidating under one provider where it makes sense.

---

<!-- card template
<div class="card">
  <h3>SERVICE</h3>
  <p><span class="label">to:</span> <span class="to">TO 🇨🇭</span></p>
  <p><span class="label">from:</span> <span class="from">FROM 🇺🇸</span></p>
  <small>
    - Note<br>
    - Note<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free / Freemium / Min / Mid / Max</span></small>
</div>
-->

## Identity

<div class="card">
  <h3>OS Desktop</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">macOS 🇺🇸</span></p>
  <small>
    - macOS required for professional dev and some client tooling<br>
    - <strong>Linux</strong> is the principled choice and long-term goal<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>OS Mobile</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Android / Pixel 🇺🇸</span></p>
  <small>
    - Android is required for professional dev and client tooling<br>
    - <strong>GrapheneOS</strong> is privacy-hardened Android fork and a Canadian-led open source project<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>Email</h3>
  <p><span class="label">to:</span> <span class="to">Proton Mail 🇨🇭</span></p>
  <p><span class="label">from:</span> <span class="from">Gmail 🇺🇸</span></p>
  <small>
    - End-to-end encrypted by default<br>
    - Proton suite consolidates a few useful services<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Freemium</span></small>
</div>

<div class="card">
  <h3>DNS</h3>
  <p><span class="label">to:</span> <span class="to">NextDNS 🇫🇷</span></p>
  <p><span class="label">from:</span> <span class="from">TekSavvy Default 🇨🇦</span></p>
  <small>
    - <em>ISP: TekSavvy</em> 🇨🇦 — Independent, advocates for net neutrality<br>
    - Default ISP resolvers log every domain you visit regardless<br>
    - Encrypted DNS (DoH/DoT) prevents ISP-level surveillance<br>
    - Configurable, privacy-first<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Freemium</span></small>
</div>

<div class="card">
  <h3>VPN</h3>
  <p><span class="label">to:</span> <span class="to">Proton VPN 🇨🇭</span></p>
  <p><span class="label">from:</span> <span class="from">TunnelBear 🇨🇦</span></p>
  <small>
    - No-logs policy, open source, independently audited<br>
    - TunnelBear was acquired by McAfee (US) in 2018<br>
    - Cost savings bundled with Proton suite<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Freemium</span></small>
</div>

<div class="card">
  <h3>Password Manager</h3>
  <p><span class="label">to:</span> <span class="to">Proton Pass 🇨🇭</span></p>
  <p><span class="label">from:</span> <span class="from">macOS Keychain 🇺🇸</span></p>
  <small>
    - Open source, end-to-end encrypted<br>
    - Cross-platform including Linux<br>
    - Bundled with Proton suite<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Freemium</span></small>
</div>

---

## Software Development

<div class="card">
  <h3>Browser</h3>
  <p><span class="label">to:</span> <span class="to">Mullvad Browser 🇸🇪 + Brave 🇺🇸</span></p>
  <p><span class="label">from:</span> <span class="from">Chrome 🇺🇸</span></p>
  <small>
    - Mullvad for personal browsing — anti-fingerprinting, no telemetry<br>
    - Brave for dev and testing — Chromium-based, Google-free<br>
    - Chrome kept for dev and QA only<br>
    - A browser with &lt;3% market share isn't viable as a primary for web dev<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>Code Repository</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">GitHub 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>Web Hosting</h3>
  <p><span class="label">to:</span> <span class="to">Websavers.ca 🇨🇦</span></p>
  <p><span class="label">from:</span> <span class="from">Netlify 🇺🇸</span></p>
  <small>
    - Canadian-owned and operated, servers in Canada<br>
    - PIPEDA compliant<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Min</span></small>
</div>

---

## AI

<div class="card">
  <h3>AI Code Assist</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Claude 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Max</span></small>
</div>

<div class="card">
  <h3>LLM / Deep Research / Chat</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Claude / Gemini / NotebookLM 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Max</span></small>
</div>

---

## Data

<div class="card">
  <h3>Cloud Storage</h3>
  <p><span class="label">to:</span> <span class="to">Proton Drive 🇨🇭</span></p>
  <p><span class="label">from:</span> <span class="from">Google Drive 🇺🇸</span></p>
  <small>
    - End-to-end encrypted<br>
    - Still maturing as a product but functional for personal storage<br>
    - Bundled with Proton suite<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Freemium</span></small>
</div>

<div class="card">
  <h3>Docs & Notes</h3>
  <p><span class="label">to:</span> <span class="to">Cdox.ca 🇨🇦</span></p>
  <p><span class="label">from:</span> <span class="from">Google Docs / SimpleNote 🇺🇸</span></p>
  <small>
    - Canadian-hosted, privacy-first<br>
    - Migration ongoing — Google Docs network effects are real<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Min</span></small>
</div>

<div class="card">
  <h3>Calendar</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Google Calendar 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Freemium</span></small>
</div>

---

## Communications

<div class="card">
  <h3>Messaging</h3>
  <p><span class="label">to:</span> <span class="to">Signal 🇺🇸</span></p>
  <p><span class="label">from:</span> <span class="from">Various</span></p>
  <small>
    - Open source, end-to-end encrypted<br>
    - Non-profit, no data monetization<br>
    - US-based but best available option in this category<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>Comms & Collaboration</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Discord / Slack 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

---

## Consumption

<div class="card">
  <h3>Search</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Google 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>Maps</h3>
  <p><span class="label">to:</span> <span class="to"><i>In progress…</i></span></p>
  <p><span class="label">from:</span> <span class="from">Google Maps 🇺🇸</span></p>
  <small><span class="cost-label">$:</span> <span class="cost-value">Free</span></small>
</div>

<div class="card">
  <h3>Music</h3>
  <p><span class="label">to:</span> <span class="to">Qobuz 🇫🇷</span></p>
  <p><span class="label">from:</span> <span class="from">Spotify 🇺🇸</span></p>
  <small>
    - <a href="https://www.fightforthefuture.org/actions/spotify-whacked/" target="_blank" rel="noopener noreferrer">Spotify whacked</a><br>
    - Qobuz provides better artist compensation and audio quality<br>
  </small>
  <small><span class="cost-label">$:</span> <span class="cost-value">Mid</span></small>
</div>

---

"But I have nothing to hide!" 

This argument hasn't aged well. It assumes the rules won't change, that platforms won't be sold, and the data won't be misused. 

**Data Privacy** isn't about secrecy; it's about who holds power over your information and what they can do with it. **Digital Sovereignty** extends that question to jurisdiction: not just who holds the power, but under what law, with what accountability, and at what cost to community and the environment. For Canadians, there is a persistent gap between the privacy protections we assume we have and what is actually enforceable when a service runs on US infrastructure, regardless of where the physical servers actually sit. This isn't about national borders. It's about **legibility**.

Every time we sign up or sign in we should be asking ourselves: **who unfairly profits from our convenience, and at whose expense?**

---

> "There is no situation that is morally more evil than the situation in which evil has been so fully integrated into the situation that the individual itself is spared from being evil […] The machines that populate our world have spared us from incurring guilt, just as they have relieved us from baking bread or from calculating statistics." — **Güther Anders**.

---