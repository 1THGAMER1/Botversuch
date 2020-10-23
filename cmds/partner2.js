const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
message.delete()

const partner2 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ Team Quarter ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@700332737885765632> \n ◆ Discord: https://discord.gg/nvx9kmw')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
 .setFooter(`Team Ocean Partner`, 'https://cdn.discordapp.com/attachments/730948104307867679/761238910931304459/favicon-96x96.png');

message.channel.send(partner2)

}

module.exports.help = {
    name : 'partner2'
}
