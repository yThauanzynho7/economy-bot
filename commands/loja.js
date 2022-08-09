const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Loja | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Loja | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Loja | ${message.author.tag}`)
                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                .addFields(
                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                )
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('🧑')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('🔫')
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
                            .setTitle(`> Loja - Anões | ${message.author.tag}`)
                            .setDescription('> **🥋🚩 - `Traficante`**\n> **🌿 - `Maconheiro`**\n> **💼 - `Estelionatário`**\n> **◀️ - `Voltar`**')
                            .addFields(
                                {name: '**Anão Traficante:**', value: `**R$:3.000,00**`, inline:true},
                                {name: '**Anão Maconheiro:**', value: `**R$:2.500,00**`, inline:true},
                                {name: '**Anão Estelionatário:**', value: `**R$:1.500,00**`, inline:true}
                            )
                            .setColor(`RANDOM`)
                    ], components: [
                        new MessageActionRow()
                        .addComponents(
                        new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('🥋🚩')
                        .setCustomId('11')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('🌿')
                            .setCustomId('12')
                            .setEmoji(''),
                                new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('💼')
                                .setCustomId('13')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('◀️')
                                    .setCustomId('20')
                                    .setEmoji('')
                                    )
                    ]})

                } else if(interaction.customId == '2') {

                    interaction.deferUpdate();
                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Loja - Armas | ${message.author.tag}`)
                            .setDescription('> **︻╦╤─ - `Ak-47`**\n> **🔫 - `Glock`**\n> **🔪 - `Faca`**\n> **◀️ - `Voltar`**')
                            .addFields(
                                {name: '**Ak-47**', value: `**R$:8.000,00**`, inline:true},
                                {name: '**Glock**', value: `**R$:3.500,00**`, inline:true},
                                {name: '**Faca**', value: `**R$:800,00**`, inline:true}
                            )
                            .setColor(`RANDOM`)
                    ], components: [
                        new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('︻╦╤─')
                                    .setCustomId('21')
                                    .setEmoji(''),
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🔫')
                                        .setCustomId('22')
                                        .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('PRIMARY')
                                                .setLabel('🔪')
                                                .setCustomId('23')
                                                .setEmoji(''),
                                                    new MessageButton()
                                                        .setStyle('PRIMARY')
                                                        .setLabel('◀️')
                                                        .setCustomId('20')
                                                        .setEmoji('')
                            )
                    ]})
                } else if(interaction.customId == '20') {

                    interaction.deferUpdate();
                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Loja | ${message.author.tag}`)
                            .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                            .addFields(
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                            )
                            .setColor(`RANDOM`)
                    ], components: [
                        new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🧑')
                                    .setCustomId('1')
                                    .setEmoji(''),
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🔫')
                                        .setCustomId('2')
                                        .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('DANGER')
                                                .setLabel('🛑')
                                                .setCustomId('3')
                                                .setEmoji('')
                            )
                    ]});

                } else if(interaction.customId == '3') {

                    interaction.deferUpdate();
                    msg.delete();
                    msg.channel.send({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Loja | ${message.author.tag}`)
                            .setDescription('**Loja fechada!**')
                            .setColor(`RED`)
                    ]});

                } else if(interaction.customId == '11') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 2999) {
                       
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Traficante:**', value: `**Você não possui dinheiro suficiente para comprar esse anão.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -3000);
                        add(`Anoes_Traficante_${message.guild.id}_${message.author.id}`, 1);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Traficante:**', value: `**Anão comprado com sucesso.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                }
                } else if(interaction.customId == '12') {

                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 2499) {
                       
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Maconheiro:**', value: `**Você não possui dinheiro suficiente para comprar esse anão.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -2500);
                        add(`Anoes_Maconheiro_${message.guild.id}_${message.author.id}`, 1);

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Loja | ${message.author.tag}`)
                            .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                            .addFields(
                                {name: '**Maconheiro:**', value: `**Anão comprado com sucesso.**`, inline:false},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                            )
                            .setColor(`GREEN`)
                    ], components: [
                        new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🧑')
                                    .setCustomId('1')
                                    .setEmoji(''),
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🔫')
                                        .setCustomId('2')
                                        .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('DANGER')
                                                .setLabel('🛑')
                                                .setCustomId('3')
                                                .setEmoji('')
                            )
                    ]});


                }

                } else if(interaction.customId == '13') {

                    interaction.deferUpdate();
                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1499) {
                       
                       
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Estelionatário:**', value: `**Você não possui dinheiro suficiente para comprar esse anão.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1500);
                        add(`Anoes_Estelionatario_${message.guild.id}_${message.author.id}`, 1);


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Estelionatário:**', value: `**Anão comprado com sucesso.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                }

                } else if(interaction.customId == '21') {

                    interaction.deferUpdate();
                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 7999) {
                       
                       
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja - Armas | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Ak-47:**', value: `**Você não possui dinheiro suficiente para comprar essa arma.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -8000);
                        add(`Armas_Ak47_${message.guild.id}_${message.author.id}`, 1);


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja - Armas | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Ak-47:**', value: `**Arma comprada com sucesso.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                }

                } else if(interaction.customId == '22') {

                    interaction.deferUpdate();
                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 3499) {
                       
                       
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja - Armas | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Glock:**', value: `**Você não possui dinheiro suficiente para comprar essa arma.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -3500);
                        add(`Armas_Glock_${message.guild.id}_${message.author.id}`, 1);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja - Armas | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Glock:**', value: `**Arma comprada com sucesso.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                }

                } else if(interaction.customId == '23') {

                    interaction.deferUpdate();
                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 799) {
                       
                       
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja - Armas | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Faca:**', value: `**Você não possui dinheiro suficiente para comprar essa arma.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -800);
                        add(`Armas_Faca_${message.guild.id}_${message.author.id}`, 1);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Loja - Armas | ${message.author.tag}`)
                                .setDescription('> **🧑 - `Anões`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                                .addFields(
                                    {name: '**Faca:**', value: `**Arma comprada com sucesso.**`, inline:false},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🧑')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('🔫')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('🛑')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                )
                        ]});

                }

                }

            }

        })

        })
}
}
}