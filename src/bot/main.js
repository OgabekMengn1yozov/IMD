const TelegramBot = require("node-telegram-bot-api");
const moment = require("moment")
const { BOT_TOKEN } = require("../../config");
const messages = require("../models/message_schema");

module.exports = (name, phone) => {
  const bot = new TelegramBot(BOT_TOKEN, {
    polling: true,
  });

  bot.on("message", async (msg) => {
    const user_id = msg.from.id;
    const { text } = msg;
    try {
      if (text == "/start") {
        let keyboard = {
          resize_keyboard: true,
          keyboard: [
            [{ text: "📊Bugungi arizalar" }],
            [{ text: "📈Xaftalik" }, { text: "📋Oylik" }],
          ],
        };

        await bot.sendMessage(user_id, "🏠Bosh menu", {
          reply_markup: keyboard,
        });
      } else if (text == "📊Bugungi arizalar") {
        let today = moment().startOf("day");
        let tomorrow = moment(today).endOf("day");

        let message_list = await messages.find({
          createdAt: { $gte: today, $lte: tomorrow },
        });

        await bot.sendMessage(user_id, "Bugungi arizalar: ");
        for (let message of message_list) {
          await bot.sendMessage(
            user_id,
            `Ism: ${message.name}\nTelefon: ${message.phone}`
          );
        }
      } else if (text == "📈Xaftalik") {
        let today = moment().startOf("week");
        let tomorrow = moment(today).endOf("week");

        let message_list = await messages.find({
          createdAt: { $gte: today, $lte: tomorrow },
        });

        await bot.sendMessage(user_id, "Haftalik arizalar: ");
        for (let message of message_list) {
          await bot.sendMessage(
            user_id,
            `Ism: ${message.name}\nTelefon: ${message.phone}`
          );
        }
      } else if (text == "📋Oylik") {
        let today = moment().startOf("month");
        let tomorrow = moment(today).endOf("month");

        let message_list = await messages.find({
          createdAt: { $gte: today, $lte: tomorrow },
        });

        await bot.sendMessage(user_id, "Oylik arizalar: ");
        for (let message of message_list) {
          await bot.sendMessage(
            user_id,
            `Ism: ${message.name}\nTelefon: ${message.phone}`
          );
        }
      }
    } catch (e) {
      await bot.sendMessage(user_id, `Botda xatolik yuz berdi /start\n\n${e}`);
    }
  });

  module.exports = bot;
};
