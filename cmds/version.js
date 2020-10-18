

module.exports.run = async (bot,message,args) => {
    message.delete()
    message.channel.send("Bot befindet sich in Version 0.7.3 \n\n **Überarbeitet (0.7.3)** Verschiednene Korrekturen und Überarbeitungen für jeden Command");
}

module.exports.help = {

    name: "version"
}
