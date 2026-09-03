const reflections = [
  {
    date: "Sep 2026",
    title: "What AI means for me as a graduating developer",
    status: "draft",
    excerpt:
      "I'm finishing my CS degree in a moment when AI tools are everywhere — and the honest answer is I use them a lot, but not the way people assume. For me they're less about skipping the work and more about moving faster through the boring parts so I can spend time on judgment: talking to a manager, understanding the real constraint, and making sure what ships actually fits the workflow.",
    tags: ["AI", "Career", "Learning"],
  },
  {
    date: "Sep 2026",
    title: "Tools that have helped me ship real software",
    status: "draft",
    excerpt:
      "Firebase for getting auth and data online without overbuilding. Next.js for internal tools managers can actually use. Cursor and similar assistants for scaffolding, refactors, and explaining unfamiliar APIs. The pattern: pick boring, proven infrastructure for the foundation, then iterate with the people who will use it every day.",
    tags: ["Tools", "Workflow"],
  },
  {
    date: "Coming soon",
    title: "The manager conversation before the first line of code",
    status: "planned",
    excerpt:
      "Sunny Fleet, Wiggy Wash, and similar projects all started the same way: someone described a painful manual process. I want to write about what I ask, what I listen for, and how that shapes better software than jumping straight into features.",
    tags: ["Product", "Internships"],
  },
  {
    date: "Coming soon",
    title: "AI advice is like financial advice on the internet",
    status: "planned",
    excerpt:
      "I hear people say use AI for this, automate that — and I think, that's awesome, but how do I actually implement it? It reminds me of finance content online: great principles, vague execution, until something slowly clicks and you realize you have a whole toolbox. I'm still in that learning phase, and I want to write about it honestly.",
    tags: ["AI", "Learning", "Mindset"],
  },
];

const backlog = [
  "Imposter syndrome and staying productive — when feeling behind isn't the same as being behind",
  "The initial shock of entering the developer world (classes vs. real projects)",
  "When the AI toolbox finally clicks — slow learning, not overnight expertise",
  "What I'm still trying to learn (and that's okay)",
  "Using AI without outsourcing your thinking",
  "Building in regulated environments (compliance language, staging, no guessing)",
  "What running a small business taught me about internal tools",
  "From paper scorecards to a live dashboard — digitizing an existing workflow",
];

function renderReflections() {
  document.getElementById("reflections-list").innerHTML = reflections
    .map(
      (item) => `
      <article class="reflection-card">
        <div class="reflection-card-header">
          <p class="reflection-meta">
            ${item.date}
            <span class="reflection-status reflection-status-${item.status}">${item.status}</span>
          </p>
          <h2>${item.title}</h2>
        </div>
        <p class="reflection-excerpt">${item.excerpt}</p>
        <ul class="reflection-tags">
          ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </article>
    `,
    )
    .join("");
}

function renderBacklog() {
  document.getElementById("backlog-list").innerHTML = backlog
    .map((item) => `<li>${item}</li>`)
    .join("");
}

document.getElementById("year").textContent = String(new Date().getFullYear());
renderReflections();
renderBacklog();
