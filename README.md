# Kavindya Mallawa — Portfolio (React + Vite)

A modern, animated personal portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.  
Supports **dark mode / light mode** toggle and is fully responsive.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Kavindya_Mallawa.pdf        ← Your CV (replace to update)
│
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   └── portfolioData.js    ← ✏️  EDIT THIS to update all content
│   │   └── images/
│   │       ├── profile.webp        ← Profile photo
│   │       ├── events/
│   │       │   ├── levelup-1.jpeg
│   │       │   ├── levelup-2.jpeg
│   │       │   ├── levelup-3.jpeg
│   │       │   ├── thinkfast-1.jpg
│   │       │   ├── thinkfast-2.jpg
│   │       │   └── thinkfast-3.jpg
│   │       └── ms-champs/
│   │           ├── mschamps-1.jpg
│   │           ├── mschamps-2.jpg
│   │           └── mschamps-3.jpg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Events.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx        ← Dark/light mode state
│   │
│   ├── styles/
│   │   └── index.css               ← Global styles + Tailwind
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Setup & Run

### Prerequisites
- **Node.js** v18 or newer — download from https://nodejs.org/

### Step 1 — Install dependencies

Open a terminal, navigate to the `portfolio` folder, then run:

```bash
npm install
```

This will install all packages (React, Vite, Framer Motion, Tailwind, etc.)

### Step 2 — Start development server

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

### Step 3 — Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. Upload that folder to any static host (GitHub Pages, Netlify, Vercel, etc.)

### Step 4 — Preview production build locally

```bash
npm run preview
```

---

## ✏️ How to Update Content

**All site content is in one file: `src/assets/data/portfolioData.js`**

Open that file and edit:
- `personalInfo` — name, bio, contact details, links, stats
- `skills` — skill bars (name + level 0–100) and tag lists
- `experience` — work history entries
- `projects` — project cards
- `certifications` — certificate cards
- `events` — events/programs with images

### Updating images

| What to update | File location |
|---|---|
| Profile photo | `src/assets/images/profile.webp` (replace, keep same filename) |
| Level Up event photos | `src/assets/images/events/levelup-1.jpeg` etc. |
| Think Fast event photos | `src/assets/images/events/thinkfast-1.jpg` etc. |
| MS Champs photos | `src/assets/images/ms-champs/mschamps-1.jpg` etc. |
| CV / Resume | `public/Kavindya_Mallawa.pdf` |

To add more images to an event, add more files in the folder and add the paths to the `images` array in `portfolioData.js`.

---

## 🌙 Dark / Light Mode

The toggle button is in the top-right of the navbar.  
The preference is saved to `localStorage` so it persists across visits.

---

## 🌐 Deploy to GitHub Pages

1. Install the deploy package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add `homepage` to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
   ```

4. Update `vite.config.js` base:
   ```js
   base: '/REPO_NAME/'
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `vite` | Fast build tool |
| `tailwindcss` | Utility-first CSS |
| `framer-motion` | Animations & transitions |
| `lucide-react` | Clean icon set |
| `react-intersection-observer` | Scroll-triggered animations |

---

## 🎨 Customizing Colors

Edit `tailwind.config.js` to change the primary color palette.  
Currently using **Indigo/Purple + Emerald** accents.

Change `primary` colors to use a different theme:
```js
// Blue theme example:
primary: {
  500: '#3b82f6',
  600: '#2563eb',
  ...
}
```
