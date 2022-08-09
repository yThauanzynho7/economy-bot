const { MessageEmbed } = require('discord.js')
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP MINER | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP MINER | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

    let topMiners = all().filter(data => data.ID.startsWith(`minerar_Total_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    
    topMiners.length = 10;
    
    finalLb = "";
            for (var i in topMiners) {
                finalLb += `**${topMiners.indexOf(topMiners[i])+1}. <@${topMiners[i].ID.split('_')[3]}> - __${topMiners[i].data}__ Minérios**\n`;
            }
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} - TOP MINER's`)
                .setColor("RANDOM")
                .setDescription(finalLb)
            message.reply({
                embeds: [embed]
        });
    }
    }
}