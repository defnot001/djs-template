import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from 'djs-handlers';
import { config } from './config/config.js';
import { projectPaths } from './util/projectPaths.js';

export const client = new ExtendedClient({
  intents: [GatewayIntentBits.Guilds],
});

client.start({
  botToken: config.botToken,
  guildID: config.guildID,
  commandsPath: projectPaths.commands,
  eventsPath: projectPaths.events,
  globalCommands: false,
  registerCommands: true,
});
