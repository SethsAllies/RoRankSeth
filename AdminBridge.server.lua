local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")

local API_URL = "https://your-server.com"
local API_KEY = "supersecretapikey"
local ADMINS = {12345678} -- Roblox UserIds allowed to run commands

local function isAdmin(userId)
    for _,id in pairs(ADMINS) do
        if id == userId then return true end
    end
    return false
end

local function post(endpoint, data)
    local success, result = pcall(function()
        return HttpService:PostAsync(API_URL .. endpoint, HttpService:JSONEncode(data), Enum.HttpContentType.ApplicationJson, false, {["Authorization"]=API_KEY})
    end)
    if not success then
        warn("Request failed: ".. tostring(result))
    end
end

Players.PlayerAdded:Connect(function(player)
    player.Chatted:Connect(function(msg)
        if not isAdmin(player.UserId) then return end
        local args = string.split(msg, " ")
        if args[1] == "!rank" and args[2] and args[3] then
            post("/rank", {username=args[2], rank=tonumber(args[3])})
        elseif args[1] == "!shout" and args[2] then
            post("/shout", {message=table.concat(args," ",2)})
        elseif args[1] == "!ban" and args[2] then
            post("/ban", {username=args[2]})
            player:Kick("Banned by admin.")
        elseif args[1] == "!unban" and args[2] then
            post("/unban", {username=args[2]})
        end
    end)
end)
