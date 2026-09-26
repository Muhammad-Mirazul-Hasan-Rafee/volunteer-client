# VolunteerCorner — Client

A production-grade React client for a volunteer opportunities platform, built with an emphasis on secure authentication, clean architecture, and a calm, focused user experience. ⚛️

---

## Live

- Client — https://volunteer-client-phi.vercel.app 🌐
- Server — https://volunteer-server-chi.vercel.app 🖥️

---

## Overview

VolunteerCorner connects people with volunteer opportunities. This repository contains the client application — a React + Vite single-page app that handles authentication, opportunity discovery, application workflows, and a personalized dashboard. 🧭

The client is designed around three principles:

- Security first. Authentication state is treated as a first-class concern, and every protected route is gated explicitly. 🔐
- Predictable structure. Routes, hooks, and context are separated so the codebase stays readable as it grows. 🧱
- Production realism. The same code runs locally and on Vercel, with environment-aware configuration rather than hardcoded URLs. 🚀

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 18 with Vite ⚛️ |
| Styling | Tailwind CSS 🎨 |
| Routing | React Router v6 🧭 |
| Auth | Firebase Authentication with a custom JWT session layer 🔐 |
| HTTP | Axios with request and response interceptors 📡 |
| Notifications | SweetAlert2 🔔 |
| Deployment | Vercel ▲ |

---

## Capabilities

- Email, Google, and GitHub authentication backed by Firebase. 🔑
- Protected routes that redirect unauthenticated users to login and return them to their original destination afterward. 🛡️
- Opportunity posting, browsing, and detail views. 📋
- Application submission with a personal dashboard for tracking and managing submissions. 📊
- Environment-aware API layer that works identically in development and production. 🌐
- A dark, distraction-free interface built with Tailwind. 🌙

---

## Project Structure

```
src/
├── assets/        Lottie animations and static media
├── components/    Reusable presentational and layout components
├── context/       AuthContext wrapping Firebase
├── hooks/         useAuth, useAxiosSecure
├── layout/        MainLayout composing Navbar and Footer
├── pages/         Route-level views
└── router/        React Router configuration
```

Each directory has a single responsibility. Nothing cross-imports outside its layer. 🧱

---

## Environment

Create a `.env` file at the project root with your own values:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

These are populated from your Firebase project settings. Do not commit this file. 🔒

---

## Running Locally

```bash
npm install
npm run dev
```

The app is served at `http://localhost:5173`. 🖥️

For a production-like preview:

```bash
npm run build
npm run preview
```

---

## API Layer

Every backend call is routed through a single Axios instance with `withCredentials` enabled, so the session cookie travels with each request without manual handling. 🍪

In development, `/api/*` is proxied to the local Express server:

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

In production, the same `/api/*` prefix is rewritten to the deployed backend through `vercel.json`. This keeps the client and server on the same origin from the browser's perspective, which is what makes HttpOnly cookies behave correctly across deployments. 🔀

---

## Deployment

Pushing to `main` deploys automatically to Vercel. ▲

Required `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://volunteer-server-chi.vercel.app/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The first rule forwards API traffic to the backend. The second ensures client-side routes resolve correctly on refresh. 🛠️

---

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server 🖥️ |
| `npm run build` | Production build 📦 |
| `npm run preview` | Preview the production build 👁️ |
| `npm run lint` | Static analysis 🧪 |

---

## License

ISC 📄