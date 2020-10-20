const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const oceanroster = new MessageEmbed()
    .setTitle('Ocean Roster')
    .setColor(0x125DFF)
    .addField('⬜⬜⬜⬜⬜⬜⬜ Management ⬜⬜⬜⬜⬜⬜⬜', '<@&728856232953118760> (1/1) \n <@630018403570155521>  \n \n <@&734153281189838967> (1/1) \n  <@400658261512159232>\n \n <@&727621609359278080> (2/2) \n <@400658261512159232> \n <@411886123950800896> \n \n <@&731226637852737556> (1/3) \n <@679332454041124894> \n \n <@&730859863273635940> (4/4) \n <@591262163562397717> \n <@640333310010064896> \n <@643908772275945482> \n <@690492859391934496> \n \n <@&731176675517136987> (1/3) \n <@644895688160837642> \n \n <@&731061690166149161> (1/2) \n <@591262163562397717> \n \n <@&730881791732219956> (1/2) \n <@640333310010064896> ', true )
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
    .setFooter('Neu: Ocean TT von ModeratorPraktikant zu Moderator')
    
    message.channel.send(oceanroster)

}

module.exports.help = {
    name : 'roster'
}
