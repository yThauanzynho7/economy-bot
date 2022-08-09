const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Depositar | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})

    } else if(!args[0]) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Depositar | ${message.author.tag}`)
                .setDescription('> **Defina um valor para depositar!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}depositar [valor]**`},
                    {name: '**Ou:**', value: `**${prefix}depositar all**`}
                )
                .setColor(`RED`)
        ]});

    } else if(args[0] == 'all' && get(`reais_${message.guild.id}_${message.author.id}`) === 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Depositar | ${message.author.tag}`)
                .setDescription('> **Você não tem dinheiro para depositar em sua conta do banco!**')
                .setColor(`RED`)
        ]});

    } else if(args[0] == 'all'){

        add(`banco_${message.guild.id}_${message.author.id}`, `${get(`reais_${message.guild.id}_${message.author.id}`)}`)
        set(`reais_${message.guild.id}_${message.author.id}`, 0);

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Depositar | ${message.author.tag}`)
                .setDescription('> **Você depositou todo o seu dinheiro no banco!**')
                .setColor(`RANDOM`)
        ]});

    } else if(args[0] <= get(`reais_${message.guild.id}_${message.author.id}`)) {

        add(`banco_${message.guild.id}_${message.author.id}`, args[0]);
        add(`reais_${message.guild.id}_${message.author.id}`, -args[0])

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Depositar | ${message.author.tag}`)
                .setDescription('> **Você depositou R$:'+args[0]+' em sua conta do banco!**')
                .setColor(`RANDOM`)
        ]});

            if(get(`reais_${message.guild.id}_${message.author.id}`) < args[0] || String(args[0]).includes('-')) {

                message.reply({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Depositar | ${message.author.tag}`)
                        .setDescription('> **O valor informado é superior ou está negativado em comparação com o saldo da sua carteira!**')
                        .setColor(`RED`)
                ]});

            } else {
                add(`reais_${message.guild.id}_${message.author.id}`, -args[1])
                add(`banco_${message.guild.id}_${message.author.id}`, args[1]);
        
                message.reply({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Depositar | ${message.author.tag}`)
                        .setDescription('> **Você depositou R$:'+args[1]+' em sua conta do banco!**')
                        .setColor(`RANDOM`)
                ]});
            }
        } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Depositar | ${message.author.tag}`)
                .setDescription('> **O valor informado é superior ou está negativado em comparação com o saldo da carteira!**')
                .setColor(`RED`)
        ]});

    }
    }
}