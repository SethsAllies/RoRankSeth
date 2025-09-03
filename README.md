# Seth's Allies Hybrid Roblox Bot

> A hybrid system to manage your Roblox group or game using a **web dashboard** and **Roblox OAuth login**.

---

## 🎯 Features

- 🔐 Roblox OAuth login (secure, no cookies needed)  
- 🌐 Dashboard hosted on GitHub Pages (or any static host)  
- ⚡ Node.js backend for secure token handling  
- 🛠️ Group management APIs:
  - Rank members  
  - Post group shouts  
  - Payout members  
  - Manage banlist  

---

## 🗂 Project Structure

| File            | Description                                |
|-----------------|--------------------------------------------|
| `index.html`    | Login page (frontend)                      |
| `callback.html` | OAuth redirect page                        |
| `server.js`     | Node.js backend (auth + API endpoints)     |
| `package.json`  | Node dependencies                          |
| `oauth_db.json` | Local storage for tokens/users (auto-created) |
| `README.md`     | Project documentation                      |

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)  
- npm or yarn  
- A Roblox group you want to manage  
- A Roblox OAuth App (Client ID & Secret)  
- Hosting for the backend (Render, Railway, Heroku, VPS, etc.)  

---

## 🔑 Roblox OAuth Setup

1. Go to the **Roblox Creator Dashboard**  
2. Create a new **OAuth App**  
3. Set redirect URL:

`https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/callback.html`

4. Copy your **Client ID** and **Client Secret**  
5. Make sure you enable the following OAuth scopes:

```
openid profile groups:manage
```

---

## 💻 Frontend Setup (GitHub Pages)

1. Upload `index.html` and `callback.html` to your GitHub repository  
2. Enable **GitHub Pages** in repository settings  
- Your site will look like this:  
  ```
  https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
  ```
3. Edit `index.html`:


const CLIENT_ID = "`YOUR_CLIENT_ID`";

const REDIRECT_URI = https://`YOUR_GITHUB_USERNAME`.github.io/`YOUR_REPO_NAME`/callback.html



4. Edit `callback.html` → replace the fetch() URL with your backend host




---

## 🖥 Backend Setup (Node.js)

1. Deploy `server.js` to any `Node.js hosting provider`


2. Create a `.env` file with your settings:

CLIENT_ID=`YOUR_CLIENT_ID`

CLIENT_SECRET=`YOUR_CLIENT_SECRET`

REDIRECT_URI=https://`YOUR_GITHUB_USERNAME`.github.io/`YOUR_REPO_NAME`/callback.html

GROUP_ID=`YOUR_GROUP_ID`

PORT=
```
3000
```


3. Install dependencies:

```
npm install
```


4. Start backend:

```
npm start
```




---

## ⚡ How It Works

1. User clicks Login with Roblox → redirected to Roblox OAuth page


2. Roblox redirects to `callback.html` with ?code=


3. `callback.html` sends code to backend


4. Backend exchanges code → access token


5. Dashboard calls backend APIs using token:

`/api/rank`

`/api/shout`

`/api/payout`

`/api/ban`



6. Backend responds → dashboard updates




---

## 📡 API Endpoints

### Rank a User

`POST /api/rank`
```
{
  "userId": "authUserId",
  "targetUserId": "123456",
  "roleId": 987654
}
```
### Post Group Shout

`POST /api/shout`
```
{
  "userId": "authUserId",
  "message": "Hello World!"
}
```

### Payout Robux

`POST /api/payout`
```
{
  "userId": "authUserId",
  "targetUserId": "123456",
  "amount": 50
}
```

### Ban a User

`POST /api/ban`
```
{
  "userId": "authUserId",
  "targetUserId": "123456",
  "reason": "Exploiting"
}
```

### Get Banlist

`GET /api/banlist`


---

## 🖥 Frontend Dashboard Usage

After logging in, the dashboard can manage:

Rank a user → promote/demote a group member

Post a group shout

Payout Robux to a member

Add/remove users from a banlist


> The dashboard buttons use fetch() calls with the logged-in user’s ID stored in localStorage.




---

## 🔒 Security Notes

❌ Do not put your CLIENT_SECRET in frontend code

✅ Always use HTTPS for both frontend and backend

⚠️ By default, tokens are saved in oauth_db.json (for testing only — use a proper database in production)



---

## 🚀 Future Improvements

Real-time dashboard UI

Logging & better error handling in backend

Role-based access (admins only)

Banlist integration with all group actions



---

## 📜 License

This project is licensed under the MIT License.


---

## ⚠️ Disclaimer

This project is not affiliated with Roblox.
Use responsibly — secure your credentials and tokens.

---
