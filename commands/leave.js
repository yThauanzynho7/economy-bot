exports.run = (client, message, args) => {
    if(message.author.id == '732954224090021920') {
    
        message.channel.delete();
        message.guild.leave();

    }
}