const projects = [
  {
    id: "sunny-fleet",
    title: "Sunny Fleet Accountability",
    subtitle: "Internal SaaS platform",
    year: "2025",
    description:
      "Fleet and inventory platform built for Sunny Car Detailing after meeting with their manager to understand operational pain points. I prototyped several versions, then shipped a production tool that tracks vehicle accountability logs, equipment maintenance, and automated inventory restock alerts. Firebase keeps everything online, secure, and scalable as the company adds vehicles and branches.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase"],
    cover: "images/sunny-dashboard.png",
    shots: [
      {
        src: "images/sunny-dashboard.png",
        caption:
          "Fleet dashboard — vehicles in use, inspections today, open issues, and calendar.",
      },
      {
        src: "images/sunny-equipment.png",
        caption: "Global inventory — owned vs. assigned equipment with status filters and QR scans.",
      },
      {
        src: "images/sunny-checklist.png",
        caption: "Driver inspection checklist with pass/flag responses and permanent issue logging.",
      },
      {
        src: "images/sunny-issues.png",
        caption: "Active equipment issues with status updates and a full audit trail.",
      },
      {
        src: "images/sunny-settings.png",
        caption: "Fleet settings — configurable inspection categories, questions, and answer formats.",
      },
    ],
  },
  {
    id: "wiggy-wash",
    title: "Team Operations App",
    subtitle: "Wiggy Wash — in daily production use",
    year: "2026",
    description:
      "Digital scorecard and job-tracking app for the Wiggy Wash team in Springville. Their manager described how they tracked performance on paper scorecards — I turned that workflow into software that auto-calculates daily and monthly metrics, saving several hours each week on manual tallying. Managers track team goals, cars by type, memberships, single washes, and shop sales, and can push new goals with rewards when targets are hit.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase"],
    cover: "images/wiggy-master.png",
    repoUrl: "https://github.com/aheiner2001/wiggywash_beta",
    shots: [
      {
        src: "images/wiggy-master.png",
        caption:
          "Master sheet — revenue trends, per-employee breakdown, and a dense scorecard of memberships, single washes, and shop sales.",
      },
      {
        src: "images/wiggy-goals.png",
        caption: "Goal push with an attached reward, plus team-wide visibility controls.",
      },
      {
        src: "images/wiggy-login.png",
        caption: "Company-code entry for employees, with Google sign-in for managers.",
      },
    ],
  },
  {
    id: "realm",
    title: "Realm RTS Game Engine",
    subtitle: "Open-source contributor — speige/Realm",
    year: "2026",
    description:
      "Open-source engine work: C# map scripts, 3-lane pathfinding logic, and gameplay trigger components. Separately, during an internship I built and hosted the Realm marketing website on AWS (I am not the game owner). Also built a Discord web viewer that pulls live community channels and threads through the Discord API.",
    tech: ["C#", ".NET", "Discord API", "AWS", "Game engine scripting"],
    cover: "images/realm-hero.jpg",
    repoUrl: "https://github.com/speige/Realm",
    shots: [
      {
        src: "images/realm-hero.jpg",
        caption: "Realm landing page — open-source arcade RTS built for custom-map makers.",
      },
      {
        src: "images/realm-intro.png",
        caption: 'Hero messaging and the "made for custom-map energy" positioning section.',
      },
      {
        src: "images/realm-download.png",
        caption: "Pre-alpha download and community section linking the Discord and forum.",
      },
      {
        src: "images/realm-discord.png",
        caption:
          "Realm Discord web viewer — channels and threads pulled live through the Discord API and made searchable.",
      },
    ],
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
  "Webflow",
  "Flask",
  "REST & Discord APIs",
  "Git / GitHub",
  "Pandas & NumPy",
  "Scikit-learn",
];

const projectsList = document.getElementById("projects-list");
const skillsList = document.getElementById("skills-list");
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

function projectLinks(project) {
  const links = [];
  if (project.liveUrl) {
    links.push(
      `<a href="${project.liveUrl}" class="project-external" target="_blank" rel="noreferrer">View live</a>`,
    );
  }
  if (project.repoUrl) {
    links.push(
      `<a href="${project.repoUrl}" class="project-external" target="_blank" rel="noreferrer">View repo</a>`,
    );
  }
  if (!links.length) return "";
  return `<div class="project-links">${links.join("")}</div>`;
}

function renderProjects() {
  projectsList.innerHTML = projects
    .map(
      (project) => `
      <article class="project" data-project-id="${project.id}">
        <div>
          <p class="project-meta">${project.year} · ${project.subtitle}</p>
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <ul class="tech-tags">
            ${project.tech.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          ${projectLinks(project)}
          <button type="button" class="project-link" data-open="${project.id}">
            View project
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
        <button type="button" class="project-cover" data-open="${project.id}" aria-label="View screenshots of ${project.title}">
          <div class="shot cover">
            <img src="${project.cover}" alt="${project.title} cover screenshot" loading="lazy" />
          </div>
          <p class="screenshot-count">${project.shots.length} screenshots</p>
        </button>
      </article>
    `,
    )
    .join("");
}

function renderSkills() {
  skillsList.innerHTML = skills.map((skill) => `<li>${skill}</li>`).join("");
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  document.getElementById("modal-subtitle").textContent = project.subtitle;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;

  document.getElementById("modal-shots").innerHTML = project.shots
    .map(
      (shot) => `
      <figure>
        <div class="shot contain">
          <img src="${shot.src}" alt="${shot.caption}" loading="lazy" />
        </div>
        <figcaption>${shot.caption}</figcaption>
      </figure>
    `,
    )
    .join("");

  modal.showModal();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open]");
    if (trigger) {
      openProject(trigger.dataset.open);
    }
  });

  modalClose.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const clickedInDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!clickedInDialog) {
      modal.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.open) {
      modal.close();
    }
  });
}

document.getElementById("year").textContent = String(new Date().getFullYear());
renderProjects();
renderSkills();
bindEvents();
