const { MessageEmbed } = require('discord.js')
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(message.author.id == '732954224090021920') {

        
        all().reduce((acc, val) => {
            if (val.ID.startsWith(`sexo_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])

          all().reduce((acc, val) => {
            if (val.ID.startsWith(`xcam_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])

          all().reduce((acc, val) => {
            if (val.ID.startsWith(`gf_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])

          all().reduce((acc, val) => {
            if (val.ID.startsWith(`counterAssaltar_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])

          all().reduce((acc, val) => {
            if (val.ID.startsWith(`counterRoubar_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])

          all().reduce((acc, val) => {
            if (val.ID.startsWith(`apostar_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])
          
          all().reduce((acc, val) => {
            if (val.ID.startsWith(`escravGet_${message.guild.id}`)) {
              acc.push(val.ID)
            }
            for(i=0; i < acc.length; i++) {
            set(acc[i], null);
            }
            return acc
          }, [])
    }
}
}