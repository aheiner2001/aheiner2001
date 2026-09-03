import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, X } from "lucide-react";
import sunnyDashboard from "@/assets/Screenshot_2026-09-02_at_1.45.03_PM.png.asset.json";
import sunnyEquipment from "@/assets/Screenshot_2026-09-02_at_1.45.30_PM.png.asset.json";
import sunnyChecklist from "@/assets/Screenshot_2026-09-02_at_1.45.55_PM.png.asset.json";
import sunnyIssues from "@/assets/Screenshot_2026-09-02_at_1.46.41_PM.png.asset.json";
import sunnySettings from "@/assets/Screenshot_2026-09-02_at_1.47.16_PM.png.asset.json";
import wiggyLogin from "@/assets/Screenshot_2026-09-02_at_1.47.35_PM.png.asset.json";
import wiggyMaster from "@/assets/Screenshot_2026-09-02_at_1.51.00_PM.png.asset.json";
import wiggyGoals from "@/assets/Screenshot_2026-09-02_at_1.51.27_PM.png.asset.json";
import realmDiscord from "@/assets/Screenshot_2026-09-02_at_1.50.17_PM.png.asset.json";
import realmHero from "@/assets/realm-banner.png.asset.json";
import realmIntro from "@/assets/realm-intro.png.asset.json";
import realmFeatures from "@/assets/realm-features.png.asset.json";
import realmEditor from "@/assets/realm-editor.png.asset.json";
import realmDownload from "@/assets/realm-download2.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaron Heiner — Computer Science Student & Software Builder" },
      {
        name: "description",
        content:
          "Portfolio of Aaron Heiner: internal SaaS tools, Discord API integrations, open-source game systems, and machine learning projects.",
      },
      { property: "og:title", content: "Aaron Heiner — Computer Science Student & Software Builder" },
      {
        property: "og:description",
        content:
          "Practical software for real operations — internal SaaS tools, Discord integrations, open-source game systems, and ML models.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aaron Heiner",
          jobTitle: "Computer Science Student & Software Builder",
          email: "mailto:aaron.heiner.dev@gmail.com",
          url: "https://github.com/aheiner2001/Practical-Builds",
          sameAs: [
            "https://www.linkedin.com/in/aaron-heiner",
            "https://github.com/aheiner2001/Practical-Builds",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

type Shot = { caption: string; src: string };
type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tech: string[];
  cover: string;
  shots: Shot[];
};

const projects: Project[] = [
  {
    id: "sunny-fleet",
    title: "Sunny Fleet Accountability",
    subtitle: "Internal SaaS platform",
    year: "2025",
    description:
      "Fleet and inventory platform built for mobile car-detailing management. Tracks vehicle usage accountability logs, equipment maintenance, and automated inventory restock alerts — designed for multi-vehicle scale with role-based access control.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase"],
    cover: sunnyDashboard.url,
    shots: [
      {
        src: sunnyDashboard.url,
        caption: "Fleet dashboard — vehicles in use, inspections today, open issues, and calendar.",
      },
      {
        src: sunnyEquipment.url,
        caption: "Global inventory — owned vs. assigned equipment with status filters and QR scans.",
      },
      {
        src: sunnyChecklist.url,
        caption: "Driver inspection checklist with pass/flag responses and permanent issue logging.",
      },
      {
        src: sunnyIssues.url,
        caption: "Active equipment issues with status updates and a full audit trail.",
      },
      {
        src: sunnySettings.url,
        caption: "Fleet settings — configurable inspection categories, questions, and answer formats.",
      },
    ],
  },
  {
    id: "wiggy-wash",
    title: "Team Operations App",
    subtitle: "Wiggy Wash — in daily production use",
    year: "2025",
    description:
      "Scheduling and job-tracking app for a car wash team. Managers track team goals, cars broken down by type, membership tallies, single washes, and shop sales — and can push new goals with rewards when targets are hit. Iterated directly with non-technical staff; a multi-location version is in development.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase"],
    cover: wiggyMaster.url,
    shots: [
      {
        src: wiggyMaster.url,
        caption:
          "Master sheet — revenue trends, per-employee breakdown, and a dense scorecard of memberships, single washes, and shop sales.",
      },
      {
        src: wiggyGoals.url,
        caption: "Goal push with an attached reward, plus team-wide visibility controls.",
      },
      {
        src: wiggyLogin.url,
        caption: "Company-code entry for employees, with Google sign-in for managers.",
      },
    ],
  },
  {
    id: "realm",
    title: "Realm RTS Game Engine",
    subtitle: "Open-source contributor — speige/Realm",
    year: "2024–2025",
    description:
      "Authored custom map scripts, 3-lane pathfinding logic, and gameplay trigger components in C#. Updated and maintained core game APIs, improved script execution efficiency, and resolved framework issues alongside other contributors. Also built a web viewer that pulls the Realm community Discord through the Discord API so channels and threads are searchable and browsable on the web.",
    tech: ["C#", ".NET", "Discord API", "Game engine scripting"],
    cover: realmHero.url,
    shots: [
      {
        src: realmHero.url,
        caption: "Realm landing page — open-source arcade RTS built for custom-map makers.",
      },
      {
        src: realmIntro.url,
        caption: "Hero messaging and the \"made for custom-map energy\" positioning section.",
      },
      {
        src: realmFeatures.url,
        caption:
          "Engine feature set: multiplayer scale, server-authoritative netcode, legacy map compatibility, and open assets.",
      },
      {
        src: realmEditor.url,
        caption:
          "Creator suite — terrain sculpting, unit editing, and hot-reload live testing across three in-editor maps.",
      },
      {
        src: realmDownload.url,
        caption: "Pre-alpha download and community section linking the Discord and forum.",
      },
      {
        src: realmDiscord.url,
        caption:
          "Realm Discord web viewer — channels and threads pulled live through the Discord API and made searchable.",
      },
    ],
  },
];


