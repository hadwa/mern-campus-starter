# Campus Life & Perks Platform — MERN Starter

This repo is a **starter kit** for your course mini‑project. It’s split into **tasks** that scaffold the skills you need for the main two sprints (85% of grade), plus make‑up/bonus work. Use this as the base and iterate.

## Tech
- **Backend:** Node.js (Express), MongoDB, Mongoose, JWT auth
- **Frontend:** React (Vite), React Router, Tailwind CSS
- **Testing:** Jest + Supertest (backend), Vitest + Testing Library (frontend)

> Node 20.x recommended. MongoDB 6+ (local or Atlas).

---

## Project Theme
**Campus Life & Perks Platform**: students browse **events**, **clubs**, and **merchant perks/discounts**; they can register for events and claim perks. This starter ships with a **Perks** resource as your first CRUD, plus **Auth**. Extend with Events, Clubs, Registrations during sprints.

---

## Quick Start

```bash
# 1) Setup
cd server
cp .env.example .env
# edit .env (MONGO_URI, JWT_SECRET)
npm install

cd ../client
npm install

# 2) Run
# Terminal A
cd server && npm run dev
# Terminal B
cd client && npm run dev
```

- Backend runs at `http://localhost:4000`
- Frontend runs at `http://localhost:5175`
- API base path: `/api`

---

## Task Pack (10% total, 2% each)

> Submit each task as a PR with a short demo video (2–3 min) and checklist checked.

### **Task 1 — Intro to Node & Express (CRUD)**
- Create an **Event** resource (independent from Perks) with routes:
  - `GET /api/events`, `POST /api/events`, `GET /api/events/:id`, `PUT /api/events/:id`, `DELETE /api/events/:id`
- Use an in‑memory array first (no DB), then refactor to a separate router & controller files.
- Add request logging with `morgan`, and error handler middleware.

**Acceptance**
- Separate router/controller file
- Returns proper HTTP codes (201 create, 404 not found, 400 invalid)
- Lint passes (`npm run lint` if you add ESLint)

---

### **Task 2 — Intro to Mongo & Mongoose**
- Replace the in‑memory Events with a **Mongoose model** `Event` (title, date, location, description, createdBy).
- Connect to MongoDB via `MONGO_URI` and handle connection errors gracefully.
- Seed at least 3 events (a seed script or via POST requests).

**Acceptance**
- CRUD works against MongoDB
- Unique index on `title` + `date`
- Date validated as ISO string

---

### **Task 3 — Authentication (backend + frontend)**
- Backend: implement `register`, `login`, `me` using JWT (already scaffolded for **User**).
- Protect **POST/PUT/DELETE** for Perks & Events.
- Frontend: add pages for **Register**, **Login**; store token (localStorage) and show user name; add **Logout**.
- Configure axios to send `Authorization: Bearer <token>`.

**Acceptance**
- Invalid logins return 401
- Protected routes reject anonymous users
- “Logged‑in as …” visible in navbar

---

### **Task 4 — React Fundamentals + Tailwind + Hooks**
- Build **Perks** UI:
  - List, Create, Edit forms (controlled components, basic validation)
  - Client‑side filtering (e.g., by category or min discount)
  - Extract reusable components; use a custom hook for auth state (`useAuth`)
- Style with Tailwind (buttons, form inputs, layout).

**Acceptance**
- Form validation errors visible
- Loading & empty states handled
- Clean component structure (no giant files)

---

### **Task 5 — Testing**
- Backend: write Jest + Supertest tests for auth and perks (happy & error paths). Use **mongodb-memory-server**.
- Frontend: write Vitest + Testing Library tests for `Login` and `PerkForm` (renders, validation, submit).

**Acceptance**
- `npm test` passes in both `server` and `client`
- At least 5 meaningful assertions per test file

---

### **Task 6 — Make‑Up / Bonus (pick one)**
- **Option A:** Pagination, search, and sorting for Perks & Events (server & client).
- **Option B:** Role‑based auth (admin can delete; student cannot).
- **Option C:** Deploy (Railway/Render) with environment variables, add a short guide.
- **Option D:** E2E smoke test with Cypress (login + create perk + list contains it).

**Acceptance**
- Clear README section describing what was added + demo GIF

---

## Sprint Guidance (85%)
- **Sprint 1:** Events, Clubs, Registrations (student registers to event), Merchant listing, Perks detail, profile page.
- **Sprint 2:** Points/loyalty, club memberships, event check‑in flow, merchant portal, dashboards.

---

## API in Starter
- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
- `GET /api/perks`, `GET /api/perks/:id`, `POST /api/perks`, `PUT /api/perks/:id`, `DELETE /api/perks/:id`

Extend with `/api/events`, `/api/clubs`, etc.

---

## Notes
- The starter uses **JWT in localStorage** for simplicity in a student setting. In production, prefer **httpOnly cookies + CSRF**.
- Tailwind is pre‑wired in the client.
- Linting/formatting are not enforced; feel free to add ESLint & Prettier.

Good luck and have fun! 🎓
