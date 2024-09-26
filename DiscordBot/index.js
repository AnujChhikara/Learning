const { Client, GatewayIntentBits, ConnectionService } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong!!");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short url..." + url,
    });
  }
  message.reply({
    content: "hi from bot",
  });
});

client.login("discord token");
