const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('message', message => {
    if (message.channel.type === 'dm'){
        message.reply('Added!')
    }
})

client.login(process.env.BOT_TOKEN)