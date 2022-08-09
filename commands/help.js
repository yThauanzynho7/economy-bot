const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { all, push, add, get, set } = require('quick.db');
const { prefix } = require('../src/config.json');

exports.run = (client, message, args) => {
    if(message.channel.id == get(`chat_${message.guild.id}`)) {
        message.author.send({embeds: [
            new MessageEmbed()
                .setTitle(`> HELP | ${message.author.tag}`)
                .addFields(
                    {name: prefix+"**cperfil**", value: "**`Criar um perfil.`**", inline:true},
                    {name: prefix+"**perfil**", value: "**`Ver seu perfil / de outro usuário.`**", inline:true},
                    {name: prefix+"**minerar**", value: "**`Minerar e vender minérios.`**", inline:true},
                    {name: prefix+"**marry**", value: "**`Casar com um usuário.`**", inline:true},
                    {name: prefix+"**sexo**", value: "**`Faça sexo com seu(a) marido(a) e ganhe recompensas.`**", inline:true},
                    {name: prefix+"**xcam**", value: "**`Faça xcam com seu(a) marido(a) e ganhe recompensas.`**", inline:true},
                    {name: prefix+"**gf**", value: "**`Faça gf com seu(a) marido(a) e ganhe recompensas.`**", inline:true},
                    {name: prefix+"**puta**", value: "**`Apostar dinheiro com uma prostituta.`**", inline:true},
                    {name: prefix+"**pix**", value: "**`Enviar um pix.`**", inline:true},
                    {name: prefix+"**extrato**", value: "**`Ver seu extrato`**", inline:true},
                    {name: prefix+"**loja**", value: "**`Abrir o menu de loja.`**", inline:true},
                    {name: prefix+"**assaltar**", value: "**`Assaltar o banco central.`**", inline:true},
                    {name: prefix+"**banco**", value: "**`Veja seu saldo no banco`**", inline:true},
                    {name: prefix+"**sacar**", value: "**`Saque seu dinheiro do banco.`**", inline:true},
                    {name: prefix+"**depositar**", value: "**`Deposite seu dinheiro no banco.`**", inline:true},
                    {name: prefix+"**roubar**", value: "**`Roube dinheiro de algum jogador.`**", inline:true},
                    {name: prefix+"**fianca**", value: "**`Pagar fiança.`**", inline:true},
                    {name: prefix+"**topricos**", value: "**`Listar os 10 jogadores mais ricos do servidor.`**", inline:true},
                    {name: prefix+"**topminer**", value: "**`Listar os 10 jogadores com mais minerações do servidor.`**", inline:true},
                    {name: prefix+"**topbanco**", value: "**`Listar os 10 jogadores com mais dinheiro no banco no servidor.`**", inline:true},
                    {name: prefix+"**topanoes**", value: "**`Listar os 10 jogadores com mais anões no servidor.`**", inline:true},
                    {name: prefix+"**topjogadores**", value: "**`Listar todos os jogadores do bot.`**", inline:true},
                    {name: prefix+"**apostar**", value: "**`Aposte seu dinheiro na moeda.`**", inline:true},
                    {name: prefix+"**festajunina**", value: "**`Pegue sua recompensa de festa junina.`**", inline:true},
                    {name: prefix+"**escravizar**", value: "**`Escravize seus anões e ganhe dinheiro`**", inline:true}
                )
                .setDescription('**Em breve mais novidades!**')
                .setColor(`RANDOM`)
        ]})
            .catch(err => message.reply('**Desbloqueie seu privado e tente novamente!**'))  
    }
}