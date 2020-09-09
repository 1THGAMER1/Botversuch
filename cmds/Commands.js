const { MessageEmbed } = require('discord.js');



module.exports.run = async (bot,message,args) => {
    message.delete();

    const command = new MessageEmbed()
    .setTitle('Commands')
    .setColor(0x125DFF)
    .addField('Das sind meine Befehle:', 'UNTER ARBEIT', true)
    .setFooter('Support: Ocean TH GAMER#4958')
    message.channel.send(command)
}


module.exports.help = {
    name : 'commands'
}
