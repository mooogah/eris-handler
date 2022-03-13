const { Client, Collection } = require("eris");
const { readdirSync } = require("fs");

module.exports = class extends Client {
    constructor() {
        // These are our "ClientOptions"
        super(`Bot ${process.env.TOKEN}`, {
            allowedMentions: {
                everyone: false,
                roles: false,
                users: false,
                repliedUser: false,
            },
            intents: ["guilds"],
        });

        // Making a collection to store commands
        // A collection extends a map
        this.commands = new Collection();
        // Making an array to store slash command options
        this.slashCommands = [];
    }

    async _createCommands() {
        // Gets all commands in the commands folder
        const commandFiles = readdirSync("./src/commands/").filter((f) =>
            f.endsWith(".js")
        );
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);

            // If the command does not have a name and description provided it throws an error.
            if (!command.command.name) {
                throw new Error(`${file} needs to have a command.name!`);
            }
            if (!command.command.description) {
                throw new Error(`${file} needs to have a command.description!`);
            }

            // Set the command to the Collection
            this.commands.set(command.command.name, command);
            // Sets the slash command options to the array
            this.slashCommands.push(command.command);
        }
    }

    async _createEvents() {
        // get all event files
        const eventFiles = readdirSync("./src/events/").filter((f) =>
            f.endsWith(".js")
        );

        for (const file of eventFiles) {
            const event = require(`./events/${file}`);

            // if there is no event name throw an error
            if (!event.event.name) {
                throw new Error(`${file} needs to have a command.name!`);
            }

            // emit the event
            this.on(event.event.name, (...args) => event.run(this, ...args));
        }
    }

    async _init() {
        await this._createCommands();
        await this._createEvents();

        await this.connect();
    }
};
