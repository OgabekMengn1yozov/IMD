const { v4 } = require("uuid");
const { USER_ID } = require("../../../config");
const bot = require("../../bot/main");
const main = require("../../bot/main");
const certificates = require("../../models/certificate_schema");
const comments = require("../../models/comments_schema");
const links = require("../../models/link_schema");
const messages = require("../../models/message_schema");
const portfolios_items = require("../../models/portfolios_items");
const portfolios = require("../../models/portfolio_categories");
const services = require("../../models/services_schema");
const statistics = require("../../models/statistic_schema");
const thoughts = require("../../models/thoughts_schema");

module.exports = class HomeControllers {
  static async HomeGET(req, res) {
    try {
      let static_list = await statistics.find();
      let service_list = await services.find();
      let you_tube = await links.find();
      let thought_list = await thoughts.find();
      let comment_list = await comments.find();
      let certificate_list = await certificates.find();
      let portfolio_list = await portfolios.find();

      let portfolios_item_list = [];
      for (let category of portfolio_list) {
        let items = await portfolios_items.find({
          portfolio_id: category.id,
        });
        portfolios_item_list.push(items);
      }

      res.render("index", {
        statistics: static_list,
        services: service_list,
        portfolios: portfolio_list,
        thoughts: thought_list,
        link: you_tube[0],
        comments: comment_list,
        certificates: certificate_list,
        portfolios_items: portfolios_item_list,
      });
    } catch (e) {
      console.log(e);
      res.render("404")
    }
  }

  static async HomePOST(req, res) {
    try {
      const { name, phone } = req.body;

      await messages.create({
        id: v4(),
        name,
        phone,
        read: false,
      });

      // Bot send message
      await bot.sendMessage(USER_ID, `Yangi\n\nIsm: ${name}\nTelefon: ${phone}`);

      res.redirect("/");
    } catch (e) {
      console.log(e);
      res.render("404");
    }
  }
};
