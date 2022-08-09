const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Mineração | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Mineração | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Mineração | ${message.author.tag}`)
                .setDescription('> **⛏️ - `Minerar`**\n> **💰 - `Vender`**\n> **🛑 - `Finalizar`**')
                .addFields(
                    {name: '**Minérios:**', value: `**${get(`minerar_${message.guild.id}_${message.author.id}`)}**`, inline:true},
                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                )
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('⛏️')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('💰')
                            .setCustomId('2')
                            .setEmoji(''),
                                new MessageButton()
                                    .setStyle('DANGER')
                                    .setLabel('🛑')
                                    .setCustomId('3')
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
                            .setTitle(`> Mineração | ${message.author.tag}`)
                            .setDescription('> **⛏️ - `Minerar`**\n> **💰 - `Vender`**\n> **🛑 - `Finalizar`**')
                            .addFields(
                                {name: '**Minérios:**', value: `**${get(`minerar_${message.guild.id}_${message.author.id}`)+1}**`, inline:true},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                            )
                            .setColor(`RANDOM`)
                    ], components: [
                        new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('⛏️')
                                .setCustomId('1')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('💰')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                            .setStyle('DANGER')
                                            .setLabel('🛑')
                                            .setCustomId('3')
                                            .setEmoji('')
                        )
                    ]})
                    add(`minerar_Total_${message.guild.id}_${message.author.id}`, 1)
                    add(`minerar_${message.guild.id}_${message.author.id}`, 1);

                } else if(interaction.customId == '2') {

                    let mineriosS = [
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10'
                    ]
                    sortearMin = mineriosS[Math.floor(Math.random() * mineriosS.length)];

                    if(get(`minerar_${message.guild.id}_${message.author.id}`) === 0) return;


                    await add(`reais_${message.guild.id}_${message.author.id}`, get(`minerar_${message.guild.id}_${message.author.id}`)+sortearMin)
                    await set(`minerar_${message.guild.id}_${message.author.id}`, 0);

                    interaction.deferUpdate();
                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Mineração | ${message.author.tag}`)
                            .setDescription('> **⛏️ - `Minerar`**\n> **💰 - `Vender`**\n> **🛑 - `Finalizar`**')
                            .addFields(
                                {name: '**Minérios:**', value: `**${get(`minerar_${message.guild.id}_${message.author.id}`)}**`, inline:true},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                            )
                            .setColor(`RANDOM`)
                    ], components: [
                        new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('⛏️')
                                .setCustomId('1')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('💰')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                    new MessageButton()
                                        .setStyle('DANGER')
                                        .setLabel('🛑')
                                        .setCustomId('3')
                                        .setEmoji('')
                        )
                    ]})

                } else if(interaction.customId == '3') {

                    interaction.deferUpdate();

                    msg.delete();
                    msg.channel.send({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Mineração | ${message.author.tag}`)
                            .setDescription('> **Mineração finalizada!**')
                            .addField('Total em Minerações:', `**${get(`minerar_${message.guild.id}_${message.author.id}`)}**`)
                            .setColor(`RED`)
                    ]})

                }
    
            }

        })

        })
}
}
}