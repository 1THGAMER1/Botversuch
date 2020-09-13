const { MessageEmbed } = require('discord.js');


//PSC VERLOSUNGCLAN
//NUR FÜR LIMITIERTE ZEIT!


module.exports.run = async (bot,message,args) => {
    message.delete();

    const psc = new MessageEmbed()
    .setTitle('Paysafecard Verlosung!')
    .setColor(0x125DFF)
    .addField('So machst du bei der Verlosung mit', '1. Joine dem Ocean Clan, Pro Team oder anderen Team von Ocean \n 2. Nachdem du dann im Clan angenommen worden bist schaltest du die Clan Chats frei; eins davon heißt #10€-psc-verlosung. \n 3. In diesem Chat musst du dann die vom Bot vorgegebene Zahl schreiben. \n 4. Jetzt machst du schon bei der Verlosung mit!' , true)
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/754673270602858497/1AA.jpg')
    .setFooter('Schreibe für Fragen Ocean TH GAMER#4958 an')
    message.channel.send(psc);
}

module.exports.help = {
    name : 'psc'
}
