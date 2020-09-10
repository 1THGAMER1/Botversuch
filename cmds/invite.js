const { MessageEmbed } = require('discord.js');


module.exports.run = async (bot,message,args) => {
    message.delete();


    const Invite = new MessageEmbed()
    .setTitle('Mein Einladungslink')
    .setColor(0x125DFF)
    .setFooter('Support: Ocean TH GAMER#4958')
    .setURL('https://discord.com/oauth2/authorize?client_id=711568834590408765&scope=bot&permissions=8')

    message.channel.send(Invite)

}

module.exports.help = {
    name: "invite"
}
