const { MessageEmbed } = require('discord.js');


//Wie joint man Team Ocean?


module.exports.run = async (bot,message,args) => {
    message.delete();

    const htj = new MessageEmbed()
    .setTitle('So joinst du Team Ocean!')
    .setColor(0x125DFF)
    .addField(' Ocean Clan und Pro Team ', 'Lies dir zuerst #anforderungen durch. \n  Nachdem du dir dann ein Team ausgesucht hast musst du dann in #bewerbung %apply schreiben. \n  Der Bot wird dir dann Fragen stellen die wir zur Bewerbung brauchen. \n Ein Manager wird sich dann später bei dir melden und wird dir sagen ob du angenommen bist oder nicht' , true)
    .setFooter('Schreibe für Fragen das Management von Team Ocean an')
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
    message.channel.send(htj);
}

module.exports.help = {
    name : 'join'
}
