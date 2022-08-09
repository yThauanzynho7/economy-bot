const { Client, MessageEmbed, Message } = require('discord.js');
const { all, set } = require('quick.db');
const client = new Client({intents: ["GUILDS", "GUILD_MEMBERS", 7753], fetchAllMembers: true});
const { token, prefix } = require('./src/config.json');

client.once("ready", () => {

  console.info('Bot Ativo!')
  client.user.setActivity('Bot de economia feito por NewLayer#0999');
});

client.on('messageCreate', message => {

  if(message.content.startsWith('<@'+client.user.id+'>')) {
    
    message.reply({
      embeds: [
        new MessageEmbed()
          .setColor("RANDOM")
          .setTitle( 'MENTION | ' + message.author.tag )
          .setDescription(`**Olá!
Sou um bot de diversão criado pelo NewLayer#0999,
estou na minha versão [ 2.5.1 ]!
Para mais informações, utilize: ${prefix}help.**`)
      ]
    });

  }

  if(message.author.bot || message.channel.type == 'dm' || !message.content.toLowerCase().startsWith(prefix.toLowerCase()) || message.content.startsWith(`<@${client.user.id}>`)) return;

  args = message.content
    .trim().slice(prefix.length)
    .split(/ +/g);
  command = args.shift().toLowerCase();

  try {
    commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Erro:' + err)
  
  }

});

client.login(token);

process.on("uncaughtException", (err) => console.log(err));