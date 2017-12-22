var botstrap = require('botstrap');
var token = process.env.SLACK_BOT_TOKEN || '';

var bot = botstrap({
  name: 'zork1',
  token: token
});


bot.command('z', require('zorkmid'));

bot.start();