const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Assaltar | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Assaltar | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`counterAssaltar_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Assaltar | ${message.author.tag}`)
                .setDescription('> **Você assaltou recentemente o banco central! Por favor, aguarde para assaltar novamente!**')
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

    } else if(get(`Armas_Ak47_${message.guild.id}_${message.author.id}`) || get(`Armas_Glock_${message.guild.id}_${message.author.id}`) || get(`Armas_Faca_${message.guild.id}_${message.author.id}`)) {

        set(`counterAssaltar_${message.guild.id}_${message.author.id}`, 1);
        setTimeout(() => {
            set(`counterAssaltar_${message.guild.id}_${message.author.id}`, 0);
        }, 600000 );
            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Assaltar | ${message.author.tag}`)
                    .setDescription('> **Escolha uma arma para assaltar!**')
                    .addFields(
                        {name: '**Ak-47**', value: `**︻╦╤─**`},
                        {name: '**Glock**', value: `**🔫**`},
                        {name: '**Faca**', value: `**🔪**`},
                    )
                    .setColor(`RED`)
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
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Você acabou de assaltar um banco, porém, você tem uma chance de ser preso, escolha o botão para abrir a porta dos fundos!**')
                                        .setColor(`GREEN`)
                                    ], components: [
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
                                            )
                                    ]})
                            } else {
                                msg.edit({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
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
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Você acabou de assaltar um banco, porém, você tem uma chance de ser preso, escolha o botão para abrir a porta dos fundos!**')
                                        .setColor(`GREEN`)
                                    ], components: [
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
                                msg.edit({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
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
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Você acabou de assaltar um banco, porém, você tem uma chance de ser preso, escolha o botão para abrir a porta dos fundos!**')
                                        .setColor(`GREEN`)
                                    ], components: [
                                        new MessageActionRow()
                                            .addComponents(
                                                new MessageButton()
                                                .setStyle('PRIMARY')
                                                .setLabel('X')
                                                .setCustomId('10')
                                                .setEmoji(''),
                                                    new MessageButton()
                                                    .setStyle('PRIMARY')
                                                    .setLabel('X')
                                                    .setCustomId('11')
                                                    .setEmoji(''),
                                                        new MessageButton()
                                                            .setStyle('PRIMARY')
                                                            .setLabel('X')
                                                            .setCustomId('12')
                                                            .setEmoji('')
                                            )
                                    ]})
                            } else {
                                msg.edit({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Você não possui essa arma em seu inventário!**')
                                        .addFields(
                                            {name: '**Utilize:**', value: `**${prefix}loja**`}
                                        )
                                        .setColor(`RED`)
                                ]});
                            }

                        } else



                        if(interaction.customId == '4') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 25000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**AK-47**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:25.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 15000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Ak47_${message.guild.id}_${message.author.id}`, -1);


                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**AK-47**"},
                                            {name: "**Valor Fiança:**", value: "**R$:15.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else if(interaction.customId == '5') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 25000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**AK-47**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:25.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 15000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Ak47_${message.guild.id}_${message.author.id}`, -1);


                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**AK-47**"},
                                            {name: "**Valor Fiança:**", value: "**R$:15.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else if(interaction.customId == '6') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2'
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 25000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**AK-47**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:25.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 15000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Ak47_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**AK-47**"},
                                            {name: "**Valor Fiança:**", value: "**R$:15.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else 



                        if(interaction.customId == '7') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 12000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Glock**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:12.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 6000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Glock_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Glock**"},
                                            {name: "**Valor Fiança:**", value: "**R$:6.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else if(interaction.customId == '8') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 12000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Glock**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:12.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 6000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Glock_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Glock**"},
                                            {name: "**Valor Fiança:**", value: "**R$:6.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } if(interaction.customId == '9') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 12000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Glock**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:12.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 6000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Glock_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Glock**"},
                                            {name: "**Valor Fiança:**", value: "**R$:6.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else



                        if(interaction.customId == '10') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 4000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Faca**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:4.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 2000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Faca_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Faca**"},
                                            {name: "**Valor Fiança:**", value: "**R$:2.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else if(interaction.customId == '11') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 4000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Faca**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:4.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 2000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Faca_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Faca**"},
                                            {name: "**Valor Fiança:**", value: "**R$:2.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
                                        )
                                        .setColor(`RED`)
                                    ]});

                            }

                        } else if(interaction.customId == '12') {
                            interaction.deferUpdate();

                            sortear = [
                                '1',
                                '2',
                                '1',
                                '2',
                            ];

                            sorteio = sortear[Math.floor(Math.random() * sortear.length)];

                            if(sorteio == '1') {

                                add(`reais_${message.guild.id}_${message.author.id}`, 4000);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Parabéns!! Você assaltou o banco central e conseguiu fugir por pouco pelas portas do fundo!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Faca**"},
                                            {name: "**Valor Assaltado:**", value: "**R$:4.000,00**"},
                                        )
                                        .setColor(`GREEN`)
                                    ]});

                            } else {

                                add(`fianca_${message.guild.id}_${message.author.id}`, 2000);
                                set(`fiancaG_${message.guild.id}_${message.author.id}`, 1);
                                add(`Armas_Faca_${message.guild.id}_${message.author.id}`, -1);

                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Assaltar | ${message.author.tag}`)
                                        .setDescription('> **Bruuh!! Você não conseguiu achar a porta certa e, foi pego por um segurança do banco, você perdeu sua arma e, agora está na prisão! Para sair da prisão pague sua fiança!**')
                                        .addFields(
                                            {name: "**Arma Usada:**", value: "**Faca**"},
                                            {name: "**Valor Fiança:**", value: "**R$:2.000,00**"},
                                            {name: "**Pagar Fiança:**", value: "**"+prefix+"fianca**"},
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