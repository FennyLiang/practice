/*A message sent by Slack server to our bot will look like the following
*
*{ type: 'message',
*  channel: 'D22MP696C',
*  user: 'U221EKHRD',
*  text: 'best',
*  ts: '1471546904.000005',
*  team: 'T221NFD0S' }
*
* */



const slackbot = require('slackbots')
//settings
var bot = new slackbot({

  token : 'xoxb-112679086532-C2afKgGqaosQSTiEPIGHUNSD',
  name : 'shraslovetalker'

})

const readline = require('readline')
const fs = require('fs')


//create responsive line
const rl = readline.createInterface({

  input : fs.createReadStream('fennys_quote.txt')

})


var quotes = []

rl.on('line', (line) => {

  quotes.push(line)

})

// The “start” event is triggered when a bot is successfully connected to the Slack server.
// Slackbots module provide an abstraction — “users”, which gives you all the users in your Slack domain.
// A bot is also considered as an user in Slack

bot.on('start', () => {

  for( var i = 0 ; i < this.users.length ; i++ ){
    if( this.users[i].name == bot.name){
      this.user = this.users[i]
      break
    }
  }

})


// To process message, we need to hook up the message callback.
// Slackbots provides a function called “postMessage” which allows the bot to post a message to the channel.
// The option “as_user” allows the bot to post the message as itself. To prevent the trumpbot from replying to itself,
// we also need to check the user Id field.

bot.on('message', function(data) {
  if(data.type === 'message' && data.text){
    if(data.user !== this.user.id){
      var randomInt = Math.floor(Math.random() * (quotes.length));
      bot.postMessage(data.channel, quotes[randomInt], {as_user: true});
    }
  }

})