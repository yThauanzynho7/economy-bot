const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> EXTRATO | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})

    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> EXTRATO | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {
    extrato = get(`extrato_${message.guild.id}_${message.author.id}`);
    if(extrato === null) extrato = 'Não consegui encontrar transferências disponíveis!'

    if(get(`${message.author.id}_fiancaG`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> EXTRATO | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> EXTRATO - PIX | ${message.author.tag}`)
                .setDescription('> **'+String(extrato).replaceAll(",","**\n> **")+'**')
                .setColor(`RANDOM`)
        ]});

    }

}
}

}