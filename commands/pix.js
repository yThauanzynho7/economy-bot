const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> PIX | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]})
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> PIX | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else if(!args[0] || message.mentions.users.size == 0) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> PIX | ${message.author.tag}`)
                .setDescription('> **Para enviar um pix, você precisa mencionar um usuário!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}pix @fulano**`, inline:true}
                )
                .setColor(`RED`)
        ]});

    } else if(get(`cPerfil_${message.guild.id}_${message.mentions.users.first().id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> Roubar | ${message.author.tag}`)
                .setDescription('> **O usuário mencionado não está cadastrado em meu banco de dados!**')
                .setColor(`RANDOM`)
        ]})
    } else {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> PIX | ${message.author.tag}`)
                .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                .addFields(
                    {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                    {name: '**Valor:**', value: `**R$:0,00**`},
                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                )
                .setColor(`RANDOM`)
        ], components: [
            new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('1')
                    .setCustomId('1')
                    .setEmoji(''),
                    new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('2')
                    .setCustomId('2')
                    .setEmoji(''),
                        new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('3')
                            .setCustomId('3')
                            .setEmoji('')
            ),
            new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('4')
                    .setCustomId('4')
                    .setEmoji(''),
                    new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('5')
                    .setCustomId('5')
                    .setEmoji(''),
                        new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('6')
                            .setCustomId('6')
                            .setEmoji('')
            ),
            new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('7')
                    .setCustomId('7')
                    .setEmoji(''),
                    new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('8')
                    .setCustomId('8')
                    .setEmoji(''),
                        new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('9')
                            .setCustomId('9')
                            .setEmoji('')
            ),
            new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setStyle('PRIMARY')
                    .setLabel('0')
                    .setCustomId('0')
                    .setEmoji(''),
                    new MessageButton()
                        .setStyle('PRIMARY')
                        .setLabel('✅')
                        .setCustomId('enviar')
                        .setEmoji(''),
                            new MessageButton()
                            .setStyle('PRIMARY')
                            .setLabel('❌')
                            .setCustomId('cancelar')
                            .setEmoji('')
                )
        ]})
        .then(msg => {
            f = i => i.isButton()
            c = msg.createMessageComponentCollector({ f: f })
    
            c.on('collect', async (interaction) => {

                {
                if(interaction.user.id !== message.author.id) return;

                if(interaction.customId == 'enviar') {
                    interaction.deferUpdate();

                    if(String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',', '') > get(`reais_${message.guild.id}_${message.author.id}`)) {

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> PIX | ${message.author.tag}`)
                                .setDescription('> **Valor superior ao seu saldo na carteira! Cancele a transferência e inicie outra.**')
                                .addFields(
                                    {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                    {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                                )
                                .setColor(`RANDOM`)
                        ]});

                        set(`pixArr_${message.guild.id}_${message.author.id}.array`, []);

                    } else if(String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',', '') === null || String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',', '') === 0 || get(`reais_${message.guild.id}_${message.author.id}`) <= 1) {

                        msg.edit({embeds: [
                            new MessageEmbed()
                                .setTitle(`> PIX | ${message.author.tag}`)
                                .setDescription('> **Você não possui saldo para enviar.**')
                                .addFields(
                                    {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                    {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                                )
                                .setColor(`RANDOM`)
                        ]});

                        set(`pixArr_${message.guild.id}_${message.author.id}.array`, []);

                    } else {

                        push(`extrato_${message.guild.id}_${message.author.id}`, `Você enviou R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')} para ${message.mentions.users.first().tag}`);
                        push(`extrato_${message.guild.id}_${message.mentions.users.first().id}`, `Você recebeu R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')} de ${message.author.tag}`);
    
                        add(`reais_${message.guild.id}_${message.author.id}`, -String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',',''));
                        add(`reais_${message.guild.id}_${message.mentions.users.first().id}`, String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',',''));

                        msg.delete();
                        message.reply({embeds: [
                            new MessageEmbed()
                                .setTitle(`> PIX | ${message.author.tag}`)
                                .setDescription('> **Transferência concluída com êxito!**')
                                .addFields(
                                    {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                    {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                    {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                                )
                                .setColor(`RANDOM`)
                        ]});

                        set(`pixArr_${message.guild.id}_${message.author.id}.array`, []);

                    }

                } else if(interaction.customId == 'cancelar') {
                    interaction.deferUpdate();

                    msg.delete();
                    message.reply({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **Você cancelou a transferencia via pix!**')
                            .addFields(
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`, inline:true}
                            )
                            .setColor(`RANDOM`)
                    ]});

                    set(`pixArr_${message.guild.id}_${message.author.id}.array`, []);

                } else if(interaction.customId == '1') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 1);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '2') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 2);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '3') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 3);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '4') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 4);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '5') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 5);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '6') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 6);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '7') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 7);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '8') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 8);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '9') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 9);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                } else if(interaction.customId == '0') {

                    push(`pixArr_${message.guild.id}_${message.author.id}.array`, 0);

                    interaction.deferUpdate();

                    msg.edit({embeds: [
                        new MessageEmbed()
                            .setTitle(`> PIX | ${message.author.tag}`)
                            .setDescription('> **✅ - `Enviar Pix`**\n> **❌ - `Cancelar`**')
                            .addFields(
                                {name: '**Usuário:**', value: `**${message.mentions.users.first().tag}**`},
                                {name: '**Valor:**', value: `**R$:${String(get(`pixArr_${message.guild.id}_${message.author.id}.array`)).replaceAll(',','')},00**`},
                                {name: '**Dinheiro:**', value: `**R$:${get(`reais_${message.guild.id}_${message.author.id}`)},00**`}
                            )
                            .setColor(`RANDOM`)
                    ]});

                }

                }
            })
        })
    }
    }
}