const smaller = [
  {
    title: "ML Regression Neural Network",
    description:
      "Feature engineering with cyclical time and weather encoding plus hyperparameter tuning, for a 50%+ accuracy improvement over the baseline.",
    tech: "Python · Pandas · NumPy · Scikit-learn",
  },
  {
    title: "C# Pickleball Trainer",
    description:
      "Console training app built on OOP class hierarchies with match logging, drill routines, stats, and file I/O persistence.",
    tech: "C# · .NET",
  },
  {
    title: "Cloud Database To-Do List",
    description:
      "Web app with user authentication, session management, and a hosted relational database backing task storage.",
    tech: "Flask · MySQL",
  },
];

const skills = [
  "Python",
  "C#",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Next.js 14",
  "React",
  "Tailwind CSS",
  "Firebase",
  "Flask",
  "REST & Discord APIs",
  "Git / GitHub",
  "Pandas & NumPy",
  "Scikit-learn",
];

function Shot({ src, alt, cover }: { src: string; alt: string; cover?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-secondary">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={
          cover
            ? "aspect-[16/10] w-full object-cover object-top"
            : "w-full object-contain"
        }
      />
    </div>
  );
}


function Portfolio() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl">
            Aaron Heiner
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-20 sm:pt-32 sm:pb-28">
          <p className="text-xs uppercase tracking-[0.22em] text-brand">Provo / Orem, Utah</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
            I build practical software for real operations.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Computer Science student, software builder, and AI practitioner — from internal SaaS
            tools and Discord integrations to open-source game systems and machine learning models.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              View selected work
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <FileText className="size-4" /> Resume
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              href="mailto:aaron.heiner.dev@gmail.com"
            >
              <Mail className="size-4" /> aaron.heiner.dev@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              href="https://www.linkedin.com/in/aaron-heiner"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              href="https://github.com/aheiner2001/Practical-Builds"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-border py-20 sm:py-28">
          <h2 className="font-display text-3xl sm:text-4xl">Selected work</h2>
          <div className="mt-14 space-y-20">
            {projects.map((p) => (
              <article key={p.id} className="grid gap-8 sm:grid-cols-[1fr_1.1fr] sm:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.year} · {p.subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-brand-soft px-3 py-1 text-xs text-brand"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOpen(p)}
                    className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
                  >
                    View project <ArrowUpRight className="size-4" />
                  </button>
                </div>
                <button
                  onClick={() => setOpen(p)}
                  aria-label={`View screenshots of ${p.title}`}
                  className="group text-left"
                >
                  <Shot src={p.cover} alt={`${p.title} cover screenshot`} cover />
                  <p className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
                    {p.shots.length} screenshots
                  </p>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* More projects */}
        <section className="border-t border-border py-20 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl">Also built</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {smaller.map((s) => (
              <div key={s.title}>
                <h3 className="text-base font-medium">{s.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {s.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border py-20 sm:py-28">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr] sm:gap-16">
            <h2 className="font-display text-3xl sm:text-4xl">About</h2>
            <div>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                I'm a Computer Science student at BYU–Idaho, graduating December 2026. I work across
                full-stack web development, REST and Discord API integrations, AI workflow
                automation, and C# game logic. Most of what I build ends up in daily use by real
                teams — internal tools for local businesses, plus open-source contributions to the
                Realm RTS engine. I also run FreshPane Solutions LLC, a window-cleaning business
                I've grown past $70K in revenue, which is where a lot of my instinct for practical
                operations software comes from.
              </p>
              <ul className="mt-10 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border py-20 sm:py-28">
          <h2 className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Open to software engineering roles and internships.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:aaron.heiner.dev@gmail.com"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-heiner"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aheiner2001/Practical-Builds"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <p className="mx-auto max-w-5xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aaron Heiner · Provo / Orem, Utah
        </p>
      </footer>

      {open && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-foreground/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div className="min-h-full px-4 py-10 sm:py-16">
            <div
              className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 shadow-xl sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {open.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-3xl">{open.title}</h3>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  className="rounded-full border border-border p-2 transition-colors hover:bg-secondary"
                >
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-5 text-[15px] font-light leading-relaxed text-muted-foreground">
                {open.description}
              </p>
              <div className="mt-10 space-y-10">
                {open.shots.map((s, i) => (
                  <figure key={i}>
                    <Shot src={s.src} alt={s.caption} />
                    <figcaption className="mt-3 text-sm text-muted-foreground">
                      {s.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
