const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot,message,args) => {
message.delete()

const partner1 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ Lyric eSports ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@593827236352753682> \n ◆ Discord:  https://discord.com/invite/5JjyPG2')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
.setFooter('Du willst auch Partner werden? Schreibe das Management an!')

message.channel.send(partner1)

}

module.exports.help = {
    name: 'partner1'
}
