const { MessageEmbed } = require('discord.js');


module.exports.run = async (bot,message,args) => {
    message.delete();

    const Gremium = new MessageEmbed()
    .setTitle('Gremium')
    .setColor(0x125DFF)
    .addField('Gremium', 'Im gremium klären Wir Mod Bewerbungen ab heißt: Wenn einer eine Bewerbung als mod, Supporter etc. geschickt hat klären wir hier ab ob er/sie den Rang bekommt. Falls jemand gebannt werden sollte klären wir es auch hier ab. Für weitere Fragen einfach im Gremium fragen.', true)
    .setDescription('Alles was im Gremium besprochen wird, bleibt im Gremium!')
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/758353626845544458/20200712_180707-1.png')
    .setFooter('Wende dich bei weiteren Fragen gerne bei Ocean TH GAMER')

    message.channel.send(Gremium)
}


module.exports.help = {
    name : 'Gremium'
}
