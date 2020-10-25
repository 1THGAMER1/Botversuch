
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot,message,args) => {
message.delete()

const partner4 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ Austria Pro Clan ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@584765587213778985> \n ◆ Discord: https://discord.gg/XBQepMz')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
.setTimestamp()
.setFooter(`Team Ocean Partnerschaft`, 'https://cdn.discordapp.com/attachments/730948104307867679/761238910931304459/favicon-96x96.png');

message.channel.send(partner4)

}

module.exports.help = {
    name: 'partner4'
}
