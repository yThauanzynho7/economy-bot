const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) === 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Criar Perfil | ${message.author.tag}`)
                .setDescription('> **Você já possui um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}perfil**`}
                )
                .setColor(`RANDOM`)
        ]})
    } else {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Criar Perfil | ${message.author.tag}`)
                .setDescription('> **👤 - `Criar Perfil`**')
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('👤')
                        .setCustomId('1')
                        .setEmoji('')
                )
        ]})
        .then(msg => {
            f = i => i.isButton()
            c = msg.createMessageComponentCollector({ f: f })
    
            c.on('collect', async (interaction) => {

                {
                if(interaction.user.id !== message.author.id) return;
    
                if(interaction.customId == '1') {

                    set(`minerar_Total_${message.guild.id}_${message.author.id}`, 0)
                    set(`reais_${message.guild.id}_${message.author.id}`, 0)
                    set(`minerar_${message.guild.id}_${message.author.id}`, 0)
                    set(`cPerfil_${message.guild.id}_${message.author.id}`, 2);
                    set(`Anoes_Traficante_${message.guild.id}_${message.author.id}`, 0);
                    set(`Anoes_Maconheiro_${message.guild.id}_${message.author.id}`, 0);
                    set(`Anoes_Estelionatario_${message.guild.id}_${message.author.id}`, 0);
                    set(`Armas_Ak47_${message.guild.id}_${message.author.id}`, 0);
                    set(`Armas_Glock_${message.guild.id}_${message.author.id}`, 0);
                    set(`Armas_Faca_${message.guild.id}_${message.author.id}`, 0);
                    set(`banco_${message.guild.id}_${message.author.id}`, 0);

                    interaction.deferUpdate();
                    msg.delete();
                    msg.channel.send({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Perfil Criado | ${message.author.tag}`)
                            .setDescription('> **Perfil criado! Utilize `'+prefix+'perfil` para ver seu perfil.**')
                            .setColor(`RANDOM`)
                    ]})

                }
    
            }

        })

        })
    }
}
}