const { MessageEmbed } = require('discord.js')
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = async (client, message, args) => {
if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP RICOS | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP RICOS | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

    let reais = await all().filter(data => data.ID.startsWith(`reais_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    
    reais.length = 10;
    
    finalLb = "";
            for (var i in reais) {
                finalLb += `**${reais.indexOf(reais[i])+1}. <@${String(reais[i].ID.split('_')[2])}> - R$: ${reais[i].data}**\n`;
            }
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} - TOP RICOS`)
                .setColor("RANDOM")
                .setDescription(finalLb)
            message.reply({
                embeds: [embed]
        });
    }
}
}