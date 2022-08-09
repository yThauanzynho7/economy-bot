const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`counterRoubar_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Assaltar | ${message.author.tag}`)
                .setDescription('> **Você roubou recentemente um jogador! Por favor, aguarde para assaltar novamente!**')
                .setColor(`RED`)
        ]});

    } else if(!get(`Armas_Ak47_${message.guild.id}_${message.author.id}`) && !get(`Armas_Glock_${message.guild.id}_${message.author.id}`) && !get(`Armas_Faca_${message.guild.id}_${message.author.id}`) ) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Assaltar | ${message.author.tag}`)
                .setDescription('> **Para assaltar, primeiro você precisa comprar uma arma!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}loja**`}
                )
                .setColor(`RED`)
        ]});

    } else if(message.mentions.users.size == 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription('> **Forneça algum usuário que deseja roubar!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}roubar @fulano**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`cPerfil_${message.guild.id}_${message.mentions.users.first().id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription('> **O usuário mencionado não está cadastrado em meu banco de dados!**')
                .setColor(`RANDOM`)
        ]})
    } else if(get(`reais_${message.guild.id}_${message.mentions.users.first().id}`) <= 999) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription("> **O usuário informado não possui dinheiro na carteira!**")
                .setColor(`RED`)
        ]});

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription('> **Escolha uma arma para roubar!**')
                .addFields(
                    {name: '**Ak-47**', value: `**︻╦╤─**`},
                    {name: '**Glock**', value: `**🔫**`},
                    {name: '**Faca**', value: `**🔪**`},
                )
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('︻╦╤─')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('🔫')
                            .setCustomId('2')
                            .setEmoji(''),
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('🔪')
                                    .setCustomId('3')
                                    .setEmoji('')
                )
        ]})
        .then(msg => {

            setTimeout(() => {
                set(`counterRoubar_${message.guild.id}_${message.author.id}`, 0);
            }, 300000);
            set(`counterRoubar_${message.guild.id}_${message.author.id}`, 1)
            f = i => i.isButton()
            c = msg.createMessageComponentCollector({ f: f })
    
            c.on('collect', async (interaction) => {

                {
                if(interaction.user.id !== message.author.id) return;
    
                if(interaction.customId == '1') {

                    interaction.deferUpdate();

                    if(get(`Armas_Ak47_${message.guild.id}_${message.author.id}`)) {
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Roubar | ${message.author.tag}`)
                                .setDescription('> **Você está roubando <@'+message.mentions.users.first().id+'> e, ele tem 5 segundos para reagir e conseguir recuperar parte do dinheiro roubado!**')
                                .addFields(
                                    {name: '**Reagir**', value: `**😨**`}
                                )
                                .setColor(`GREEN`)
                            ], components: [
                                new MessageActionRow()
                                    .addComponents(
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('😨')
                                        .setCustomId('4')
                                        .setEmoji('')
                                    )
                            ]}).then(msg => {

                                let timeoutRoubar = setTimeout(() => {

                                    add(`reais_${message.guild.id}_${message.author.id}`, get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/2);
                                    add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, -get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/2);

                                    msg.delete();
                                    message.reply({embeds: [
                                        new MessageEmbed()
                                            .setTitle(`> Roubar | ${message.author.tag}`)
                                            .setDescription(`> **<@${message.mentions.users.first().id}> não reagiu ao roubo! Dinheiro roubado: R$:${get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/1},00**`)
                                            .addFields(
                                                {name: '**Reagir**', value: `**😨**`}
                                            )
                                            .setColor(`RANDOM`)
                                        ]})
                                }, 5000 );

                                f = i => i.isButton()
                                c = msg.createMessageComponentCollector({ f: f })
                        
                                c.on('collect', async (interaction) => {
                    
                                    {
                                    if(interaction.user.id !== message.mentions.users.first().id) return;
     
                                    if(interaction.customId == '4') {

                                        clearTimeout(timeoutRoubar);
                                        msg.delete();
                                        message.reply({embeds: [
                                            new MessageEmbed()
                                                .setTitle(`> Roubar | ${message.author.tag}`)
                                                .setDescription("> **Bruuuh! <@"+message.mentions.users.first().id+"> conseguiu reagir ao roubo e acabou fugindo, não foi dessa vez!**")
                                                .setColor(`RED`)
                                            ]})
                                    }

                                }
                        })
                    })

                    } else {
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Roubar | ${message.author.tag}`)
                                .setDescription('> **Você não possui essa arma em seu inventário!**')
                                .addFields(
                                    {name: '**Utilize:**', value: `**${prefix}loja**`}
                                )
                                .setColor(`RED`)
                        ]});
                    }

                } else if(interaction.customId == '2') {

                    interaction.deferUpdate();

                    if(get(`Armas_Glock_${message.guild.id}_${message.author.id}`)) {
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Roubar | ${message.author.tag}`)
                                .setDescription('> **Você está roubando <@'+message.mentions.users.first().id+'> e, ele tem 5 segundos para reagir e conseguir recuperar parte do dinheiro roubado!**')
                                .addFields(
                                    {name: '**Reagir**', value: `**😨**`}
                                )
                                .setColor(`GREEN`)
                            ], components: [
                                new MessageActionRow()
                                    .addComponents(
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('😨')
                                        .setCustomId('4')
                                        .setEmoji('')
                                    )
                            ]}).then(msg => {

                                let timeoutRoubar = setTimeout(() => {

                                    add(`reais_${message.guild.id}_${message.author.id}`, get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/3);
                                    add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, -get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/3);

                                    msg.delete();
                                    message.reply({embeds: [
                                        new MessageEmbed()
                                            .setTitle(`> Roubar | ${message.author.tag}`)
                                            .setDescription(`> **<@${message.mentions.users.first().id}> não reagiu ao roubo! Dinheiro roubado: R$:${get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/3},00**`)
                                            .addFields(
                                                {name: '**Reagir**', value: `**😨**`}
                                            )
                                            .setColor(`RANDOM`)
                                        ]})
                                }, 5000 );

                                f = i => i.isButton()
                                c = msg.createMessageComponentCollector({ f: f })
                        
                                c.on('collect', async (interaction) => {
                    
                                    {
                                    if(interaction.user.id !== message.mentions.users.first().id) return;
     
                                    if(interaction.customId == '4') {

                                        clearTimeout(timeoutRoubar);
                                        msg.delete();
                                        message.reply({embeds: [
                                            new MessageEmbed()
                                                .setTitle(`> Roubar | ${message.author.tag}`)
                                                .setDescription("> **Bruuuh! <@"+message.mentions.users.first().id+"> conseguiu reagir ao roubo e acabou fugindo, não foi dessa vez!**")
                                                .setColor(`RED`)
                                            ]})
                                    }

                                }
                        })
                    })

                    } else {
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Roubar | ${message.author.tag}`)
                                .setDescription('> **Você não possui essa arma em seu inventário!**')
                                .addFields(
                                    {name: '**Utilize:**', value: `**${prefix}loja**`}
                                )
                                .setColor(`RED`)
                        ]});
                    }

                } else if(interaction.customId == '3') {

                    interaction.deferUpdate();

                    if(get(`Armas_Faca_${message.guild.id}_${message.author.id}`)) {
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Roubar | ${message.author.tag}`)
                                .setDescription('> **Você está roubando <@'+message.mentions.users.first().id+'> e, ele tem 5 segundos para reagir e conseguir recuperar parte do dinheiro roubado!**')
                                .addFields(
                                    {name: '**Reagir**', value: `**😨**`}
                                )
                                .setColor(`GREEN`)
                            ], components: [
                                new MessageActionRow()
                                    .addComponents(
                                        new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('😨')
                                        .setCustomId('4')
                                        .setEmoji('')
                                    )
                            ]}).then(msg => {

                                let timeoutRoubar = setTimeout(() => {

                                    add(`reais_${message.guild.id}_${message.author.id}`, get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/4);
                                    add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, -get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/4);

                                    msg.delete();
                                    message.reply({embeds: [
                                        new MessageEmbed()
                                            .setTitle(`> Roubar | ${message.author.tag}`)
                                            .setDescription(`> **<@${message.mentions.users.first().id}> não reagiu ao roubo! Dinheiro roubado: R$:${get(`reais_${message.guild.id}_${message.mentions.users.first().id}`)/4},00**`)
                                            .addFields(
                                                {name: '**Reagir**', value: `**😨**`}
                                            )
                                            .setColor(`RANDOM`)
                                        ]})
                                }, 5000 );

                                f = i => i.isButton()
                                c = msg.createMessageComponentCollector({ f: f })
                        
                                c.on('collect', async (interaction) => {
                    
                                    {
                                    if(interaction.user.id !== message.mentions.users.first().id) return;
     
                                    if(interaction.customId == '4') {

                                        clearTimeout(timeoutRoubar);
                                        msg.delete();
                                        message.reply({embeds: [
                                            new MessageEmbed()
                                                .setTitle(`> Roubar | ${message.author.tag}`)
                                                .setDescription("> **Bruuuh! <@"+message.mentions.users.first().id+"> conseguiu reagir ao roubo e acabou fugindo, não foi dessa vez!**")
                                                .setColor(`RED`)
                                            ]})
                                    }

                                }
                        })
                    })

                    } else {
                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Roubar | ${message.author.tag}`)
                                .setDescription('> **Você não possui essa arma em seu inventário!**')
                                .addFields(
                                    {name: '**Utilize:**', value: `**${prefix}loja**`}
                                )
                                .setColor(`RED`)
                        ]});
                    }

                }
    
            }

        })

        })
}
}
}