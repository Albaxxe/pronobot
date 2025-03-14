const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Faire parler le bot.')
    .addStringOption(option => option.setName('message').setDescription('Le message à envoyer').setRequired(true)),

  async execute(interaction) {
    const message = interaction.options.getString('message');
    await interaction.reply({ content: '✅ Message envoyé !', ephemeral: true });
    await interaction.channel.send(message);
  },
};
