const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "gay",
    category: "Image",
    description: "Converts a user's avatar in gay theme format !!",
    example: `${config.Prefix}gay @Dinav`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`❌ Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Gay().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "gay.png");

        message.channel.send(attach)
    }
}