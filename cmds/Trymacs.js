//Command wird noch ausgetestet!

const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports.run = async (bot,message,args) => {
    message.delete()

    const subReddits = ["Trymacs_Discord"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    
    const Trymacs = new MessageEmbed()
    .setColor(0x00bbfa)
    .setImage(img)
    .setTitle('Dein Trymacs Meme :D')
    .setURL(`https://reddit.com/r/${random}`)
    .setFooter('Support: Ocean TH GAMER')

    message.channel.send(Trymacs);
}

module.exports.help = {
    name : 'trymacs'
}
