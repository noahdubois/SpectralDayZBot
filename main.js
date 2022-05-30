const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgwNjQ4Mjg5OTk1MjE0ODU4.GspSX_.Acvt3QeTdLb3YkHot8Zw7HaQkEO50UbkzDSoCE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.token)