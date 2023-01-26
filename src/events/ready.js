const { Events } = require('discord.js');
const { Event } = require('djs-handlers');

exports.default = new Event(Events.ClientReady, (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
});
