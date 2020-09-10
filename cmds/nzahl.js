

module.exports.run = async (bot,message,args) => {
message.delete()
    
    message.channel.send("Nächste Zahl ist 12");


}

module.exports.help = {
    name: "nzahl"
}

