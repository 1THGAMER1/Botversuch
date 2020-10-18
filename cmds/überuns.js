const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot,message,args) => {
    message.delete();

    const überuns = new MessageEmbed()
    .setTitle('◽◽◽◽ **Team Ocean** ◽◽◽◽')
    .setColor(0x0bbfa)
    .addField('**überuns**', 'Wir sind ein neuer Clan welches sich nach großen Zielen sehnt. \n Wir wollen die besten Spieler haben um eines der besten und größten Clans Deutschlands zu sein. \n \n Siehe #ocean-roster um uns zu kontaktieren. \n \n Wir sind auch auf verschiedenen Sozialen Medien vertreten welche sich unten befinden.\n \n ➡️ Owner: <@630018403570155521> & <@400658261512159232> \n ➡️ Gründung: 09.07.2020 \n ➡️ Hauptziel: Großen und im competetive Bereich erfolgreichen Clan mit allen möglichen Teams (eSport und Spaß) zu haben.', true)
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')

    message.channel.send(überuns)

    const wirbieten = new MessageEmbed()
    .setTitle('◽◽◽◽ **Wir bieten** ◽◽◽◽')
    .setColor(0x00bbfa)
    .addField('Das bieten wir:', '➡️ einen gut strukturierten Discord \n ➡️ CWs (Eite, ProTeam, Academy und Talents) \n ➡️ Freundliche Member & Spieler \n ➡️ Verlosungen innerhalb des Servers oder Yt Abonnenten \n ➡️ Teams für jeden möglichen Spieler \n ➡️ Competetive Spieler \n ➡️ Designer und \n ➡️ Manager mit Erfahrung \n \n Bald mehr!', true)

    message.channel.send(wirbieten)

    const bewerben = new MessageEmbed()
    .setTitle('◽◽◽◽ ** Bewerbung** ◽◽◽◽')
    .setColor(0x00bbfa)
    .addField('So bewirbst du dich:', 'Lies dir #anforderungen durch. Dort steht alles zur Bewerbung und unseren Teams', true)

    message.channel.send(bewerben)

    const sozialemedien = new MessageEmbed()
    .setTitle('◽◽◽◽ **Social Media** ◽◽◽◽')
    .setColor(0x00bbfa)
    .addField('Auf diesen Sozialen Medien sind wir vertreten:', 'Insta: https://instagram.com/_team_ocean_?igshid=1gthnsd4q9vj \n \n Twitch: https://twitch.tv/teamoceanFN \n \n YouTube: https://www.youtube.com/channel/UCilPwqa1UF3NXS6bDuwHnzg?view_as=subscriber \n \n Twitter:  https://twitter.com/TeamOeanFN?s=09', true)

    message.channel.send(sozialemedien)
}


module.exports.help = {
    name : 'überuns'
}
