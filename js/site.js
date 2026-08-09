(() => {
  "use strict";

  const galleryImages = [
    { src: "images/gallery/five.jpg", alt: "Research group" },
    { src: "images/gallery/six.jpg", alt: "Academic exchange" },
    { src: "images/gallery/seven.jpg", alt: "Conference moment" },
    { src: "images/gallery/eight.jpg", alt: "Research community" },
    { src: "images/gallery/nine.jpg", alt: "Campus life" },
    { src: "images/gallery/ten.jpg", alt: "Shared moments" }
  ];

  const icon = (name) => `<i class="fa-solid fa-${name}" aria-hidden="true"></i>`;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function highlightedAuthors(authors) {
    return escapeHtml(authors).replaceAll("Yiyan Zhang", "<strong>Yiyan Zhang</strong>");
  }

  function publicationActions(paper) {
    const labels = { paper: "Paper", code: "Code", figure: "Figure", cites: "Cites" };
    const actions = [];

    if (paper.pdf) {
      actions.push(`<a href="${escapeHtml(paper.pdf)}" target="_blank" rel="noopener noreferrer">${icon("file-lines")} ${labels.paper}</a>`);
    }
    if (paper.code) {
      actions.push(`<a href="${escapeHtml(paper.code)}" target="_blank" rel="noopener noreferrer">${icon("code")} ${labels.code}</a>`);
    }
    if (paper.hasModelImage && paper.modelImage) {
      actions.push(`<button type="button" data-model-image="${escapeHtml(paper.modelImage)}" data-model-alt="${escapeHtml(paper.modelImageAlt || paper.title)}">${icon("image")} ${labels.figure}</button>`);
    }
    if (paper.citations !== undefined && paper.citations !== null) {
      const scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(paper.title)}`;
      actions.push(`<a href="${scholarUrl}" target="_blank" rel="noopener noreferrer">${icon("quote-right")} ${paper.citations} ${labels.cites}</a>`);
    }
    return actions.join("");
  }

  function publicationItem(paper) {
    const type = paper.type === "journal" ? "Journal article" : "Conference paper";

    return `
      <article class="publication-item" data-publication-id="${paper.id}">
        <div class="publication-row">
          <div>
            <p class="publication-kicker">${type}</p>
            <h3 class="publication-title">${escapeHtml(paper.title)}</h3>
            <p class="publication-authors">${highlightedAuthors(paper.authors)}</p>
            <p class="publication-meta">
              <span class="publication-venue">${escapeHtml(paper.venue)}</span>
              ${paper.journalInfo ? `<span>${escapeHtml(paper.journalInfo.replace(/[()]/g, "").replace("2026 JCR ", ""))}</span>` : ""}
              ${paper.publicationDetails ? `<span>${escapeHtml(paper.publicationDetails)}</span>` : ""}
              ${paper.esiHighlyCited ? '<span class="publication-badge">ESI Highly Cited</span>' : ""}
            </p>
          </div>
          <div class="publication-actions">${publicationActions(paper)}</div>
        </div>
      </article>`;
  }

  function renderPublicationList(papers) {
    const container = document.getElementById("publicationsList");
    if (!container) return;
    const sorted = typeof sortPapers === "function" ? sortPapers([...papers]) : [...papers];
    const groups = sorted.reduce((result, paper) => {
      if (!result.has(paper.year)) result.set(paper.year, []);
      result.get(paper.year).push(paper);
      return result;
    }, new Map());

    container.innerHTML = [...groups.entries()]
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, yearPapers]) => `
        <section class="year-group" aria-labelledby="year-${year}">
          <h3 class="year-label" id="year-${year}">${year}</h3>
          <div class="year-items">${yearPapers.map(publicationItem).join("")}</div>
        </section>`)
      .join("");
  }

  // papers.js registers its listener first; replacing the global renderer keeps its data and sorting logic.
  window.renderPapers = renderPublicationList;

  function renderGallery() {
    const container = document.getElementById("galleryGrid");
    if (!container) return;
    container.innerHTML = galleryImages.map((image, index) => `
      <button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="${escapeHtml(image.alt)}">
        <img src="${image.src}" alt="${escapeHtml(image.alt)}" loading="lazy">
        <span>${icon("expand")}</span>
      </button>`).join("");
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("themePreference", theme);
    const button = document.getElementById("darkModeToggle");
    if (!button) return;
    const dark = theme === "dark";
    button.innerHTML = `<i class="fa-regular fa-${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
    button.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
  }

  function openImage(src, caption) {
    const dialog = document.getElementById("mediaDialog");
    const image = document.getElementById("dialogImage");
    const label = document.getElementById("dialogCaption");
    image.src = src;
    image.alt = caption;
    label.textContent = caption;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  function bindDialog(dialog) {
    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  }

  function bindNavigation() {
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.getElementById("siteNav");
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menuButton.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}" aria-hidden="true"></i>`;
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }));

    const observedSections = ["home", "publications", "services", "gallery", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      nav.querySelectorAll("a").forEach((link) => link.classList.toggle("active", link.hash === `#${visible.target.id}`));
    }, { rootMargin: "-20% 0px -60%", threshold: [0, .25, .5] });
    observedSections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("themePreference");
    applyTheme(savedTheme || "dark");
    renderPublicationList(papersData);
    renderGallery();
    bindNavigation();

    document.getElementById("darkModeToggle").addEventListener("click", () => {
      applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });

    document.getElementById("publicationsList").addEventListener("click", (event) => {
      const button = event.target.closest("[data-model-image]");
      if (button) openImage(button.dataset.modelImage, button.dataset.modelAlt);
    });
    document.getElementById("galleryGrid").addEventListener("click", (event) => {
      const button = event.target.closest("[data-gallery-index]");
      if (!button) return;
      const image = galleryImages[Number(button.dataset.galleryIndex)];
      openImage(image.src, image.alt);
    });

    const mediaDialog = document.getElementById("mediaDialog");
    const wechatDialog = document.getElementById("wechatDialog");
    bindDialog(mediaDialog);
    bindDialog(wechatDialog);
    document.getElementById("wechatButton").addEventListener("click", () => {
      wechatDialog.showModal();
      document.body.classList.add("dialog-open");
    });

    if (window.scholarMetrics?.totalCitations !== undefined) {
      document.getElementById("totalCitations").textContent = scholarMetrics.totalCitations;
    }
    document.getElementById("currentYear").textContent = new Date().getFullYear();
  });
})();
