const discord = require("discord.js")
const fs = require("fs")


module.exports = {

    serial_id: 3,
    type: discord.Events.MessageCreate,

    async execute(message) {
        if (!(message instanceof discord.Message)) return;
        if (message.author.bot) return;


        const event_files = fs.readdirSync("./src/event_functions/message_create").filter(file => file.endsWith(".js"))

        for (const file of event_files) {

            const event = require(`../event_functions/message_create/${file}`)
            
            event.execute(message)
            
        }
    }

}