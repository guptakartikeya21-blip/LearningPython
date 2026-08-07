/**
 * ====================================================
 * FeriSmart — Main Application Logic (100% Multilingual)
 * Supports English ('en'), Hindi ('hi'), Telugu ('te')
 * ====================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ── Cached DOM references ─────────────────────────── */
  const header        = document.getElementById("header");
  const hamburger     = document.getElementById("hamburger");
  const navList       = document.getElementById("nav-list");
  const cardGrid      = document.getElementById("card-grid");
  const searchInput   = document.getElementById("search-input");
  const resultsCount  = document.getElementById("results-count");
  const modalOverlay  = document.getElementById("modal-overlay");
  const modalBody     = document.getElementById("modal-body");
  const modalCloseBtn = document.getElementById("modal-close");
  const calcSelect    = document.getElementById("calc-recipe-select");
  const calcSlider    = document.getElementById("calc-volume-slider");
  const calcNumber    = document.getElementById("calc-volume-number");
  const calcSliderVal = document.getElementById("calc-slider-value");
  const calcResultsEl = document.getElementById("calc-results-body");
  const calcCopyBtn   = document.getElementById("calc-copy-btn");
  const toastEl       = document.getElementById("toast");
  const compTableBody = document.getElementById("comparison-table-body");
  const langSelect    = document.getElementById("lang-select");

  /* ── State ─────────────────────────────────────────── */
  let activeFilters = { crops: [], nutrients: [] };
  let searchQuery   = "";
  let currentLang   = localStorage.getItem("ferismart_lang") || "en";

  /* ════════════════════════════════════════════════════
     1. i18n LANGUAGE ENGINE
     ════════════════════════════════════════════════════ */

  function t(key, vars = {}) {
    let text = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
            || (TRANSLATIONS["en"] && TRANSLATIONS["en"][key])
            || key;
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, v);
    }
    return text;
  }

  function applyLanguage() {
    // Translate static elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const text = t(key);
      if (text) el.textContent = text;
    });

    // Update search placeholder
    if (searchInput) {
      searchInput.placeholder = t("lib_search_placeholder");
    }

    // Re-render dynamic components
    renderCards();
    buildComparisonTable();
    updateCalculator();
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("ferismart_lang", currentLang);

    if (langSelect) langSelect.value = currentLang;

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });

    applyLanguage();
  }

  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Initial button state sync
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  /* ════════════════════════════════════════════════════
     2. NAVIGATION
     ════════════════════════════════════════════════════ */

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });
  header.classList.toggle("scrolled", window.scrollY > 30);

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navList.classList.toggle("open");
  });

  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navList.classList.remove("open");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = navList.querySelectorAll("a");

  function highlightNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(a => {
          a.classList.remove("active");
          if (a.getAttribute("href") === `#${id}`) a.classList.add("active");
        });
      }
    });
  }
  window.addEventListener("scroll", highlightNav);
  highlightNav();

  /* ════════════════════════════════════════════════════
     3. LIBRARY CARD RENDERER
     ════════════════════════════════════════════════════ */

  function createCardHTML(fertRaw) {
    const fert = getRecipeData(fertRaw, currentLang);

    const nutrientBadges = fert.nutrients.slice(0, 3).map(n =>
      `<span class="badge badge-nutrient">${n}</span>`
    ).join("");

    const cropBadges = fert.cropCategories.slice(0, 2).map(c =>
      `<span class="badge badge-crop">${c}</span>`
    ).join("");

    const timeBadge = (fert.fermentationDays === 0 || !fert.fermentationDays)
      ? `<span class="badge badge-time">${t("modal_no_ferment")}</span>`
      : `<span class="badge badge-time">${fert.fermentationDays} ${t("modal_days")}</span>`;

    const myModelBadge = fert.isMyModel
      ? `<span class="my-model-badge">⭐ FeriSmart</span>`
      : "";

    return `
      <article class="fert-card ${fert.isMyModel ? 'my-model-card' : ''} fade-in" data-id="${fert.id}">
        <div class="card-header">
          <div class="card-icon">${fert.icon}</div>
          <div class="card-title-wrap">
            <h3 class="card-title">${fert.name}</h3>
            ${myModelBadge}
            <p class="card-tagline">${fert.tagline}</p>
          </div>
        </div>
        <div class="card-badges">
          ${nutrientBadges}${cropBadges}${timeBadge}
        </div>
        <div class="card-meta">
          <div class="card-meta-item">
            <span class="meta-icon">💰</span> ${t("meta_cost")}: ${fert.costLevel}
          </div>
          <div class="card-meta-item">
            <span class="meta-icon">🕐</span> ${t("meta_shelf")}: ${fert.shelfLife}
          </div>
          <div class="card-meta-item">
            <span class="meta-icon">📦</span> ${fert.ingredients.length} ${t("lib_ingredients_count")}
          </div>
          <div class="card-meta-item">
            <span class="meta-icon">🔁</span> ${t("meta_freq")}: ${fert.applicationFrequency}
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary btn-sm" onclick="openModal('${fert.id}')">
            <span class="btn-icon">📖</span> ${t("lib_view_recipe")}
          </button>
          <button class="btn btn-secondary btn-sm" onclick="scrollToCalc('${fert.id}')">
            <span class="btn-icon">🧮</span> ${t("lib_calculate")}
          </button>
        </div>
      </article>`;
  }

  function renderCards() {
    const filtered = getFilteredData();
    if (filtered.length === 0) {
      cardGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <p>${t("lib_no_results")}</p>
        </div>`;
    } else {
      cardGrid.innerHTML = filtered.map(createCardHTML).join("");
    }
    resultsCount.textContent = `${filtered.length} of ${FERTILIZER_DATA.length}`;
    observeFadeIns();
  }

  function getFilteredData() {
    return FERTILIZER_DATA.filter(fertRaw => {
      const fert = getRecipeData(fertRaw, currentLang);
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const haystack = [
          fert.name,
          fert.tagline,
          ...fert.nutrients,
          ...fert.suitableCrops,
          ...fert.ingredients.map(i => i.name)
        ].join(" ").toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      if (activeFilters.crops.length > 0) {
        // Match against English categories or localized categories
        const enFert = getRecipeData(fertRaw, "en");
        const match = activeFilters.crops.some(c =>
          enFert.cropCategories.includes(c) || fert.cropCategories.includes(c)
        );
        if (!match) return false;
      }

      if (activeFilters.nutrients.length > 0) {
        const enFert = getRecipeData(fertRaw, "en");
        const match = activeFilters.nutrients.some(n =>
          enFert.nutrients.includes(n) || fert.nutrients.includes(n)
        );
        if (!match) return false;
      }

      return true;
    });
  }

  /* ════════════════════════════════════════════════════
     4. SEARCH & FILTER
     ════════════════════════════════════════════════════ */

  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value.trim();
    renderCards();
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const type  = btn.dataset.filterType;
      const value = btn.dataset.filterValue;

      btn.classList.toggle("active");

      const list = type === "crop" ? activeFilters.crops : activeFilters.nutrients;
      const idx  = list.indexOf(value);
      if (idx > -1) list.splice(idx, 1);
      else list.push(value);

      renderCards();
    });
  });

  document.getElementById("filter-reset").addEventListener("click", () => {
    activeFilters = { crops: [], nutrients: [] };
    searchQuery = "";
    searchInput.value = "";
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    renderCards();
  });

  /* ════════════════════════════════════════════════════
     5. MODAL SYSTEM
     ════════════════════════════════════════════════════ */

  window.openModal = function(id) {
    const fertRaw = FERTILIZER_DATA.find(f => f.id === id);
    if (!fertRaw) return;

    const fert = getRecipeData(fertRaw, currentLang);

    const ingredientRows = fert.ingredients.map(i =>
      `<tr><td>${i.name}</td><td><strong>${i.amount} ${i.unit}</strong></td></tr>`
    ).join("");

    const stepsList = fert.steps.map(s => `<li>${s}</li>`).join("");
    const benefitsList = fert.benefits.map(b => `<li>${b}</li>`).join("");
    const precautionsList = fert.precautions.map(p => `<li>${p}</li>`).join("");

    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-icon">${fert.icon}</div>
        <div>
          <h3 class="modal-title">${fert.name}</h3>
          <p class="modal-tagline">${fert.tagline}</p>
        </div>
      </div>

      <div class="modal-section">
        <h4>📋 ${t("modal_ingredients_for", { vol: fert.baseVolume })}</h4>
        <table class="modal-ingredient-table">
          <thead><tr><th>${t("modal_th_ingredient")}</th><th>${t("modal_th_amount")}</th></tr></thead>
          <tbody>${ingredientRows}</tbody>
        </table>
      </div>

      <div class="modal-section">
        <h4>${t("modal_steps_header")}</h4>
        <ul>${stepsList}</ul>
      </div>

      <div class="modal-section">
        <h4>${t("modal_benefits_header")}</h4>
        <ul>${benefitsList}</ul>
      </div>

      <div class="modal-section">
        <h4>${t("modal_precautions_header")}</h4>
        <ul>${precautionsList}</ul>
      </div>

      <div class="modal-section">
        <h4>${t("modal_info_header")}</h4>
        <div class="modal-info-grid">
          <div class="modal-info-item">
            <div class="info-label">${t("modal_lbl_fermentation")}</div>
            <div class="info-value">${(!fert.fermentationDays || fert.fermentationDays === 0) ? t("modal_no_ferment") : fert.fermentationDays + " " + t("modal_days")}</div>
          </div>
          <div class="modal-info-item">
            <div class="info-label">${t("modal_lbl_shelf")}</div>
            <div class="info-value">${fert.shelfLife}</div>
          </div>
          <div class="modal-info-item">
            <div class="info-label">${t("modal_lbl_dosage")}</div>
            <div class="info-value">${fert.applicationDosage}</div>
          </div>
          <div class="modal-info-item">
            <div class="info-label">${t("modal_lbl_frequency")}</div>
            <div class="info-value">${fert.applicationFrequency}</div>
          </div>
          <div class="modal-info-item">
            <div class="info-label">${t("modal_lbl_crops")}</div>
            <div class="info-value">${fert.suitableCrops.join(", ")}</div>
          </div>
          <div class="modal-info-item">
            <div class="info-label">${t("modal_lbl_cost")}</div>
            <div class="info-value">${fert.costLevel}</div>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ════════════════════════════════════════════════════
     6. BATCH CALCULATOR
     ════════════════════════════════════════════════════ */

  function populateCalculatorDropdown() {
    const selectedVal = calcSelect.value;
    calcSelect.innerHTML = `<option value="" disabled selected>${t("calc_select_default")}</option>`;
    FERTILIZER_DATA.forEach(fRaw => {
      const f = getRecipeData(fRaw, currentLang);
      const opt = document.createElement("option");
      opt.value = f.id;
      opt.textContent = `${f.icon} ${f.name}`;
      calcSelect.appendChild(opt);
    });
    if (selectedVal) calcSelect.value = selectedVal;
  }

  window.scrollToCalc = function(id) {
    calcSelect.value = id;
    updateCalculator();
    document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
  };

  function updateCalculator() {
    populateCalculatorDropdown();
    const id = calcSelect.value;
    const fertRaw = FERTILIZER_DATA.find(f => f.id === id);
    if (!fertRaw) {
      calcResultsEl.innerHTML = `<p style="padding:1rem;color:#9ca3af;text-align:center;">${t("calc_prompt")}</p>`;
      return;
    }
    const fert = getRecipeData(fertRaw, currentLang);

    const targetVolume = parseFloat(calcNumber.value) || 1;
    const scale        = targetVolume / fert.baseVolume;

    calcResultsEl.innerHTML = fert.ingredients.map(ing => {
      const scaled = ing.amount * scale;
      let display;
      if (ing.unit === "L" || ing.unit === "kg" || ing.unit === "लीटर" || ing.unit === "किग्रा" || ing.unit === "లీటర్లు" || ing.unit === "కిలోలు") {
        display = `${parseFloat(scaled.toFixed(2))} ${ing.unit}`;
      } else if (ing.unit === "g" || ing.unit === "ग्राम" || ing.unit === "గ్రాములు") {
        if (scaled >= 1000) {
          const kgUnit = currentLang === "hi" ? "किग्रा" : (currentLang === "te" ? "కిలోలు" : "kg");
          display = `${parseFloat((scaled / 1000).toFixed(2))} ${kgUnit}`;
        } else {
          display = `${parseFloat(scaled.toFixed(1))} ${ing.unit}`;
        }
      } else if (ing.unit === "mL" || ing.unit === "मिली" || ing.unit === "మి.లీ") {
        if (scaled >= 1000) {
          const lUnit = currentLang === "hi" ? "लीटर" : (currentLang === "te" ? "లీటర్లు" : "L");
          display = `${parseFloat((scaled / 1000).toFixed(2))} ${lUnit}`;
        } else {
          display = `${parseFloat(scaled.toFixed(0))} ${ing.unit}`;
        }
      } else {
        display = `${parseFloat(scaled.toFixed(1))} ${ing.unit}`;
      }

      return `
        <div class="calc-ingredient-row">
          <span class="ingredient-name">${ing.name}</span>
          <span class="ingredient-amount">${display}</span>
        </div>`;
    }).join("");
  }

  calcSelect.addEventListener("change", updateCalculator);

  calcSlider.addEventListener("input", () => {
    calcNumber.value = calcSlider.value;
    calcSliderVal.textContent = `${calcSlider.value} L`;
    updateCalculator();
  });

  calcNumber.addEventListener("input", () => {
    let v = Math.max(1, Math.min(100, parseFloat(calcNumber.value) || 1));
    calcSlider.value = v;
    calcSliderVal.textContent = `${v} L`;
    updateCalculator();
  });

  calcCopyBtn.addEventListener("click", () => {
    const id = calcSelect.value;
    const fertRaw = FERTILIZER_DATA.find(f => f.id === id);
    if (!fertRaw) return;
    const fert = getRecipeData(fertRaw, currentLang);

    const targetVolume = parseFloat(calcNumber.value) || 1;
    const scale        = targetVolume / fert.baseVolume;

    let text = `${fert.name} — Recipe for ${targetVolume} L\n${"─".repeat(40)}\n`;
    fert.ingredients.forEach(ing => {
      const scaled = ing.amount * scale;
      text += `• ${ing.name}: ${scaled.toFixed(1)} ${ing.unit}\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      showToast(t("calc_copied_toast"));
    }).catch(() => {
      showToast(t("calc_copy_err_toast"));
    });
  });

  /* ════════════════════════════════════════════════════
     7. COMPARISON TABLE
     ════════════════════════════════════════════════════ */

  function buildComparisonTable() {
    compTableBody.innerHTML = FERTILIZER_DATA.map(fertRaw => {
      const fert = getRecipeData(fertRaw, currentLang);
      const isHighlight = fert.isMyModel ? 'class="highlight-row"' : '';
      const fermDays = (!fert.fermentationDays || fert.fermentationDays === 0)
        ? t("modal_no_ferment")
        : `${fert.fermentationDays} ${t("modal_days")}`;

      return `
        <tr ${isHighlight}>
          <td><span class="table-icon">${fert.icon}</span> ${fert.name}</td>
          <td>${fert.nutrients.join(", ")}</td>
          <td>${fermDays}</td>
          <td>${fert.costLevel}</td>
          <td>${fert.shelfLife}</td>
          <td>${fert.cropCategories.join(", ")}</td>
          <td>${fert.applicationFrequency}</td>
        </tr>`;
    }).join("");
  }



  /* ════════════════════════════════════════════════════
     9. SCROLL ANIMATIONS & INITIALISATION
     ════════════════════════════════════════════════════ */

  function observeFadeIns() {
    const elements = document.querySelectorAll(".fade-in:not(.visible)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    elements.forEach(el => observer.observe(el));
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    setTimeout(() => toastEl.classList.remove("show"), 3500);
  }

  // Initial language application & render
  applyLanguage();
});
