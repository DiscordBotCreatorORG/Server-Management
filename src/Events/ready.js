const discord = require("discord.js")
const fs = require("fs")


module.exports = {

    serial_id: 1,
    type: discord.Events.ClientReady,

    async execute(client) {
        if (!(client instanceof discord.Client)) return;

        console.log("online")

        const event_files = fs.readdirSync("./src/event_functions/ready").filter(file => file.endsWith(".js"))

        for (const file of event_files) {

            const event = require(`../event_functions/ready/${file}`)
            
            event.execute(client)
            
        }
    }

}