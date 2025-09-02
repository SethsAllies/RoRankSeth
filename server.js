const express = require("express");
const noblox = require("noblox.js");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(express.json());

const COOKIE = process.env.ROBLOX_COOKIE;
const GROUP_ID = process.env.GROUP_ID;
const API_KEY = process.env.API_KEY || "changeme";

let banlist = [];

// Init Roblox session
(async () => {
  try {
    await noblox.setCookie(COOKIE);
    console.log("Logged into Roblox as", await noblox.getCurrentUser());
    if (fs.existsSync("banlist.json")) {
      banlist = JSON.parse(fs.readFileSync("banlist.json"));
    }
  } catch (err) {
    console.error("Error logging in:", err);
  }
})();

// Middleware: API key
app.use((req,res,next) => {
  if (req.headers.authorization !== API_KEY) {
    return res.status(403).send("Invalid API key");
  }
  next();
});

// Rank user
app.post("/rank", async (req,res) => {
  try {
    const {username, rank} = req.body;
    const userId = await noblox.getIdFromUsername(username);
    await noblox.setRank(GROUP_ID, userId, rank);
    res.send(`Ranked ${username} to ${rank}`);
  } catch (e) { res.status(400).send(e.message); }
});

// Shout
app.post("/shout", async (req,res) => {
  try {
    const {message} = req.body;
    await noblox.shout(GROUP_ID, message);
    res.send("Group shout sent.");
  } catch (e) { res.status(400).send(e.message); }
});

// Payout
app.post("/payout", async (req,res) => {
  try {
    const {username, amount} = req.body;
    const userId = await noblox.getIdFromUsername(username);
    await noblox.groupPayout(GROUP_ID, [{recipientId:userId, amount:amount}]);
    res.send(`Paid ${amount} to ${username}`);
  } catch (e) { res.status(400).send(e.message); }
});

// Ban user
app.post("/ban", (req,res) => {
  const {username} = req.body;
  if (!banlist.includes(username)) {
    banlist.push(username);
    fs.writeFileSync("banlist.json", JSON.stringify(banlist,null,2));
  }
  res.send(`${username} banned.`);
});

// Unban user
app.post("/unban", (req,res) => {
  const {username} = req.body;
  banlist = banlist.filter(u => u !== username);
  fs.writeFileSync("banlist.json", JSON.stringify(banlist,null,2));
  res.send(`${username} unbanned.`);
});

// Get banlist
app.get("/banlist", (req,res) => {
  res.json(banlist);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
