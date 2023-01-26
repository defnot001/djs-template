const { GatewayIntentBits } = require('discord.js');
const { ExtendedClient } = require('djs-handlers');
const { config } = require('./config/config');
const { projectPaths } = require('./util/projectPaths');

const client = new ExtendedClient({
  intents: [GatewayIntentBits.Guilds],
});

client.start({
  botToken: config.botToken,
  guildID: config.guildID,
  commandsPath: projectPaths.commands,
  eventsPath: projectPaths.events,
  type: 'commonJS',
  globalCommands: false,
  registerCommands: true,
});

module.exports = { client };
