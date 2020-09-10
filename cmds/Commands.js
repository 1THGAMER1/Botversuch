
const { MessageEmbed, Invite } = require('discord.js');



module.exports.run = async (bot,message,args) => {
    message.delete();

    const command = new MessageEmbed()
    .setTitle('Ocean Bot [Public] Commands')
    .setColor(0x125DFF)
    .addField('Das sind meine Befehle:', '```ocean!dog = Schickt ein Random Hunde Bild!``` ```ocean!cat = Schickt ein Random Katzen Bild``` ```ocean!meme = schickt ein Random Meme``` ```ocean!stats lifetime {DEIN EPICNAME} = Zeigt deine Fortnitestats an. **Der Command funktioniert zurzeit nur mit Epic Namen ohne Leerzeichen!``` ```ocean!embed = Lasse deinen eigenen Command erstellen!```  \n ``BOT IST NOCH UNTER ARBEIT | MEHR COMMANDS FOLGEN NOCH! ``', true)
    .setFooter('Support: Ocean TH GAMER#4958')

    
    message.channel.send(command)
}


module.exports.help = {
    name : 'commands'
}
