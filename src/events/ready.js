// a list of events can be found here
// https://abal.moe/Eris/docs/0.16.1/Client
// the name is case sensetive - make sure it is spelt correct
exports.event = {
    name: "ready",
};

// run function - to run the event
// eslint-disable-next-line no-unused-vars
exports.run = async (client) => {
    if (process.env.GUILDCOMMANDS) {
        // bulkEditGuildCommands is used to mass edit/create guild commands
        await client
            .bulkEditGuildCommands(process.env.GUILDID, client.slashCommands)
            .catch((e) => {
                throw new Error(e);
            });
    } else {
        // bulkEditCommands is used to mass edit/create global commands
        await client.bulkEditCommands(client.slashCommands).catch((e) => {
            throw new Error(e);
        });
    }

    console.log("Ready!");
};
