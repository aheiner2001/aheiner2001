# Recommended Portfolio Changes

Ideas to make this site more personal and polished. These are suggestions only — not implemented yet.

## Content & storytelling

1. **Rewrite the hero intro** — Try a shorter, more specific hook: e.g. “I talk to managers, find the bottleneck, and ship software their teams actually use.”
2. **Add a profile photo** in the About section — humanizes the page and helps recruiters remember you.
3. **Mention Lehi** if you want local Utah context (you’re in Provo/Orem area; Lehi is nearby tech hub).
4. **Personal interests** — Add a line about competitive pickleball, music, and caring about craft/quality in both code and creative work.
5. **Clarify Realm role** — You already note you’re not the game owner; consider a one-liner that this was internship work on AWS, separate from engine contributions.

## Resume

6. **Pick one resume format**:
   - **PDF download** (`resume.pdf`) — best for ATS and email attachments.
   - **HTML resume page** — best for in-browser reading; can mirror PDF content.
   - **Both** — PDF button + styled HTML version (current setup supports this).
7. **Add “Download PDF” only after** you place `resume.pdf` in the site folder.

## Links & contact

8. **Verify LinkedIn URL** — Update every `linkedin.com/in/aaron-heiner` link once you confirm the correct profile slug.
9. **GitHub link** — Point to your main profile (`github.com/aheiner2001`) or a pinned “best work” repo instead of only Practical-Builds if you prefer.

## Visual design

10. **Font tuning** — Instrument Serif + Work Sans is strong; if anything feels “off,” try slightly larger body text (17–18px) or more line-height in project descriptions.
11. **Project year badges** — Wiggy Wash and Realm are marked 2026; Sunny Fleet stays 2025 unless you want consistency.
12. **Compress `realm-hero.png`** — It’s ~6MB; use Squoosh or similar to get under ~500KB for faster GitHub Pages loads.
13. **Dark mode** — Optional toggle; your Lovable theme had dark variables ready if you want it later.

## Projects section

14. **Sunny Fleet** — Add a bullet on Firebase scalability for multi-branch growth (from your notes).
15. **Wiggy Wash** — Quantify impact: “saves X hours per week” if you can estimate from manager feedback.
16. **Realm** — Add missing screenshots (editor, features) if you export them from the live site.
17. **Live demo links** — If any app has a public URL, add “View live” next to “View project.”

## Technical / GitHub Pages

18. **Custom domain** — `aaronheiner.dev` or similar via GitHub Pages DNS if you own a domain.
19. **Analytics** — Lightweight privacy-friendly option (e.g. Plausible or simple GitHub referrers) to see if recruiters visit.
20. **Open Graph image** — Add `og:image` meta tag with a branded preview (name + tagline) for LinkedIn shares.

## About internship contract (not site-related)

21. **Google Docs contract** — Opening in Google Docs usually creates your own copy; you can fill and export/send without editing their original. Confirm with your supervisor whether they want PDF, DocuSign, or email reply.

---

When you’re ready to implement any of these, say which numbers you want and we can apply them to `Portfolio/site/`.
