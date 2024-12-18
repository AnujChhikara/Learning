import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import {
  GetHealthCheckMessage,
  CreateAccount,
  CreateTodo,
  GetTodos,
} from "./functions/index.js";
dotenv.config({
  path: "./.env",
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.DISCORD_BOT_TOKEN;

client.on("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(message);

  message.reply(
    `Hello, ${message.author.username}! your message is ${message.content} and your id is ${message.author.id}`
  );

  if (message.content === "ping") {
    message.reply("Pong!");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (interaction.commandName === "health_check") {
    const response = await GetHealthCheckMessage();
    await interaction.reply(response?.message || "Health check passed!");
  } else if (interaction.commandName === "create_account") {
    const name = interaction.user.username;
    const email = interaction.options.getString("email");
    const password = interaction.options.getString("password");
    const response = await CreateAccount(name, email, password);
    await interaction.reply(response);
  } else if (interaction.commandName === "add_todo") {
    const name = interaction.user.username;
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const response = await CreateTodo(name, title, description);
    await interaction.reply(response);
  } else if (interaction.commandName === "get_todos") {
    try {
      const name = interaction.user.username;
      const todos = await GetTodos(name);

      if (!todos || todos.length === 0) {
        await interaction.reply("You have no todos.");
        return;
      }

      // Create a formatted message
      const formattedTodos = todos
        .map(
          (todo, index) =>
            `**${index + 1}. ${todo.title}**\n${todo.description}`
        )
        .join("\n\n");

      // Check length to avoid exceeding Discord's character limit
      if (formattedTodos.length > 2000) {
        await interaction.reply("The todos list is too long to display here!");
        return;
      }

      // Reply with the formatted todos
      await interaction.reply(formattedTodos);
    } catch (error) {
      console.error(error);
      await interaction.reply("An error occurred while fetching your todos.");
    }
  } else if (interaction.commandName === "onboarding_extension_request") {
    // Extract options
    const days = interaction.options.getInteger("days");
    const reason = interaction.options.getString("reason");

    // Reply with the extracted information
    await interaction.reply(
      `Hello, ${interaction.user.username}! You requested an extension of ${days} days for the following reason: ${reason}. Your user ID is ${interaction.user.id}.`
    );
  }
});

client.login(token);
