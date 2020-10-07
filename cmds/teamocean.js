const { MessageEmbed } = require('discord.js');

// Team Ocean Anforderungen

module.exports.run = async(bot, message, args) => {
    message.delete()

    const Anforderungen = new MessageEmbed()
    .setTitle('Team Ocean Beitritt')
    .addField('Um unserem Clan beizutreten musst du folgende Grundvoraussetzungen erfüllen: \n ▫ bereit sein **den Epic Namen** zu ändern.  \n ▫ Höfliches und nicht toxisches Verhalten. \n \n __Anforderungen__', '<@&763399186149802045> \n ▫ 3 Seasons Arena Champ \n ▫ 5 Mal Top 800 \n ▫ 200 PR Points \n \n <@&730918775657857056> \n ▫ 3 Seasons Arena Champ \n ▫ 3 Mal Top 1500 in Cups \n ▫ 70 PR Points  \n \n <@&730764354835841044> \n ▫ 1 Season Champ \n ▫ 3 mal Top 3500 \n ▫ 40 PR Points \n \n <@&730917730848342077> \n ▫ 4500 Arena Punkte \n ▫ 3 Mal Top 5000 \n ▫ 20 PR Points \n \n <@&730762306581168159> \n ▫ Das ist unser Community Clan! Jeder darf beitreten!', true)
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

