const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Escravizar | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})

    } else if(get(`escravGet_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Escravizar | ${message.author.tag}`)
                .setDescription('> **Você utilizou recentemente esse comando, aguarde a mineração finalizar para utilizar o comando novamente!**')
                .setColor(`RED`)
        ]})

    } else {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Escravizar | ${message.author.tag}`)
                .setDescription('> **⛏️ - `Escravizar`**')
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('⛏️')
                        .setCustomId('1')
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

                    set(`escravGet_${message.guild.id}_${message.author.id}`, 1);

                    traficante = get(`Anoes_Traficante_${message.guild.id}_${message.author.id}`);
                    maconheiro = get(`Anoes_Maconheiro_${message.guild.id}_${message.author.id}`);
                    estelionatario = get(`Anoes_Estelionatario_${message.guild.id}_${message.author.id}`);

                    if(traficante === 0 || !maconheiro === 0 || !estelionatario === 0) {

                        set(`escravGet_${message.guild.id}_${message.author.id}`, 0);

                        msg.delete();
                        msg.channel.send({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Escravizar | ${message.author.tag}`)
                                .setDescription('> **Você não possui anões para serem escravizados!**')
                                .setColor(`RANDOM`)
                        ]})

                    } else {

                        const intervalMiner = setInterval(() => {
                            add(`traficanteM_${message.guild.id}_${message.author.id}`, traficante * 5);
                            add(`maconheiroM_${message.guild.id}_${message.author.id}`, maconheiro * 3);
                            add(`estelionatarioM_${message.guild.id}_${message.author.id}`, estelionatario * 2);
                        }, 2000 )        

                        setTimeout(() => {

                            add(`reais_${message.guild.id}_${message.author.id}`, get(`traficanteM_${message.guild.id}_${message.author.id}`)+get(`maconheiroM_${message.guild.id}_${message.author.id}`)+get(`estelionatarioM_${message.guild.id}_${message.author.id}`));

                            clearInterval(intervalMiner);

                            set(`escravGet_${message.guild.id}_${message.author.id}`, 0);

                            message.reply({embeds: [
                                new MessageEmbed()
                                    .setTitle(`> Escravizar | ${message.author.tag}`)
                                    .setDescription('> **Escravização finalizada! Seus anões já fizeram o trabalho, total: (5 minutos)**')
                                    .addFields(
                                        {name: "**Anão Traficante:**", value: `**${get(`traficanteM_${message.guild.id}_${message.author.id}`)} minerações**`},
                                        {name: "**Anão Maconheiro:**", value: `**${get(`maconheiroM_${message.guild.id}_${message.author.id}`)} minerações**`},
                                        {name: "**Anão Estelionatário:**", value: `**${get(`estelionatarioM_${message.guild.id}_${message.author.id}`)} minerações**`},
                                        {name: "**Valor da Venda:**", value: `**R$:${get(`traficanteM_${message.guild.id}_${message.author.id}`)+get(`maconheiroM_${message.guild.id}_${message.author.id}`)+get(`estelionatarioM_${message.guild.id}_${message.author.id}`)}**`}
                                    )
                                    .setColor(`RANDOM`)
                            ]});

                            set(`traficanteM_${message.guild.id}_${message.author.id}`, 0);
                            set(`maconheiroM_${message.guild.id}_${message.author.id}`, 0);
                            set(`estelionatarioM_${message.guild.id}_${message.author.id}`, 0);

                        }, 300000 );
                        msg.delete();
                        message.reply({embeds: [
                            new MessageEmbed()
                                .setTitle(`> Escravizar | ${message.author.tag}`)
                                .setDescription('> **Escravização iniciada! Seus anões já estão trabalhando, aguarde 5 minutos até que acabem.**')
                                .addFields(
                                    {name: "**Anão Traficante:**", value: `** ${traficante} anões**`},
                                    {name: "**Anão Maconheiro:**", value: `**${maconheiro} anões**`},
                                    {name: "**Anão Estelionatário:**", value: `**${estelionatario} anões**`},
                                )
                                .setColor(`RANDOM`)
                        ]});

                    }

                }
    
            }

        })

        })
    }
}
}