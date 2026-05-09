const programs = [
  {
    name: "Sapporo Nishi Weather",
    platform: "windows",
    version: "v1.0.0",
    icon: "SW",
    color: "#b86434",
    summary: "札幌市西区の天気を素早く確認できるWindows向けツールです。",
    tags: ["Windows", "天気", "地域情報"],
    download: "#"
  }
];

const list = document.querySelector("#program-list");
const year = document.querySelector("#year");

function createProgramCard(program) {
  const card = document.createElement("article");
  card.className = "program-card";
  card.dataset.platform = program.platform;
  card.innerHTML = `
    <div class="program-icon" style="--icon-bg: ${program.color}">${program.icon}</div>
    <div class="program-meta">
      <span class="pill">${program.platform === "mac" ? "Mac" : "Windows"}</span>
      <span class="pill">${program.version}</span>
    </div>
    <h3>${program.name}</h3>
    <p>${program.summary}</p>
    <div class="tag-row">
      ${program.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
    </div>
    <div class="card-actions">
      <a class="button primary" href="${program.download}">ダウンロード</a>
      <a class="button secondary" href="#support">問い合わせ</a>
    </div>
  `;
  return card;
}

function renderPrograms() {
  list.replaceChildren();
  programs.forEach((program) => list.appendChild(createProgramCard(program)));
}

year.textContent = new Date().getFullYear();
renderPrograms();
