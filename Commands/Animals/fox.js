const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
  name: "fox",
  category: "Animals",
  description: "Sends a random fox pic",
  example: `${config.Prefix}fox`,

  run: async (client, message, args) => {
        
    const res = await fetch('https://randomfox.ca/floof/');
    const img = (await res.json()).image;
    const embed = new Discord.MessageEmbed()
    .setTitle(`🦊 Aww Foxxy 🦊`)
    .setImage(img)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);

    message.channel.send(embed);
          
  }   
}   