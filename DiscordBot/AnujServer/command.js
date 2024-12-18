import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
});

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "onboarding_extension_request",
    description: "user can request for extension of days before the 31 days",
    options: [
      {
        name: "days",
        description: "number of days",
        type: 4,
        required: true,
      },
      {
        name: "reason",
        description: "reason for extension",
        type: 3,
        required: true,
      },
    ],
  },
  {
    name: "health_check",
    description: "Replies with the health check message",
  },
  {
    name: "create_account",
    description: "user can create a account for the first time",
    options: [
      {
        name: "email",
        description: "user email",
        type: 3,
        required: true,
      },
      {
        name: "password",
        description: "user password",
        type: 3,
        required: true,
      },
    ],
  },
  {
    name: "add_todo",
    description: "user can add a todo ",
    options: [
      {
        name: "title",
        description: "todo title",
        type: 3,
        required: true,
      },
      {
        name: "description",
        description: "todo description",
        type: 3,
        required: true,
      },
    ],
  },
  {
    name: "get_todos",
    description: "user can retrieve all the todos",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_BOT_CLIENT_ID),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
