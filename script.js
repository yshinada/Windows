const programs = [
  {
    name: "sysinfo",
    platform: "windows",
    version: "v1.0.0",
    icon: "SI",
    color: "#0b79d0",
    summary: "通知領域の近くに常駐し、CPU とメモリの使用状況を小さな表示で確認できる Windows 向けツールです。",
    tags: ["Windows", "CPU", "メモリ"],
    download: "https://raw.githubusercontent.com/yshinada/Windows/main/downloads/sysinfo.zip"
  },
  {
    name: "SClock",
    platform: "windows",
    version: "v1.0.0",
    icon: "SC",
    color: "#d06a0b",
    summary: "デスクトップで手軽に時刻を確認できるシンプルな Windows 向けクロックです。",
    tags: ["Windows", "時計", "デスクトップ"],
    download: "https://raw.githubusercontent.com/yshinada/Windows/main/downloads/SClock.zip"
  }
];

const list = document.querySelector("#program-list");
const year = document.querySelector("#year");
const aiDialogue = document.querySelector("#ai-dialogue-content, .ai-raw");

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

if (aiDialogue) {
  fetch("ai-dialogue.txt", { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("AI dialogue content could not be loaded.");
      }
      return response.text();
    })
    .then((text) => {
      aiDialogue.textContent = text;
    })
    .catch(() => {
      aiDialogue.textContent = "AIとの会話を読み込めませんでした。";
    });
}
