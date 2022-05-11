import express from "express";
import { webhookCallback } from "grammy";
import { Bot } from "grammy";

const app = express();

app.use(express.json());

app.use(
    '/:botToken',
    (req, res) => {
        // Create an instance of the `Bot` class and pass your authentication token to it.
        const bot = new Bot(req.params.botToken);
        // You can now register listeners on your bot object `bot`.
        // grammY will call the listeners when users send messages to your bot.
        // Handle the /start command.
        bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
        // finally, register the webhook
        webhookCallback(bot, "express")
    }
);

app.listen(Number(process.env.PORT), () => {
    console.log(
        `Running on ${process.env.PORT}! Join https://t.me/c/1195659882/19121`
    );
});