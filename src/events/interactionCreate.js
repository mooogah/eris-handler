// a list of events can be found here
// https://abal.moe/Eris/docs/0.16.1/Client
// the name is case sensetive - make sure it is spelt correct
exports.event = {
    name: "interactionCreate",
};

const { CommandInteraction } = require("eris");

// run function - to run the event
// eslint-disable-next-line no-unused-vars
exports.run = async (client, interaction) => {
    // If the interaction is not a command interaction
    if (!(interaction instanceof CommandInteraction)) return;

    // Acknowledge the interaction.
    // 64 is a flag option, which ephemerals the reply
    await interaction.defer(64);

    // Get the command name from the collection
    const command = client.commands.get(interaction.data.name);
    if (!command) {
        return interaction.createFollowup({
            content: "This command does not exist!",
        });
    }

    try {
        // Run the command
        await command.run(client, interaction);
    } catch (e) {
        // throws an error in console and shows error in message
        await interaction.createFollowup({
            content: `There was an error!\n\`\`\`yml\n${
                e.message ? String(e.message) : String(e)
            }\n\`\`\``.substring(0, 1900),
        });
        throw new Error(e);
    }
};
