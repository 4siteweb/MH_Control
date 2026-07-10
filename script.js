document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click", () => sidebar.classList.toggle("open"));

  document.querySelectorAll(".sidebar nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".sidebar nav a").forEach(a => a.classList.remove("active"));
      link.classList.add("active");
      sidebar.classList.remove("open");
    });
  });

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
        <ul>${item.details.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>`;
    timeline.appendChild(article);
  });

  const qGrid = document.getElementById("qualificationGrid");
  qualifications.forEach(item => {
    const div = document.createElement("div");
    div.className = "qualification";
    div.innerHTML = `<i data-lucide="badge-check"></i><span>${item}</span>`;
    qGrid.appendChild(div);
  });

  const archive = document.getElementById("archiveList");
  albums.forEach((url, i) => {
    const a = document.createElement("a");
    a.className = "archive-item";
    a.href = url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.dataset.search = `album ${i+1} historical electrical retail data project`;
    a.innerHTML = `<span>Album ${String(i + 1).padStart(2, "0")}</span><i data-lucide="external-link"></i>`;
    archive.appendChild(a);
  });

  document.getElementById("projectSearch").addEventListener("input", e => {
    const term = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".archive-item").forEach(item => {
      item.style.display = item.dataset.search.includes(term) ? "flex" : "none";
    });
  });

  lucide.createIcons();
});