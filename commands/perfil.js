const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Perfil | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Perfil | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(message.mentions.users.size == 0){

    message.reply({embeds: [
        new MessageEmbed()
            .setTitle(`> Perfil | ${message.author.tag}`)
            .setDescription('> **🧑 - `Anões`**\n> **⛏️ - `Minerações`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
            .addFields(
                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`},
                {name: '**Banco:**', value: `**R$:${get(`banco_${message.guild.id}_${message.author.id}`)},00**`}
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
                        .setLabel('⛏️')
                        .setCustomId('2')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('🔫')
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
                        .setTitle(`> Perfil - Anões | ${message.author.tag}`)
                        .setDescription('> **🧑 - `Anões`**\n> **⛏️ - `Minerações`**\n> **🔫 - `Armas`**\n> **◀️ - `Voltar`**')
                        .addFields(
                            {name: '**Traficante:**', value: `**${get(`Anoes_Traficante_${message.guild.id}_${message.author.id}`)} anões**`, inline:true},
                            {name: '**Maconheiro:**', value: `**${get(`Anoes_Maconheiro_${message.guild.id}_${message.author.id}`)} anões**`, inline:true},
                            {name: '**Estelionatário:**', value: `**${get(`Anoes_Estelionatario_${message.guild.id}_${message.author.id}`)} anões**`, inline:true}
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
                                .setLabel('⛏️')
                                .setCustomId('2')
                                .setEmoji(''),
                                    new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🔫')
                                    .setCustomId('3')
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
                        .setTitle(`> Perfil - Minerações | ${message.author.tag}`)
                        .setDescription('> **🧑 - `Anões`**\n> **⛏️ - `Minerações`**\n> **🔫 - `Armas`**\n> **◀️ - `Voltar`**')
                        .addFields(
                            {name: '**Minérios:**', value: `**${get(`minerar_${message.guild.id}_${message.author.id}`)}**`, inline:true},
                            {name: '**Total em Minerações:**', value: `**${get(`minerar_Total_${message.guild.id}_${message.author.id}`)}**`, inline:true}
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
                                    .setLabel('⛏️')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🔫')
                                        .setCustomId('3')
                                        .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('PRIMARY')
                                                .setLabel('◀️')
                                                .setCustomId('20')
                                                .setEmoji('')
                        )
                ]})

            } else if(interaction.customId == '3') {

                interaction.deferUpdate();
                msg.edit({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Perfil - Armas | ${message.author.tag}`)
                        .setDescription('> **🧑 - `Anões`**\n> **⛏️ - `Minerações`**\n> **🔫 - `Armas`**\n> **◀️ - `Voltar`**')
                        .addFields(
                            {name: '**Ak-47:**', value: `**${get(`Armas_Ak47_${message.guild.id}_${message.author.id}`)} armas**`, inline:true},
                            {name: '**Glock:**', value: `**${get(`Armas_Glock_${message.guild.id}_${message.author.id}`)} armas**`, inline:true},
                            {name: '**Faca:**', value: `**${get(`Armas_Faca_${message.guild.id}_${message.author.id}`)} armas**`, inline:true},
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
                                    .setLabel('⛏️')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🔫')
                                        .setCustomId('3')
                                        .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('PRIMARY')
                                                .setLabel('◀️')
                                                .setCustomId('20')
                                                .setEmoji('')
                        )
                ]})

            } else if(interaction.customId == '4') {

                interaction.deferUpdate();
                msg.delete();
                msg.channel.send({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Perfil | ${message.author.tag}`)
                        .setDescription('**Perfil fechado!**')
                        .setColor(`RANDOM`)
                ]})

            } else if(interaction.customId == '20') {

                interaction.deferUpdate();
                msg.edit({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Perfil | ${message.author.tag}`)
                        .setDescription('> **🧑 - `Anões`**\n> **⛏️ - `Minerações`**\n> **🔫 - `Armas`**\n> **🛑 - `Finalizar`**')
                        .addFields(
                            {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`},
                            {name: '**Dinheiro:**', value: `**R$:${get(`banco_${message.guild.id}_${message.author.id}`)},00**`}
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
                                    .setLabel('⛏️')
                                    .setCustomId('2')
                                    .setEmoji(''),
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('🔫')
                                        .setCustomId('3')
                                        .setEmoji(''),
                                            new MessageButton()
                                                .setStyle('DANGER')
                                                .setLabel('🛑')
                                                .setCustomId('4')
                                                .setEmoji('')
                        )
                ]})

            }

        }

    })

    })
} else if(get(`cPerfil_${message.guild.id}_${message.mentions.users.first().id}`) !== 2) {

    message.reply({embeds: [
        new MessageEmbed()
            .setTitle(`> Perfil de ${message.mentions.users.first().tag} | ${message.author.tag}`)
            .setDescription(`> **Infelizmente não consegui encontrar o perfil desse jogador, pois ele não se encontra em meu banco de dados x(!**`)
            .setColor(`RANDOM`)
    ]});

} else if(message.mentions.users.first()) {

    message.reply({embeds: [
        new MessageEmbed()
            .setTitle(`> Perfil de ${message.mentions.users.first().tag} | ${message.author.tag}`)
            .setDescription(`
> **Anões**
**Traficante: \`${get(`Anoes_Traficante_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
**Maconheiro: \`${get(`Anoes_Maconheiro_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
**Estelionatário: \`${get(`Anoes_Estelionatario_${message.guild.id}_${message.mentions.users.first().id}`)}\`**

> **Minerações**
**Minérios: \`${get(`minerar_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
**Total em Minerações: \`${get(`minerar_Total_${message.guild.id}_${message.mentions.users.first().id}`)}\`**

> **Armas**
**Ak-47: \`${get(`Armas_Ak47_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
**Glock: \`${get(`Armas_Glock_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
**Faca: \`${get(`Armas_Faca_${message.guild.id}_${message.mentions.users.first().id}`)}\`**

> **Dinheiro: \`${get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
> **Banco: \`${get(`banco_${message.guild.id}_${message.mentions.users.first().id}`)}\`**
`)
            .setColor(`RANDOM`)
    ]});

}
}
}