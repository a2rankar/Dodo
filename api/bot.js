import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";


const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false });


export default function handler(req, res) {
    if (req.method === "POST") {
        console.log("Received Telegram request:", req.body);
        bot.processUpdate(req.body); 
        res.status(200).send("OK");  
        console.log('Successfully connected!');
    } else {
        res.status(405).send("Method Not Allowed");
    }
}


bot.setWebHook(`https://dodo-2jxs.vercel.app`);
