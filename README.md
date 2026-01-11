# React + Vite


# AI Quiz — Frontend

A responsive React frontend for an AI-powered quiz platform. Built with Vite and modern React (JSX), this repository implements the UI for creating, taking, and managing quizzes, leaderboards, user authentication, and coding practice pages.

## Features
- Create, edit, and manage quiz questions (admin pages)
- Take topic- category- and problem-based quizzes
- Leaderboard and user profiles
- Authentication (signup / login) with protected routes
- Coding practice and mentor chat stubs

## Tech Stack
- React (JSX)
- Vite
- Vanilla CSS (project styles in `src`)
- Optional: any backend API to power `src/api/quizApi.js`

## Setup (local)
1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Project Structure (high level)
- [src/main.jsx](src/main.jsx) — app entry
- [src/App.jsx](src/App.jsx) — top-level app
- [src/api/quizApi.js](src/api/quizApi.js) — API helper
- [src/components](src/components) — UI components and routes
- [src/pages](src/pages) — page-level components (Quiz, Home, Login, etc.)
- [src/context/UserContext.jsx](src/context/UserContext.jsx) — user state
- [src/Data/quizQuestions.js](src/Data/quizQuestions.js) — sample questions

See the code for more details and specific components.

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview the production build

## Notes
- The frontend expects a backend API for persistent quizzes, auth, and leaderboard functionality. Customize `src/api/quizApi.js` to point to your backend endpoints.
- Admin pages (`AdminDashboard.jsx`, `CreateQuestion.jsx`, `EditQuestion.jsx`) assume protected admin routes.

## Contributing
Feel free to open issues or PRs. For changes to UI or routing, keep components modular and update the relevant page in `src/pages`.

## Live Link 
"https://todo-list-react-fr2o.vercel.app"



