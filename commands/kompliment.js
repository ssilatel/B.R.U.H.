const axios = require("axios");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
            .setName("kompliment")
            .setDescription("Compliment a user!")
            .addUserOption(option =>
                option.setName("target")
                    .setDescription("The user to be complimented")
                    .setRequired(true)),
        async execute(interaction) {
            await axios.get("https://complimentr.com/api")
                        .then(res => interaction.reply(`${interaction.options.getUser("target")}, ${res.data.compliment}`));
        }
};