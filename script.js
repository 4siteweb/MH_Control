document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const nav = document.getElementById("mainNav");
  document.getElementById("menuButton").addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

  const timeline = document.getElementById("timeline");
  careerData.forEach(item => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = `
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-content">
        <h3>${item.company}</h3>
        <div class="timeline-role">${item.role}</div>
        <p>${item.summary}</p>
        <ul>${item.details.map(detail => `<li>${detail}</li>`).join("")}</ul>
      </div>`;
    timeline.appendChild(article);
  });

  const archiveList = document.getElementById("archiveList");
  albums.forEach((url, index) => {
    const item = document.createElement("a");
    item.className = "archive-item";
    item.href = url;
    item.target = "_blank";
    item.rel = "noreferrer";
    item.dataset.search = `album ${index + 1} electrical retail data controls utilities project history`;
    item.innerHTML = `<span>Album ${String(index + 1).padStart(2, "0")}</span><i data-lucide="arrow-up-right"></i>`;
    archiveList.appendChild(item);
  });

  document.getElementById("projectSearch").addEventListener("input", event => {
    const term = event.target.value.toLowerCase().trim();
    document.querySelectorAll(".archive-item").forEach(item => {
      item.style.display = item.dataset.search.includes(term) ? "flex" : "none";
    });
  });

  const referenceGrid = document.getElementById("referenceGrid");
  referenceItems.forEach(item => {
    const link = document.createElement("a");
    link.className = "reference-card";
    link.href = item.url;
    if (item.url.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.innerHTML = `<small>${item.type}</small><h3>${item.title}</h3><p>${item.description}</p><span>${item.status}</span>`;
    referenceGrid.appendChild(link);
  });

  const qGrid = document.getElementById("qualificationGrid");
  qualifications.forEach(item => {
    const block = document.createElement("div");
    block.className = "qualification";
    block.innerHTML = `<i data-lucide="badge-check"></i><span>${item}</span>`;
    qGrid.appendChild(block);
  });

  document.getElementById("messageForm").addEventListener("submit", event => {
    event.preventDefault();
    const category = document.getElementById("messageCategory").value;
    const site = document.getElementById("messageSite").value.trim();
    const status = document.getElementById("messageStatus").value;
    const body = document.getElementById("messageBody").value.trim();

    const subject = `[MH Control] ${category} — ${site} — ${status}`;
    const message = `Category: ${category}\nSite / Job: ${site}\nStatus: ${status}\n\n${body}\n\nSent from MH Control WrightLine Messages`;
    window.location.href = `mailto:4siteonline@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });

  lucide.createIcons();
});