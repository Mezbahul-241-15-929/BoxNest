# BookNest

BookNest is a modern, responsive book management platform where readers discover books, add collections, track reading activity, and manage personal libraries. Built with React and Firebase, BookNest focuses on a clean UX, secure authentication, and responsive design for mobile, tablet, and desktop.

Live site: boxnest.netlify.app

---

## Project Overview

BookNest helps readers organize and explore books efficiently. Users can create accounts, browse popular books, view detailed information, add books to the database, and manage personal collections. The app emphasizes accessibility, responsive UI, and fast SPA performance.

---

## Features

- **Authentication:** Email/password signup & login, Firebase Authentication, Google Sign-In, protected routes, persistent sessions.
- **Book Management:** Browse books, view book details, add new books, update existing entries, delete (authorized users), and category-based organization.
- **User Dashboard:** View and manage personal added books and track reading activities.
- **Responsive UI:** Tailwind CSS + DaisyUI components with layouts optimized for mobile, tablet, and desktop.
- **Performance:** Client-side routing, dynamic data fetching, and optimized component structure for a snappy experience.

---

## Tech Stack

- Frontend: React, React Router DOM
- Styling: Tailwind CSS, DaisyUI
- Auth/Backend: Firebase (Authentication, Firestore)
- HTTP: Fetch API / Axios
- Deployment: Netlify

---

## Install & Run Locally

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd Assignment\ 09\ \(BoxNest\)
npm install
```

Start the development server:

```bash
npm run dev
```

Notes:
- Ensure your Firebase config is set in `src/firebase/firebase.config.js` and environment variables (if any) are configured before running.
.env:
  VITE_apiKey=
  VITE_authDomain=
  VITE_projectId=
  VITE_storageBucket=
  VITE_messagingSenderId=
  VITE_appId=

---

## Project Structure (high level)

- `src/` — React source
- `src/pages/` — page-level components (Home, Login, Register, News/Book details)
- `src/components/` — reusable UI components
- `src/firebase/` — Firebase config
- `public/` — static assets and mock JSON data

---

## Author

Md. Mezbahul Islam

---

© 2026 BookNest. All Rights Reserved.

