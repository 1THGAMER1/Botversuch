
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot,message,args) => {
message.delete()

const partner5 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ Team Turtle ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@518453030383779861> \n ◆ Discord: https://discord.gg/CE558sv')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
.setTimestamp()
.setFooter('Schreibe für weitere Fragen unser Management an!')

message.channel.send(partner5)

}

module.exports.help = {
    name: 'partner5'
}
