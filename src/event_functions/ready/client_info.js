const discord = require("discord.js")
const color_output = require("../../../modules/color_output")

module.exports = {
    async execute(client) {

        //check if the Client is an DiscordClient, when not then return and do nothing 
        if (!(client instanceof discord.Client)) return;

        
        const client_info_fields = {
            Username: client.user.username,
            Id: client.user.id,
            Tag: client.user.tag,
            Avatar_Hash: client.user.avatar,
            Verified: client.user.verified,
            Bot: client.user.bot
        }

        //Use foreach to log the single arrays

        Object.entries(client_info_fields).forEach(([Key, Value]) => {
            color_output(`${Key}: ${Value}`).magenta()
        })
        console.log("")

    }
}