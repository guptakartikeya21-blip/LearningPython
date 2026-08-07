# 🌱 FeriSmart – Smart Liquid Bio-Fertilizer Guide

FeriSmart is an open educational platform that helps farmers, students, and researchers learn how to prepare homemade **liquid bio-fertilizers** using simple organic materials.

---

## ✨ Features

- 🌐 **100% Multilingual Support**: Instant language switching between **English**, **हिंदी (Hindi)**, and **తెలుగు (Telugu)**.
- 📚 **Bio-Fertilizer Library**: 11 detailed recipes with exact ingredient ratios, step-by-step preparation guides, benefits, application dosages, and precautions.
- 📊 **Comparison Table**: Side-by-side comparative matrix of main nutrients, fermentation time, cost, shelf life, and suitable crops.
- 🧮 **Batch Calculator**: Interactive slider & volume scaler that automatically calculates exact ingredient quantities for 1 to 100 Litres.
- 📱 **Modern Eco-Friendly Responsive UI**: Glassmorphic sticky header, green eco palette, micro-animations, and mobile-friendly hamburger navigation.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic layout & structure
- **CSS3**: Custom design system, glassmorphism, responsive media queries
- **Vanilla JavaScript**: i18n language engine, search/multi-filtering, modal renderer, batch calculator
- **GitHub Actions**: Automated CI/CD pipeline deploying directly to GitHub Pages

---

## 🚀 Running Locally

No build step or dependencies required!

### Option 1: Python HTTP Server
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 2: Direct Browser
Double-click `index.html` to open directly in any web browser.

---

## 🤖 Continuous Deployment via GitHub Actions

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

### How to Enable GitHub Pages Deployment:
1. Push this repository to GitHub.
2. On GitHub, navigate to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Every push to `main` or `master` will automatically trigger the workflow, build, and publish the site to:
   `https://<your-username>.github.io/<repository-name>/`
