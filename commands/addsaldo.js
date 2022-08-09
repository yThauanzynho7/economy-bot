const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(message.mentions.users.size == 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Adição de Saldo | ${message.author.tag} [OWNER - COMMAND]`)
                .setDescription('> **Mencione um usuário válido!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}addsaldo @fulano**`}
                )
                .setColor(`RED`)
        ]});

    } else
    if(message.author.id == '732954224090021920') {

            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Adição de Saldo | ${message.author.tag} [OWNER - COMMAND]`)
                    .setDescription('> **Escolha uma das opções abaixo!**')
                    .addFields(
                        {name: '**10k**', value: `**💸**`},
                        {name: '**100k**', value: `**💰**`},
                        {name: '**1kk**', value: `**💳**`},
                    )
                    .setColor(`RED`)
            ], components: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('💸')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('💰')
                            .setCustomId('2')
                            .setEmoji(''),
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('💳')
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

                            add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, 10000);

                            msg.delete();
                            message.reply({embeds: [
                                new MessageEmbed()
                                    .setTitle(`> Adição de Saldo | ${message.author.tag} [OWNER - COMMAND]`)
                                    .setDescription('> **Saldo Adicionado com sucesso!**')
                                    .addFields(
                                        {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                        {name: '**Valor:**', value: `**R$:10.000,00**`}
                                    )
                                    .setColor(`GREEN`)
                            ]})

                        } else if(interaction.customId == '2') {
                            interaction.deferUpdate();

                            add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, 100000);

                            msg.delete();
                            message.reply({embeds: [
                                new MessageEmbed()
                                    .setTitle(`> Adição de Saldo | ${message.author.tag} [OWNER - COMMAND]`)
                                    .setDescription('> **Saldo Adicionado com sucesso!**')
                                    .addFields(
                                        {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                        {name: '**Valor:**', value: `**R$:100.000,00**`}
                                    )
                                    .setColor(`GREEN`)
                            ]})

                        } else if(interaction.customId == '3') {
                            interaction.deferUpdate();

                            add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, 1000000);

                            msg.delete();
                            message.reply({embeds: [
                                new MessageEmbed()
                                    .setTitle(`> Adição de Saldo | ${message.author.tag} [OWNER - COMMAND]`)
                                    .setDescription('> **Saldo Adicionado com sucesso!**')
                                    .addFields(
                                        {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                        {name: '**Valor:**', value: `**R$:1.000.000,00**`}
                                    )
                                    .setColor(`GREEN`)
                            ]})

                        }

    }
    })
    })

}
    }
}