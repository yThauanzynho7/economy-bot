const { MessageEmbed } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {

if(!args[0]) return;

if(message.author.id == '732954224090021920') {

    set(`chat_${message.guild.id}`, `${args[0]}`);

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Chat Definido | ${message.author.tag} [OWNER - COMMAND]`)
                .setDescription('> **Chat <#'+args[0]+'> definido para comando com sucesso!**')
                .setColor(`RED`)
        ]});

}

}