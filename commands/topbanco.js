const { MessageEmbed } = require('discord.js')
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = async (client, message, args) => {
if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP BANCO | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP BANCO | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

    let banco = await all().filter(data => data.ID.startsWith(`banco_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    
    banco.length = 10;
    
    finalLb = "";
            for (var i in banco) {
                finalLb += `**${banco.indexOf(banco[i])+1}. <@${String(banco[i].ID.split('_')[2])}> - R$: ${banco[i].data}**\n`;
            }
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} - TOP BANCO`)
                .setColor("RANDOM")
                .setDescription(finalLb)
            message.reply({
                embeds: [embed]
        });
    }
}
}