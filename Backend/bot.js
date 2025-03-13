import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";
import express from "express";

import 'dotenv/config';

const app = express();
app.use(express.json());

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);

// Устанавливаем вебхук
const webhookUrl = `https://dodo-2jxs.vercel.app/Backend/bot`;
bot.setWebHook(webhookUrl).then(() => {
    console.log(`Webhook set to ${webhookUrl}`);
}).catch(err => {
    console.error('Error setting webhook:', err);
});

app.post("/api/bot", (req, res) => {
    console.log("Received Telegram request:", req.body);
    
   
    bot.processUpdate(req.body);
    
    res.sendStatus(200);
});


bot.onText(/\/Hello/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hello!");
    console.log(`Sent "Hello!" to chat ${chatId}`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
