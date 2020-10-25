const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const partner3 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ TEAM KODYX ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@488664221513678848> \n ◆ Discord: https://discord.gg/8vb4Rr3')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
.setFooter(`Team Ocean Partnerschaft`, 'https://cdn.discordapp.com/attachments/730948104307867679/761238910931304459/favicon-96x96.png');

message.channel.send(partner3)

}

module.exports.help = {
    name : 'partner3'
}
