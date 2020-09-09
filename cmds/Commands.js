const { MessageEmbed } = require('discord.js');



module.exports.run = async (bot,message,args) => {
    message.delete();

    const command = new MessageEmbed()
    .setTitle('Commands')
    .setColor(0x125DFF)
    .addField('Das sind meine Befehle:', 'ocean!dog = Schickt ein Random Hunde Bild! \n ocean!cat = Schickt ein Random Katzen Bild \n ocean!meme = schickt ein Random Meme \n ocean!embed = Lasse deinen eigenen Comman erstellen! \n \n BOT IST NOCH UNTER ARBEIT', true)
    .setFooter('Support: Ocean TH GAMER#4958')
    message.channel.send(command)
}


module.exports.help = {
    name : 'commands'
}
