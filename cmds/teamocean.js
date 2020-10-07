const { MessageEmbed } = require('discord.js');

// Team Ocean Anforderungen

module.exports.run = async(bot, message, args) => {
    message.delete()

    const Anforderungen = new MessageEmbed()
    .setTitle('Team Ocean Beitritt')
    .addField('Um unserem Clan beizutreten musst du folgende Grundvoraussetzungen erfüllen: \n ▫ bereit sein **den Epic Namen** zu ändern.  \n ▫ Höfliches und nicht toxisches Verhalten. \n \n __Anforderungen__', '<@&730918775657857056> \n ▫ Top 1% in Cups \n ▫ 6000 Arena Punkte \n \n <@&730764354835841044> \n ▫ Top 10% in Cups \n ▫ 5500 Arena Punkte \n \n <@&730917730848342077> \n ▫ Top 20% in Cups \n ▫ 4500 Arena Punkte \n \n <@&730762306581168159> \n ▫ Das ist unser Community Clan! Jeder darf beitreten!', true)
    .setColor(0x125DFF)
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
    message.channel.send(Anforderungen)

    const HOW = new MessageEmbed()
    .setTitle('So bewirbst du dich')
    .addField('Um in eines unserer Teams zu kommen musst du folgendes machen:', ' Bitte melde dich in #bewerbungen und schreibe in welches Team du willst. \n  Weiteres erklärt euch dann der Manager.')
    .setColor(0x125DFF)
    message.channel.send(HOW)

}

module.exports.help = {
    name : 'anforderungen'
}

