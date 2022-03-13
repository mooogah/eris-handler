// available options
// https://abal.moe/Eris/docs/0.16.1/CommandClient#method-createCommand
exports.command = {
    name: "ping".substring(0, 32), // the command name, max 32 characters
    description: "Pong!".substring(0, 100), // the command description, max 100 characters
    // options: [], // options you can provide (Array<Object>): https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
    type: 1, // 1 for slash command, 2 for user, and 3 for message
    defaultPermission: true, // whether the command is enabled by default when the app is added to a guild
};

// run function - to run bot
// eslint-disable-next-line no-unused-vars
exports.run = async (client, interaction) => {
    return interaction.createFollowup({ content: "Pong!" });
};
