const discord = require("discord.js")
const fs = require("fs")


module.exports = {

    serial_id: 2,
    type: discord.Events.InteractionCreate,

    async execute(interaction) {
        if (!(interaction instanceof discord.ChatInputCommandInteraction)) return;

        
        
        const event_files = fs.readdirSync("./src/event_functions/interaction").filter(file => file.endsWith(".js"))
        

        const event = require(`../event_functions/interaction/ChatInputCommandInteraction.js`)
            
        event.execute(interaction)
            
        
    }

}