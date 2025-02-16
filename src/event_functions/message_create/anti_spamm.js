const discord = require("discord.js")
const color_output = require("../../../modules/color_output")

const user_map = new Map()
const timeout = 5000//ms
const allowed_msg_count = 3

module.exports = {
    async execute(message) {
        if (!(message instanceof discord.Message)) return;
        if (message.member.permissions.has(discord.PermissionFlagsBits["Administrator"])) return;
        if (message.author.bot) return;

        console.log(message.member.permissions)
        if (user_map.has(message.author.id)) {

            let user_data = user_map.get(message.author.id)
            const { lastMessage, timer } = user_data;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = user_data.msgCount;
            console.log(difference)

            if(difference > timeout) {
                clearTimeout(timer);
                console.log('Cleared Timeout');
                user_data.msgCount = 1;
                user_data.lastMessage = message;
                user_data.timer = setTimeout(() => {
                    user_map.delete(message.author.id);
                    console.log('Removed from map.')
                }, timeout);
                user_map.set(message.author.id, user_data)
            }
            else {

                ++msgCount;

                if(parseInt(msgCount) >= allowed_msg_count) {
                    
                    try {
                        await message.reply({
                            content: "🔒 Spamming is not allowed!",
                            ephermal: true
                        });

                        
    
                        //message.member.timeout(60000)
                       
                        message.channel.bulkDelete(allowed_msg_count);
                        
                    } catch (err) {
                        console.error(err)
                    }
                    
                   
                } else {

                    user_data.msgCount = msgCount;
                    user_map.set(message.author.id, user_data);

                }
            }

        } else {

            let fn = setTimeout(() => {
                user_map.delete(message.author.id);
                console.log('Removed from map.')
            }, timeout);

            user_map.set(message.author.id, {
                msgCount: 1,
                lastMessage : message,
                timer : fn
            });
        }

        


        
    }
}