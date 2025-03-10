import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

console.log("Bot is running...");

// Команда /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to marketplace!");
});

// Команда /shop
bot.onText(/\/shop/, (msg) => {
    bot.sendMessage(msg.chat.id, "Store is opening...", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Go to Store", web_app: { url: "http://localhost:5173/" } }]
            ]
        }
    });
});
console.log("TOKEN:", process.env.BOT_TOKEN);

