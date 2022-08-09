const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Apostar | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Apostar | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(get(`apostar_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Apostar | ${message.author.tag}`)
                .setDescription('> **Você apostou recentemente! Por favor, aguarde para apostar novamente!**')
                .setColor(`RED`)
        ]});

    } else if(!args[0]) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Apostar | ${message.author.tag}`)
                .setDescription('> **Você esqueceu de fornecer um valor a ser apostado!**')
                .setColor(`RED`)
        ]})

    } else {

        if(get(`reais_${message.guild.id}_${message.author.id}`) < args[0] || String(args[0]).includes('-')) {
            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Apostar | ${message.author.tag}`)
                    .setDescription('> **Para iniciar a aposta você precisa fornecer um valor igual ou menor ao seu saldo!**')
                    .addFields(
                        {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                    )
                    .setColor(`RED`)
            ]});
  
        } else if(args[0]*3 > get(`reais_${message.guild.id}_${message.author.id}`)) {

                message.reply({embeds: [
                    new MessageEmbed()
                        .setTitle(`> Apostar | ${message.author.tag}`)
                        .setDescription('> **Seu dinheiro precisa ser 3x maior do que o valor da aposta!**')
                        .addFields(
                            {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                        )
                        .setColor(`RED`)
                ]});   
        } else {
        set(`apostar_${message.guild.id}_${message.author.id}`, 1);

        setTimeout(() => {
            set(`apostar_${message.guild.id}_${message.author.id}`, 0);
        }, 300000 );

            message.reply({embeds: [
                new MessageEmbed()
                    .setTitle(`> Apostar | ${message.author.tag}`)
                    .setDescription('> **🪙 - Cara**\n> **💴 - Coroa**')
                    .addFields(
                        {name: '**Valor da Aposta:**', value: `**R$:${args[0]},00**`, inline:true}
                    )
                    .setColor(`RANDOM`)
            ], components: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('🪙')
                        .setCustomId('1')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('💴')
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

                            let cara = ['cara', 'coroa'];
                            let sortear1 = cara[Math.floor(Math.random() * cara.length)];

                            if(sortear1 == 'cara') {

                                add(`reais_${message.guild.id}_${message.author.id}`, args[0]*2);

                            msg.delete();
                            message.reply({embeds: [
                                new MessageEmbed()
                                    .setTitle(`> Apostar | ${message.author.tag}`)
                                    .setDescription(`> **Parabéns! Deu cara! Você ganhou R$:${args[0]*2}**`)
                                    .setColor(`RANDOM`)
                            ]})

                            } else {

                                add(`reais_${message.guild.id}_${message.author.id}`, -args[0]*3);
                                
                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Apostar | ${message.author.tag}`)
                                        .setDescription(`> **Bruuhh! Deu coroa e, você acabou perdendo R$:-${args[0]*3}!**`)
                                        .setColor(`RED`)
                                ]})
                            }

                        } else if(interaction.customId == '2') {
                            interaction.deferUpdate();

                            let coroa = ['cara', 'coroa'];
                            let sortear = coroa[Math.floor(Math.random() * coroa.length)];  

                            if(sortear == 'coroa') {
                                
                                add(`reais_${message.guild.id}_${message.author.id}`, args[0]*2);
                                
                                msg.delete();
                                message.reply({embeds: [
                                    new MessageEmbed()
                                        .setTitle(`> Apostar | ${message.author.tag}`)
                                        .setDescription(`> **Parabéns! Deu coroa! Você ganhou R$:${args[0]*2}**`)
                                        .setColor(`RANDOM`)
                                ]})
    
                                } else {

                                add(`reais_${message.guild.id}_${message.author.id}`, -args[0]*3);
                                
                                    msg.delete();
                                    message.reply({embeds: [
                                        new MessageEmbed()
                                            .setTitle(`> Apostar | ${message.author.tag}`)
                                            .setDescription(`> **Bruuhh! Deu cara e, você acabou perdendo R$:-${args[0]*3}!**`)
                                            .setColor(`RED`)
                                    ]})

                                }

                        }

                        }
                    })
                })
            }
        }
    }
}