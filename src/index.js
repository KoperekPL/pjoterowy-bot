const config = require("./config/config.js")

const chalk = require("chalk")

const Discord = require("discord.js")
const client = new Discord.Client()

const log = console.log

client.on("ready", () => {
  log(chalk.red("Autorski bot Pjotera"))
  log(chalk.blue(`Zalogowano jako:  ${client.user.tag}.`))
})

client.on("message", msg => {
  log(msg.content, msg.author.tag)
  const { author } = msg
  if(author.bot){
    return
  }
  if (msg.content === "+ping") {
    msg.reply("Pong!")
  }
})

client.login(config.token)

