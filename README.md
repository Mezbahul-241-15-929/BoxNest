# BoxNest

BoxNest is a modern, responsive news portal built with React and Firebase. It delivers categorized news, article details, and user-authenticated features with a clean, mobile-first UI.

Live site: <a href="https://boxnest.netlify.app" target="_blank" rel="noopener noreferrer">boxnest.netlify.app</a>

---

## Project Overview

BoxNest lets users browse news by category, read detailed articles, and access protected routes after signing in. The app uses client-side routing and Firebase for authentication and data storage.

---

## Key Features

- **Authentication:** Firebase Authentication (email/password and providers), protected routes, session persistence.
- **News & Categories:** Category listing, category-specific news pages, and detailed news view components.
- **Reusable UI:** Tailwind CSS + DaisyUI components for responsive layouts and consistent design.
- **Performance:** Vite-powered dev server and build, client-side routing with React Router.

---

## Tech Stack

- Frontend: React (v19)
- Routing: React Router
- Build: Vite
- Styling: Tailwind CSS, DaisyUI
- Backend/BaaS: Firebase (Auth, Firestore)
- Utilities: react-icons, date-fns, react-fast-marquee

---

## Install & Run Locally

Clone the repo, install dependencies, and start the dev server:

```bash
git clone <your-repo-url>
cd "BoxNest"
npm install
npm run dev
```

Environment variables (set in `.env` at project root):

```
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
```

Make sure `src/firebase/firebase.config.js` reads these vars using `import.meta.env`.

---

## Project Structure (high level)

- `src/` — React source
- `src/pages/` — page-level components (`Home`, `Login`, `Register`, `CategoryNews`, `NewsDetails`)
- `src/components/` — reusable UI components (cards, layout pieces, sidebars)
- `src/firebase/` — Firebase initialization
- `public/` — static assets and mock JSON data (`categories.json`, `news.json`)

---

## Author

Md. Mezbahul Islam

---

© 2026 BoxNest. All Rights Reserved.

