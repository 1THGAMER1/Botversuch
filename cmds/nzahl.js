

module.exports.run = async (bot,message,args) => {
message.delete()
    
    message.channel.send("Nächste Zahl ist 13");


}

module.exports.help = {
    name: "nzahl"
}

