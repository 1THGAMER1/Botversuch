

module.exports.run = async (bot,message,args) => {
    message.delete()
    message.channel.send("Bot befindet sich in Version 0.7.1 \n\n **Neues bei dieser Version (0.7.1) ** \n Du willst wissen wie du Team Ocean joinst? Schreibe ocean!join \n \n **Überarbeitet (0.7.1)** Verschiednene Korrekturen für jeden Command");
}

module.exports.help = {

    name: "version"
}
