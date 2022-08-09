const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Marry | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Marry | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`marry_${message.guild.id}_${message.author.id}`)) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Marry | ${message.author.tag}`)
                .setDescription('> **Você já está casado!**')
                .addFields(
                    {name: '**Casado(a) com:**', value: `**<@${get(`marry_${message.guild.id}_${message.author.id}`)}>**`},
                    {name: '**Divorciar**', value: `**💔**`},
                    {name: '**Finalizar**', value: `**🛑**`},
                )
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('💔')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('🛑')
                            .setCustomId('2')
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

                    set(`marry_${message.guild.id}_${get(`marry_${message.guild.id}_${message.author.id}`)}`, null);
                    set(`marry_${message.guild.id}_${message.author.id}`, null);

                    msg.delete();
                    message.reply({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Marry | ${message.author.tag}`)
                            .setDescription('> **Fico triste em saber que seu casamento acabou 💔!**')
                            .setColor(`GREEN`)
                    ]});

                } else if(interaction.customId == '2') {
                    interaction.deferUpdate();

                    msg.delete();
                    message.reply({embeds: [
                        new MessageEmbed()
                            .setTitle(`> Marry | ${message.author.tag}`)
                            .setDescription('> **Painel de casamento finalizado!**')
                            .setColor(`RED`)
                    ]});

                }

            }
        })
    })
    } else if(!args[0] || message.mentions.users.size == 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Marry | ${message.author.tag}`)
                .setDescription('> **Você precisa mencionar algum membro que deseja pedir em casamento**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}marry @fulano**`, inline:true}
                )
                .setColor(`RED`)
        ]});
        
    } else if(message.mentions.users.first().id == message.author.bot) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Marry | ${message.author.tag}`)
                .setDescription('> **Você não pode pedir para casar com robôs do servidor!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}marry @fulano**`, inline:true}
                )
                .setColor(`RED`)
        ]});

    } else {

        if(get(`cPerfil_${message.guild.id}_${message.mentions.users.first().id}`) !== 2) {

            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Marry | ${message.author.tag}`)
                    .setDescription('> **O usuário mencionado não está cadastrado em meu banco de dados!**')
                    .addFields(
                        {name: '**Utilize:**', value: `**${prefix}marry @fulano**`}
                    )
                    .setColor(`RED`)
            ]});

        } else if(get(`marry_${message.guild.id}_${message.mentions.users.first().id}`)) {

            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Marry | ${message.author.tag}`)
                    .setDescription('> **<@'+message.mentions.users.first().id+'> já é casado(a) com <@'+get(`marry_${message.guild.id}_${message.mentions.users.first().id}`)+'>**')
                    .setColor(`RANDOM`)
            ]})

        } else {

            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Marry | ${message.author.tag}`)
                    .setDescription('> **Pedido de casamento feito! Aguarde o(a) mesmo(a) aceitar seu pedido.**')
                    .addFields(
                        {name: '**Aceitar pedido**', value: `**💍**`},
                        {name: '**Recusar pedido**', value: `**💔**`},
                    )
                    .setColor(`RANDOM`)
            ], components: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('💍')
                            .setCustomId('1')
                            .setEmoji(''),
                                new MessageButton()
                                .setStyle('PRIMARY')
                                .setLabel('💔')
                                .setCustomId('2')
                                .setEmoji('')
                    )
            ]})
            .then(msg => {
                f = i => i.isButton()
                c = msg.createMessageComponentCollector({ f: f })
        
                c.on('collect', async (interaction) => {
    
                    {
                    if(interaction.user.id !== message.mentions.users.first().id) return;
        
                    if(interaction.customId == '1') {
                        interaction.deferUpdate();

                        set(`marry_${message.guild.id}_${message.author.id}`, message.mentions.users.first().id);
                        set(`marry_${message.guild.id}_${message.mentions.users.first().id}`, message.author.id);

                        msg.delete();
                        message.reply({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Marry | ${message.author.tag}`)
                                .setDescription('> **Pedido de casamento aceito 💍!**')
                                .addFields(
                                    {name: '**Casal:**', value: `**${message.author.username.substr(0, 5)}${message.mentions.users.first().username.substr(-0, 5)}**`,}
                                )
                                .setColor(`GREEN`)
                        ]});

                    } else if(interaction.customId == '2') {
                        interaction.deferUpdate();

                        msg.delete();
                        message.reply({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Marry | ${message.author.tag}`)
                                .setDescription('> **Pedido de casamento recusado 💔!**')
                                .addFields(
                                    {name: '**Casal:**', value: `**${message.author.username.substr(0, 5)}${message.mentions.users.first().username.substr(-0, 5)}**`,}
                                )
                                .setColor(`RED`)
                        ]});

                    }

                }
            })
            })

        }

    }
    }
}