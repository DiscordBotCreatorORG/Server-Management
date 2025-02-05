const discord = require("discord.js")
const env = require("dotenv").config()
const fs = require("fs")
const color_output = require("../modules/color_output")
const { serial_id } = require("./Events/ready")

//Create the CLient with all Permissions
let client = new discord.Client({ intents: Object.values(discord.GatewayIntentBits) })

//list all Event Files
let event_files = fs.readdirSync("./src/Events").filter(file => file.endsWith(".js"))

//In this loop we will require each file for each event
for (const file of event_files) {
    const event = require(`./Events/${file}`)

    color_output(`Event: ${event.type} loaded with ID ${event.serial_id}`).green()

    client.on(event.type, (...args) => event.execute(...args))
}

client.login(process.env.TOKEN)
.then(() => {
    color_output( 
        `\n=== Bot Login Info ===` +
        `\n\nToken Length:                   ${process.env.TOKEN.length}` +
        `\nNode Version:                   ${process.version}` +
        `\nDevice Architecture:            ${process.arch}` +
        `\nDiscord.js Version:             ${require("discord.js").version}` +
        `\nOS:                             ${process.platform}` +
        `\nUptime:                         ${Math.floor(process.uptime())} seconds` +
        `\nMemory Used:                    ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB` +
        `\nStatus: Working [${client.user.tag}] => Logged in Successfully\n`
    ).blue()
})
.catch((error) => {

    color_output(
        `\n=== Bot Login Info ===` +
        `\n\nToken Length:                   ${process.env.TOKEN.length}` +
        `\nNode Version:                   ${process.version}` +
        `\nDevice Architecture:            ${process.arch}` +
        `\nDiscord.js Version:             ${require("discord.js").version}` +
        `\nOS:                             ${process.platform}` +
        `\nUptime:                         ${Math.floor(process.uptime())} seconds` +
        `\nMemory Used:                    ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB` +
        `\nStatus: Failed [ERROR] => Login failed\n`
        ).red()
    console.error(`Error Details: ${error.message}`); // Log the error details for debugging
});