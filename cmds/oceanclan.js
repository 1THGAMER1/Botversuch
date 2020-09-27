const { MessageEmbed } = require('discord.js');


//Anforderungen Clan


module.exports.run = async (bot,message,args) => {
    message.delete();

    const clan = new MessageEmbed()
    .setTitle('OCEAN CLAN')
    .setColor(0x125DFF)
    .addField('Um in unseren Clan zu kommen, musst du folgendes tun:', '• Du musst deinen Epic-Namen in „Ocean Name“ ändern. \n \n Bsp. Ocean Anni \n \n • Dann ein Bild in den Channel #bewerbung✏ rein schicken, wie du deinen Namen geändert hast. \n \n • Danach einen Clan-Manager kontaktieren, der dich dann bei Gelegenheit aufnehmen wird.', true)
    .setDescription('Jeder darf in den normalen Clan!')
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
    .setFooter('Bei weiteren Fragen einfach bei einem Clanmanager melden')
    message.channel.send(clan);
}

module.exports.help = {
    name : 'clan'
}
