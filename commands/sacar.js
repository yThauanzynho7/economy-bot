const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Sacar | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})

    } else if(!args[0]) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Sacar | ${message.author.tag}`)
                .setDescription('> **Defina um valor para sacar!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}sacar [valor]**`},
                    {name: '**Ou:**', value: `**${prefix}sacar all**`}
                )
                .setColor(`RED`)
        ]});

    } else if(args[0] > get(`banco_${message.guild.id}_${message.author.id}`) || String(args[0]).includes('-')) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Sacar | ${message.author.tag}`)
                .setDescription('> **O valor informado é superior ou está negativado em comparação com o saldo do banco!**')
                .setColor(`RED`)
        ]});

    } else if(args[0] == 'all' && get(`banco_${message.guild.id}_${message.author.id}`) === 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Sacar | ${message.author.tag}`)
                .setDescription('> **Você não tem dinheiro para sacar da sua conta do banco!**')
                .setColor(`RED`)
        ]});

    } else if(args[0] == 'all'){

        add(`reais_${message.guild.id}_${message.author.id}`, `${get(`banco_${message.guild.id}_${message.author.id}`)}`)
        set(`banco_${message.guild.id}_${message.author.id}`, 0);

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Sacar | ${message.author.tag}`)
                .setDescription('> **Você sacou todo o seu dinheiro do banco!**')
                .setColor(`RANDOM`)
        ]});

    } else {

        add(`reais_${message.guild.id}_${message.author.id}`, args[0]);
        add(`banco_${message.guild.id}_${message.author.id}`, -args[0])

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Sacar | ${message.author.tag}`)
                .setDescription('> **Você sacou R$:'+args[0]+' de sua conta do banco!**')
                .setColor(`RANDOM`)
        ]});

            if(args[0] > get(`banco_${message.guild.id}_${message.author.id}`) || String(args[0]).includes('-')) {

                message.reply({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Sacar | ${message.author.tag}`)
                        .setDescription('> **O valor informado é superior ou está negativado em comparação com o saldo da sua conta do banco!**')
                        .setColor(`RED`)
                ]});

            } else {
                add(`banco_${message.guild.id}_${message.author.id}`, -args[1])
                add(`reais_${message.guild.id}_${message.author.id}`, args[1]);
        
                message.reply({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Sacar | ${message.author.tag}`)
                        .setDescription('> **Você sacou R$:'+args[1]+' de sua conta do banco!**')
                        .setColor(`RANDOM`)
                ]});
            }
        }
    }
}