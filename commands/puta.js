const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Puta | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})

    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Puta | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Puta | ${message.author.tag}`)
                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                .addFields(
                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                )
                .setColor(`RED`)
        ]});

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Puta | ${message.author.tag}`)
                .setDescription('> **Arrisque sua sorte para transar com uma puta de luxo, você tem chance de perder ou também de ganhar dinheiro, que começem as apostas!**')
                .addFields(
                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                )
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('X')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('X')
                            .setCustomId('2')
                            .setEmoji(''),
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('X')
                                    .setCustomId('3')
                                    .setEmoji('')
                ),
                new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('X')
                        .setCustomId('4')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('X')
                            .setCustomId('5')
                            .setEmoji(''),
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('X')
                                    .setCustomId('6')
                                    .setEmoji('')
                ),
                new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('X')
                        .setCustomId('7')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('X')
                            .setCustomId('8')
                            .setEmoji(''),
                                new MessageButton()
                                    .setStyle('PRIMARY')
                                    .setLabel('X')
                                    .setCustomId('9')
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

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('SUCCESS')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('DANGER')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '2') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('SUCCESS')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('DANGER')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '3') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('SUCCESS')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '4') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('SUCCESS')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('DANGER')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '5') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('SUCCESS')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('DANGER')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '6') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('SUCCESS')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '7') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('SUCCESS')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('DANGER')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } else if(interaction.customId == '8') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('SUCCESS')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('DANGER')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                } if(interaction.customId == '9') {
                    interaction.deferUpdate();

                    if(get(`reais_${message.guild.id}_${message.author.id}`) <= 1707) {


                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **O dinheiro mínimo para começar a apostar com a puta é de R$:1.708,00!**')
                                .addFields(
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ]});

                    } else {

                    sorteio = [
                        '1',
                        '2',
                    ];

                    sorteioLength = sorteio[Math.floor(Math.random() * sorteio.length)];

                    if(sorteioLength == '1') {

                        add(`reais_${message.guild.id}_${message.author.id}`, 1528);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **Parabéns! Você comeu a puta tão gostoso, que ela perdeu a aposta e lhe pagou!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`GREEN`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('SUCCESS')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    } else {

                        add(`reais_${message.guild.id}_${message.author.id}`, -1708);

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Puta | ${message.author.tag}`)
                                .setDescription('> **A puta reclamou do seu sexo e você perdeu a aposta!**')
                                .addFields(
                                    {name: '**Dinheiro Atual:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                                )
                                .setColor(`RED`)
                        ], components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('1')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('2')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('3')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('4')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('5')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('6')
                                                    .setEmoji('')
                                ),
                                new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setStyle('PRIMARY')
                                        .setLabel('X')
                                        .setCustomId('7')
                                        .setEmoji(''),
                                            new MessageButton()
                                            .setStyle('PRIMARY')
                                            .setLabel('X')
                                            .setCustomId('8')
                                            .setEmoji(''),
                                                new MessageButton()
                                                    .setStyle('DANGER')
                                                    .setLabel('X')
                                                    .setCustomId('9')
                                                    .setEmoji('')
                                )
                        ]})

                    }
                }
                }
    }
    })
    })

}
}

}