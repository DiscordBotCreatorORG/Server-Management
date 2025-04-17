const discord = require("discord.js")


module.exports = {
    data: new discord.SlashCommandBuilder()
        .setName("create_role")
        .setDescription("creates a new role in your server")
    
    .setDefaultMemberPermissions(discord.PermissionFlagsBits.Administrator), //this command can only be runned by an admin
    
    
    
    async execute(interaction) {
        if (!(interaction instanceof discord.CommandInteraction)) return;

        console.log(interaction.user.id)
    }
}