

module.exports.run = async (bot,message,args) => {
message.delete()
    
    message.channel.send("Command derzeit inaktiv``");


}

module.exports.help = {
    name: "nzahl"
}

