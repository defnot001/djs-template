import { Events } from 'discord.js';
import { Event } from 'djs-handlers';
export default new Event(Events.ClientReady, (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
});
