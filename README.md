# Seth's Allies Hybrid Roblox Bot

A hybrid system that works with:
- Roblox **OAuth login** (no cookies).
- **GitHub Pages** frontend (static login & dashboard).
- **Node.js backend** for group management (rank, shout, payouts, banlist).

---

## 📂 Project Structure
---

## ⚙️ Setup

### 1. Roblox OAuth App
- Go to [Roblox Creator Dashboard](https://create.roblox.com/dashboard).
- Register an **OAuth App**.
- Set redirect URL → `https://sethsallies.github.io/RoRankSeth/callback.html`.
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
  CLIENT_ID=3858462033669458605
  CLIENT_SECRET=your_secret_here
  REDIRECT_URI=https://sethsallies.github.io/RoRankSeth/callback.html
  GROUP_ID=your_group_id
  PORT=3000
