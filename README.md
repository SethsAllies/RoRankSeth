# Seth's Allies Hybrid Roblox Bot

A hybrid system that works with:
- Roblox **OAuth login** (no cookies).
- **GitHub Pages** frontend (static login & dashboard).
- **Node.js backend** for group management (rank, shout, payouts, banlist).
---

## 📂 Project Structure

├── index.html         # Login page

├── callback.html      # Roblox OAuth redirect

├── server.js          # Backend with APIs

├── package.json       # Dependencies

├── oauth_db.json      # Local storage (created automatically)

└── README.md          # Instructions

---

## ⚙️ Setup

### 1. Roblox OAuth App
- Go to [Roblox Creator Dashboard](https://create.roblox.com/dashboard).
- Register an **OAuth App**.
- Set redirect URL → `https://username.github.io/RepositoryName/callback.html`.
- Copy `Client ID` and `Client Secret`.

### 2. Frontend (GitHub Pages)
- Fork this repo → Enable **GitHub Pages** → Deploy `index.html` + `callback.html`.
- Your site will be at:  
  `https://USERNAME.github.io/RepositoryName/`

### 3. Backend (Node.js)
- Deploy `server.js` to:
  - [Render](https://render.com/), [Railway](https://railway.app/), [Heroku](https://heroku.com/), or VPS.
- Add `.env` with:
  ```env
  CLIENT_ID=123456789._._._._._.
  CLIENT_SECRET=your_secret_here
  REDIRECT_URI=https://username.github.io/RepositoryName/callback.html
  GROUP_ID=your_group_id
  PORT=3000
