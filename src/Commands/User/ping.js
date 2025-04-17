const discord = require("discord.js")
let permissions = discord.PermissionFlagsBits

module.exports = {
    data: new discord.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Api latency of the Bot"),
    
    
    async execute(interaction) {
        if (!(interaction instanceof discord.CommandInteraction)) return;

        interaction.reply(`Ping: ${interaction.client.ws.ping}ms`)

        //ColorOutput(`The user ${interaction.user.tag} - ${interaction.user.id} in Guild ${interaction.guild.name} - ${interaction.guild.id} used the ping command`).cyan()
    }
}