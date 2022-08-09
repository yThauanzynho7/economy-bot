const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> XCAM | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> XCAM | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`xcam_${message.guild.id}_${message.author.id}`) === 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> XCAM | ${message.author.tag}`)
                .setDescription('> **Aguarde para fazer xcam com seu(a) companheiro(a) novamente.**')
                .setColor(`RED`)
        ]});

    } else if(get(`marry_${message.guild.id}_${message.author.id}`) === null) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> XCAM | ${message.author.tag}`)
                .setDescription('> **Você não está casado com ninguém e está impedido de fazer xcam!**')
                .setColor(`RANDOM`)
        ]});

    } else {

        setTimeout(() => {
            set(`xcam_${message.guild.id}_${message.author.id}`, 1);
        }, 300000);

        set(`xcam_${message.guild.id}_${message.author.id}`, 0);
        add(`reais_${message.guild.id}_${message.author.id}`, 2500);

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> XCAM | ${message.author.tag}`)
                .setDescription('> **<@'+message.author.id+'> fez xcam com <@'+get(`marry_${message.guild.id}_${message.author.id}`)+'> e ganhou R$:2.500,00**')
                .setColor(`RANDOM`)
        ]});

    }
    }
}