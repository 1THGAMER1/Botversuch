const { MessageEmbed } = require('discord.js');


//PSC VERLOSUNGCLAN


module.exports.run = async (bot,message,args) => {
    message.delete();

    const psc = new MessageEmbed()
    .setTitle('Paysafecard Verlosung!')
    .setColor(0x125DFF)
    .addField('PSC TITEL', 'PSC HOW', true
    .setThumbnail('https://images.app.goo.gl/goYRvG94994W1Jrm8')
    .setFooter('Für Fragen: Ocean TH GAMER#4958')
    message.channel.send(psc);
}

module.exports.help = {
    name : 'psc'
}
