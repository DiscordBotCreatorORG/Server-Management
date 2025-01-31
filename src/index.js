const discord = require("discord.js")
const env = require("dotenv").config()
const fs = require("fs")

let client = new discord.Client({ intents: Object.values(discord.GatewayIntentBits) })


client.login(process.env.TOKEN)