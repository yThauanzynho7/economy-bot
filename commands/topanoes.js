const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        msg.edit({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP ANÕES | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        msg.edit({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP ANÕES | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

    let topTraficante = all().filter(data => data.ID.startsWith(`Anoes_Traficante_${message.guild.id}`)).sort((a, b) => b.data - a.data);
    let topMaconheiro = all().filter(data => data.ID.startsWith(`Anoes_Maconheiro_${message.guild.id}`)).sort((a, b) => b.data - a.data);
    let topEstelionatario = all().filter(data => data.ID.startsWith(`Anoes_Estelionatario_${message.guild.id}`)).sort((a, b) => b.data - a.data);
    
    topTraficante.length = 10;
    topMaconheiro.length = 10;
    topEstelionatario.length = 10;

    traficante = "";
    maconheiro = "";
    estelionatario = "";

    for (var i in topTraficante) {
        traficante += `**${topTraficante.indexOf(topTraficante[i])+1}. <@${String(topTraficante[i].ID.split('_')[3])}> - __${topTraficante[i].data}__ Anões**\n`;
    }
    for (var i in topMaconheiro) {
        maconheiro += `**${topMaconheiro.indexOf(topMaconheiro[i])+1}. <@${String(topMaconheiro[i].ID.split('_')[3])}> - __${topMaconheiro[i].data}__ Anões**\n`;
    }
    for (var i in topEstelionatario) {
        estelionatario += `**${topEstelionatario.indexOf(topEstelionatario[i])+1}. <@${String(topEstelionatario[i].ID.split('_')[3])}> - __${topEstelionatario[i].data}__ Anões**\n`;
    }


    message.reply({embeds: [
        new MessageEmbed()
            .setTitle(`> TOP ANÕES | ${message.author.tag}`)
            .setDescription("> **🚩 - Traficante**\n> **🔥 - Maconheiro**\n> **🧳 - Estelionatário**\n> **🛑 - Finalizar**")
            .setColor(`RED`)
    ], components: [
        new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setStyle('PRIMARY')
                .setLabel('🚩')
                .setCustomId('1')
                .setEmoji(''),
                    new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('🔥')
                    .setCustomId('2')
                    .setEmoji(''),
                        new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('🧳')
                            .setCustomId('3')
                            .setEmoji(''),
                            new MessageButton()
                                .setStyle('DANGER')
                                .setLabel('🛑')
                                .setCustomId('4')
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
                            interaction.deferUpdate();
                            msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> TOP ANÕES - Traficante | ${message.author.tag}`)
                            .setDescription("> **🚩 - Traficante**\n> **🔥 - Maconheiro**\n> **🧳 - Estelionatário**\n> **🛑 - Finalizar**\n\n"+traficante)
                            .setColor(`RED`)
                    ], components: [
                        new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('🚩')
                                .setCustomId('1')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🔥')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🧳')
                                            .setCustomId('3')
                                            .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('DANGER')
                                                .setLabel('🛑')
                                                .setCustomId('4')
                                                .setEmoji('')
                            )
                    ]})
                } else if(interaction.customId == '2') {
                            interaction.deferUpdate();
                            msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> TOP ANÕES - Maconheiro | ${message.author.tag}`)
                            .setDescription("> **🚩 - Traficante**\n> **🔥 - Maconheiro**\n> **🧳 - Estelionatário**\n> **🛑 - Finalizar**\n\n"+maconheiro)
                            .setColor(`RED`)
                    ], components: [
                        new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('🚩')
                                .setCustomId('1')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🔥')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🧳')
                                            .setCustomId('3')
                                            .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('DANGER')
                                                .setLabel('🛑')
                                                .setCustomId('4')
                                                .setEmoji('')
                            )
                    ]})
                } else if(interaction.customId == '3') {
                    interaction.deferUpdate();
                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> TOP ANÕES - Estelionatário | ${message.author.tag}`)
                            .setDescription("> **🚩 - Traficante**\n> **🔥 - Maconheiro**\n> **🧳 - Estelionatário**\n> **🛑 - Finalizar**\n\n"+estelionatario)
                            .setColor(`RED`)
                    ], components: [
                        new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('🚩')
                                .setCustomId('1')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🔥')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🧳')
                                            .setCustomId('3')
                                            .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('DANGER')
                                                .setLabel('🛑')
                                                .setCustomId('4')
                                                .setEmoji('')
                            )
                    ]})
                } else if(interaction.customId == '4') {

                    interaction.deferUpdate();
                    msg.delete();
                    msg.channel.send({embeds: [
                        new MessageEmbed()
                            .setTitle(`> TOP ANÕES | ${message.author.tag}`)
                            .setDescription('**Top fechado!**')
                            .setColor(`RANDOM`)
                    ]})
    
                }

                } 

            })
        })
    }
}
}