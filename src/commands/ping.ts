import { ApplicationCommandOptionType, userMention } from 'discord.js';
import { Command } from 'djs-handlers';

export default new Command({
  name: 'ping',
  description: 'Pings a user.',
  options: [
    {
      name: 'target',
      description: 'The user to ping.',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  execute: async ({ interaction, args }) => {
    const target = args.getUser('target');

    if (!target) {
      return interaction.reply('Cannot find that user!');
    }

    return interaction.reply(`Pong! ${userMention(target.id)}`);
  },
});
