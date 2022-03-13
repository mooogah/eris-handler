# eris-handler
A Discord bot command and event handler, made with eris.

## Installation
Clone the files onto your Desktop.

Copy the `.env.example` and rename it to `.env`. There you can configure the options used in the code.

#### Description of each option

`TOKEN=`: Your Discord bot token. You can get one from https://discord.com/developers/applications

*Note: Discord recently made a new security change where you can not copy the token without regenerating it first.*

`GLOBALCOMMANDS=`: valid options, `true` or `false`. 

* `true` sets your slash commands as guild, meaning it will push to a guild of your choice. This should be enabled in development while you are testing and building your slash commands as global commands take up to 1 hour to register.

* `false` sets your slash commands as global, meaning it will slowly push all slash commands out to all the guilds your bot is in. It will take up to an hour to push all the commands out. It should be enabled during production, when you are done testing your commands and have ensured they are stable and working.

`GUILDID=`: The guild/server ID you want the guild commands to be pushed to. Here is a good guide on how to get your guild ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-

*Note: you do not need to worry about this option if GLOBALCOMMANDS is enabled.*

Finally, you can start the bot by running either of the following commands in a new terminal:

```bash
npm start
```

```bash
node -r dotenv/config src/index.js
```

## Usage
### Adding more commands
Make a new file in the `./src/commands/` folder and name it anything you want (`*.js`)

You can use this template to make your command:

```js
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
```

Make sure to read [the docs](https://abal.moe/Eris/docs/) if you have any Eris related questions.

### Adding more events
Make a new file in the `./src/events/` folder and name if anything you want (`*.js`).

You can use this template to make your event:

```js
// a list of events can be found here
// https://abal.moe/Eris/docs/0.16.1/Client
// the name is case sensetive - make sure it is spelt correct
exports.event = {
    name: "ready",
};

// run function - to run the event
// eslint-disable-next-line no-unused-vars
exports.run = async (client) => {
    console.log("Ready!");
};
```

All event names and arguments/parameters for the event can be found on [the docs[(https://abal.moe/Eris/docs/0.16.1/Client).

## Support
If you have any questions, issues, or inquiries, open an issue.

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
