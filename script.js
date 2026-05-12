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
    name: "Sapporo Nishi Weather",
    platform: "windows",
    version: "v1.0.0",
    icon: "SW",
    color: "#b86434",
    summary: "札幌市西区の天気を素早く確認できるWindows向けツールです。",
    tags: ["Windows", "天気", "地域情報"],
    download: "#"
  },
  {
    name: "SystemTrayMonitor",
    platform: "windows",
    version: "v1.0.0",
    icon: "ST",
    color: "#2f8d7e",
    summary: "通知領域に常駐し、CPUとメモリ使用率を小さなグラフで確認できるモニターです。",
    tags: ["Windows", "CPU", "メモリ"],
    download: "https://raw.githubusercontent.com/yshinada/Windows/main/downloads/SystemTrayMonitor-windows.zip"
  },
  {
    name: "YsSystemMonitor",
    platform: "windows",
    version: "v1.0.0",
    icon: "YM",
    color: "#6f72d8",
    summary: "CPU使用率、メモリ使用量、対応環境ではCPU温度も確認できるWindows 11向けモニターです。",
    tags: ["Windows", "システム", "常駐"],
    download: "https://raw.githubusercontent.com/yshinada/Windows/main/downloads/YsSystemMonitor-windows.zip"
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
