const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const oceanroster = new MessageEmbed()
    .setTitle('Ocean Roster')
    .setColor(0x125DFF)
    .addField('⬜⬜⬜⬜⬜⬜⬜ Management ⬜⬜⬜⬜⬜⬜⬜', '<@&728856232953118760> (1/1) \n <@400658261512159232>\n \n <@&737378811615641681> (1/1) \n <@591262163562397717> <@&727621609359278080> (2/2) \n <@643908772275945482> \n <@411886123950800896> \n \n <@&731226637852737556> (2/3) \n <@679332454041124894> \n <@411886123950800896> \n \n <@&730859863273635940> (4/4) \n <@591262163562397717> \n <@640333310010064896> \n <@643908772275945482> \n <@690492859391934496> \n \n <@&731176675517136987> (1/3) \n <@644895688160837642> \n \n <@&731061690166149161> (1/2) \n <@591262163562397717> \n \n <@&730881791732219956> (2/2) \n <@640333310010064896> \n <@690492859391934496> ', true )
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
    .setFooter(`Team Ocean Roster`, 'https://cdn.discordapp.com/attachments/730948104307867679/761238910931304459/favicon-96x96.png');
    
    message.channel.send(oceanroster)

}

module.exports.help = {
    name : 'roster'
}
