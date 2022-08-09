const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> FIANÇA | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})

    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) !== 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> FIANÇA | ${message.author.tag}`)
                .setDescription('> **Você não está preso!**')
                .setColor(`RED`)
        ]});

    } else if(get(`reais_${message.guild.id}_${message.author.id}`) < get(`fianca_${message.guild.id}_${message.author.id}`)){

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> FIANÇA | ${message.author.tag}`)
                .setDescription('> **Você não possui dinheiro suficiente para pagar a fiança! Ligue para algum amigo para lhe enviar um pix!**')
                .setColor(`RED`)
        ]});

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> FIANÇA | ${message.author.tag}`)
                .setDescription('> **Você pagou sua fiança e já está livre da prisão!**')
                .addFields(
                    {name:"**Valor da Fiança:**", value:"**R$:"+get(`fianca_${message.guild.id}_${message.author.id}`)+",00**"}
                )
                .setColor(`GREEN`)
        ]});

        add(`reais_${message.guild.id}_${message.author.id}`, -`${get(`fianca_${message.guild.id}_${message.author.id}`)}`);
        set(`fianca_${message.guild.id}_${message.author.id}`, 0);
        set(`fiancaG_${message.guild.id}_${message.author.id}`, 0);
    }

}
}