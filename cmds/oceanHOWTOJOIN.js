const { MessageEmbed } = require('discord.js');


//Wie joint man Team Ocean?


module.exports.run = async (bot,message,args) => {
    message.delete();

    const htj = new MessageEmbed()
    .setTitle('Placeholder!')
    .setColor(0x125DFF)
    .addField('Placeholder', 'Placeholder' , true)
    .setFooter('Schreibe für Fragen das Management von Team Ocean an')
    message.channel.send(htj);
}

module.exports.help = {
    name : 'htj'
}
