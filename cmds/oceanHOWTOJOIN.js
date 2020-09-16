const { MessageEmbed } = require('discord.js');


//Wie joint man Team Ocean?


module.exports.run = async (bot,message,args) => {
    message.delete();

    const htj = new MessageEmbed()
    .setTitle('So joinst du Team Ocean!')
    .setColor(0x125DFF)
    .addField(' Ocean Clan und Pro Team ', 'Lies dir zuerst #╔-proteam-infos☠ durch und wenn du die Anforderungen nicht erfüllen solltest #╠-clan-infos-📌' , true)
    .setFooter('Schreibe für Fragen das Management von Team Ocean an')
    message.channel.send(htj);
}

module.exports.help = {
    name : 'join'
}
