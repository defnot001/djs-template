import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from 'djs-handlers';
import dotenv from 'dotenv';
import { config } from './config/config';
import { projectPaths } from './util/projectPaths';

dotenv.config();
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
