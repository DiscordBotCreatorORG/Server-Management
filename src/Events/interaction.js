const discord = require("discord.js")
const fs = require("fs")


module.exports = {

    serial_id: 2,
    type: discord.Events.InteractionCreate,

    async execute(interaction) {
        if (!(interaction instanceof discord.ChatInputCommandInteraction)) return;

        
        
        const event_files = fs.readdirSync("./src/event_functions/interaction").filter(file => file.endsWith(".js"))
        
        for (const file of event_files) {

            const event = require(`../event_functions/interaction/${file}`)

            event.execute(interaction)
        }

            
        
            
        
    }

}