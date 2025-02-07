const discord = require("discord.js")


module.exports = {
    data: new discord.SlashCommandBuilder()
        .setName("test")
        .setDescription("Test"),
    
    
    async execute(interaction) {
        if (!(interaction instanceof Discord.CommandInteraction)) return;

        interaction.reply(`Ping: ${interaction.client.ws.ping}ms`)

        //ColorOutput(`The user ${interaction.user.tag} - ${interaction.user.id} in Guild ${interaction.guild.name} - ${interaction.guild.id} used the ping command`).cyan()
    }
}