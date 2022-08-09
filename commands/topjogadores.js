const { MessageEmbed } = require('discord.js')
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = async (client, message, args) => {
if(message.channel.id == get(`chat_${message.guild.id}`)) {
    if(get(`cPerfil_${message.guild.id}_${message.author.id}`) !== 2) {
        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP JOGADORES | ${message.author.tag}`)
                .setDescription('> **Para utilizar esse comando, você deve primeiro criar um perfil!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}cperfil**`}
                )
                .setColor(`RANDOM`)
        ]});
    
    } else if(get(`fiancaG_${message.guild.id}_${message.author.id}`) === 1) {

        message.reply({embeds: [
            new MessageEmbed()
                .setTitle(`> TOP JOGADORES | ${message.author.tag}`)
                .setDescription('> **Você está preso! Pague sua fiança para utilizar esse comando!**')
                .addFields(
                    {name: '**Utilize:**', value: `**${prefix}fianca**`}
                ).setColor(`RED`)
        ]});

    } else {

    let cPerfil = await all().filter(data => data.ID.startsWith(`cPerfil_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    let cPerfilG = await all().filter(data => data.ID.startsWith(`cPerfil_`)).sort((a, b) => b.data - a.data)

            for (i=0;i<cPerfil.length;i++) {
                add(`allMembers`, 1);
            }
            for (i=0;i<cPerfilG.length;i++) {
                add(`allMembersGlobal`, 1);
            }
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} | TOP JOGADORES`)
                .setColor("RANDOM")
                .addFields(
                    {name:"**Jogadores Totais ["+message.guild.name+"]**", value:"**`"+get(`allMembers`)+"` jogadores cadastrados em meu banco de dados**"},
                    {name:"**Jogadores Globais**", value:"**`"+get(`allMembersGlobal`)+"` jogadores cadastrados em meu banco de dados**"},
                )
            message.reply({
                embeds: [embed]
            });
            set(`allMembers`, 0)
            set(`allMembersGlobal`, 0);
    }
}
}