# Yongwoo Son — Academic Portfolio

A minimal, modern single-page academic website. Pure HTML/CSS/JS — no build step, no dependencies. Ready for GitHub Pages.

```
portfolio/
├── index.html              # content & structure
├── css/style.css           # design tokens, layout, dark mode
├── js/main.js              # theme toggle, scroll reveal, count-up
└── assets/
    └── Yongwoo_Son_CV.docx # linked by the "Download CV" button
```

Sections: Hero · About · Research focus · Education · Funding · Honors & awards ·
Publications · Projects & experience · Contact.

## Preview locally

Just open `index.html` in a browser. (Optional, for clean relative paths:)

```bash
cd portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

## Publish on GitHub Pages

There are two common setups. **Option A** gives you the cleanest URL.

### Option A — User site: `yongwooson.github.io`

1. Create a new repo named **exactly** `yongwooson.github.io` (replace with your GitHub username).
2. Put the **contents** of this `portfolio/` folder at the repo root (so `index.html` is at the top).
3. Push:
   ```bash
   git init
   git add .
   git commit -m "Add academic portfolio"
   git branch -M main
   git remote add origin https://github.com/yongwooson/yongwooson.github.io.git
   git push -u origin main
   ```
4. Repo → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save.
5. Live in ~1 min at **https://yongwooson.github.io**

### Option B — Project site: `username.github.io/portfolio`

Same as above, but the repo can have any name (e.g. `portfolio`). The URL becomes
`https://<username>.github.io/<repo>/`.

## Customize

- **Text & publications** → edit `index.html` (each paper is one `<li class="pub">`).
- **Colors** → `css/style.css`, the `:root` / `[data-theme='dark']` blocks (change `--accent`).
- **Contact email** → currently `yongwooson1@gmail.com` in `index.html` (search "mailto").
- **CV** → replace `assets/Yongwoo_Son_CV.docx`. A PDF is friendlier for visitors —
  export the CV to PDF, drop it in `assets/`, and update the three `Download CV` links.
- **Photo** → the hero shows a "YS" monogram. To use a real photo, replace the
  `<div class="avatar">YS</div>` with `<img class="avatar" src="assets/photo.jpg" alt="Yongwoo Son">`.
- **Custom domain** (e.g. `yongwoo.com`) → add a `CNAME` file with your domain, then configure DNS. See GitHub Pages docs.

## Notes

- The hero numbers (publications, co-first author, grant) are hard-coded in the
  `metrics` block of `index.html` — update them as your record grows.
