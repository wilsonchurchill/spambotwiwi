const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("help l shows help page.", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === 'startspam') {
	  msg.channel.send(`startspam`)
  }
});

client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case 'SS':
            resetBot(message.channel);
            break;
   }
});

function resetBot(channel) {
    channel.send('Resetting...')
    .then(client.destroy())
    .then(client.login(NDQzMTExOTM2ODcyMTUzMTA4.DdIpeA.QozCGuCAvodyqblpwdKt2R7l4P4));
}

client.login(tokens.token);