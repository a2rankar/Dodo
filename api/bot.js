import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const token = process.env.BOT_TOKEN;
if (!token) {
    throw new Error("BOT_TOKEN is not defined in .env file");
}

const bot = new TelegramBot("7708222376:AAG8eYmUWdKP5-1b-xR9bZXhYX1t9SyTP-g", { polling: false });


export default function handler(req, res) {
    if (req.method === "POST") {
        console.log("Incoming update:", req.body);
        res.status(200).send("OK");
    } else {
        res.status(405).send("Method Not Allowed");
    }
}


const webhookUrl = `https://dodo-2jxs.vercel.app/api/bot`;
bot.setWebHook(webhookUrl)
    .then(() => console.log(`Webhook set to ${webhookUrl}`))
    .catch(err => console.error("Error setting webhook:", err));
