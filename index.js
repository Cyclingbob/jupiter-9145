require('dotenv').config(); 
const discord = require('discord.js'); 
const client = new discord.Client(); 
const config = require('./config/config.json')
const PREFIX = process.env.PREFIX;
client.login(process.env.BOT_TOKEN) 

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)
    client.user.setActivity('Largest Planet In The Solar System')
}); 

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName)

const rollDice = () => Math.floor(Math.random() * 6) + 1;

client.on('message', function(message) {
    if(message.author.bot) return;
    if(isValidCommand(message, "hello")) 
        message.channel.send('hi'
    );

    if(message.author.bot) return;
    if(isValidCommand(message, "hi")) 
        message.channel.send('hello');
    
    else if (isValidCommand(message, "rolldice")) 
        message.reply("Rolled a :game_die: " + rollDice()
    );
    
    if(message.author.bot) return;
    else if(isValidCommand(message, "halp")) 
        message.channel.send(helpEmbed
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "help")) 
        message.channel.send(helpEmbed
    )


    if(message.author.bot) return;
    else if(isValidCommand(message, "invite")) 
        message.channel.send(inviteEmbed
    )
    
    if(message.author.bot) return;
    else if(isValidCommand(message, "gid.io")) 
        message.channel.send('Check out https://gid.io ! The new .io domain for sale starting from 4,930 USD!'
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "updates")) 
        message.channel.send(updateEmbed
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "youtube")) 
        message.channel.send(ytEmbed
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "support")) 
        message.channel.send(supportEmbed
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "ping")) 
        message.channel.send('Pong!'
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "restart")) 
        message.channel.send('Restarting... This could take 30 seconds. If the error keeps on happening, join my support server by using **s;support**.'
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "avatar")) 
        message.reply(message.author.displayAvatarURL()
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "info")) 
        message.channel.send(aboutEmbed
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "playlist")) 
        message.channel.send('https://www.youtube.com/watch?v=lP6mK2-nLIk&list=PLFA-AVTc6B3Guk3sO0teL4KBRpOmNDI78'
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "serverinfo")) 
        message.channel.send(`Server Name: ${message.guild.name}`
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "serverinfo")) 
        message.channel.send(`Server Owner: ${message.guild.owner}`
        )

    if(message.author.bot) return;
    else if(isValidCommand(message, "serverinfo")) 
        message.channel.send(`Created At: ${message.guild.createdAt}`
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "serverinfo")) 
        message.channel.send(`Total Members: ${message.guild.memberCount}`
    )

    if(message.author.bot) return;
    else if(isValidCommand(message, "userinfo")) 
        message.channel.send(`Username: ${message.author.username}`
    );

    if(message.author.bot) return;
    else if(isValidCommand(message, "userinfo")) 
        message.channel.send(`ID: ${message.author.id}`);




    





});


client.on('message', (msg) => {
    if (msg.content === '<@!747849388663111682>') {
      msg.channel.send(helpEmbed)
    }
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${PREFIX}kick`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick()
            .then(() => {
              message.reply(`:white_check_mark: Successfully kicked **${user.tag}**`);
            })
            .catch(err => {
              message.reply(':x: I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply(":x: That user isn't in this guild!");
        }
      } else {
        message.reply(":x: Please mention the user that you want to kick!");
      }
    }
});
  

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${PREFIX}ban`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: '',
            })
            .then(() => {
              message.reply(`:white_check_mark: Successfully banned **${user.tag}**`);
            })
            .catch(err => {
              message.reply(':x: I was unable to ban the member');
              console.error(err);
            });
        } else {
          message.reply(":x: That user isn't in this guild!");
        }
      } else {
        message.reply(":x: Please mention the user that you want to ban!");
      }
    }
  });


const updateEmbed = new discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Version 0.0.2')
	.setAuthor('Jupiter#9145')
	.setDescription('**Updates**')
	.addFields(
		{ name: '**New Commands:** ', value: `${PREFIX}userinfo | ${PREFIX}serverinfo`},
  )

    .setFooter(`For more info of the commands, use the ${PREFIX}help command.`
);

const inviteEmbed = new discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Invite me here.')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=747849388663111682&permissions=8&scope=bot'
)



const helpEmbed = new discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Invite me here')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=747849388663111682&permissions=8&scope=bot')
    .addFields(
        { name: `${PREFIX}help`, value: 'This one!', inline: true },
        { name: `${PREFIX}ping`, value: 'Test if the bot is online or not.' },
        { name: `${PREFIX}gid.io`, value: 'Checks the funny website!' },
        { name: `${PREFIX}info`, value: 'Displays the information about the bot.', inline: true },
        { name: `${PREFIX}invite`, value: 'Gives you the invite link of this bot.', inline: true },
        { name: `${PREFIX}kick`, value: 'Kicks a user mentioned.', inline: true },
        { name: `${PREFIX}ban`, value: 'Bans a user mentioned.', inline: true },
        { name: `${PREFIX}avatar`, value: 'Shows the avatar of a user.', inline: true },
        { name: `${PREFIX}updates`, value: 'Checks the version of this bot.', inline: true },
        { name: `${PREFIX}youtube`, value: 'Checks my channel and my partners!', inline: true },
        { name: `${PREFIX}playlist`, value: 'My channel\'s playlist.', inline: true },
        { name: `${PREFIX}restart`, value: 'Run this command if the bot has any errors.', inline: true },
        { name: `${PREFIX}support`, value: 'Contact the dev by joining my support server.', inline: true },
        { name: `${PREFIX}rolldice`, value: 'Rolls a dice! :game_die:', inline: true },
        { name: `${PREFIX}serverinfo`, value: 'Shows the general info of the server.', inline: true },
        { name: `${PREFIX}userinfo`, value: 'Shows your Username and ID.', inline: true },
        { name: `${PREFIX}hello`, value: 'Greetings', inline: true },
        { name: `${PREFIX}hi`, value: 'Greetings', inline: true },

        )
    
        .setTimestamp()
        .setFooter('Join my support server by using s;support if you have any problems.'
) 

const ytEmbed = new discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('YouTube Links')
	.addFields(
        { name: '**sbk.cholesterol**', value: 'https://www.youtube.com/channel/UCgCuMKWA_HdCKPsjZe5Zp7A?v' },
    )
    .addFields(
    { name: '**Taco Aviation**', value: 'https://www.youtube.com/channel/UCZIlxpJ_KlrwZYYmqiTqmdw' },
    )

    .addFields(
    { name: '**EnrichAviationGaming**', value: 'https://www.youtube.com/c/enrichaviationgaming' },
    )
    
    .setFooter(`${PREFIX}youtube`
);

const supportEmbed = new discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Join my support server.')
  .setURL('https://discord.gg/qS4RqCS'
)

const aboutEmbed = new discord.MessageEmbed()
 .setColor('RANDOM')
 .addFields(
  { name: '**Create Date**', value: '25/8/2020' },
  { name: '**Creator**', value: 'sbk.cholesterol#1511' },
  { name: '**Version**', value: '0.0.2' },

)