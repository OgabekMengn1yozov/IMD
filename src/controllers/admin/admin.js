const { v4 } = require("uuid");
const path = require("path");
const services = require("../../models/services_schema");
const statistics = require("../../models/statistic_schema");
const thoughts = require("../../models/thoughts_schema");

module.exports = class Admin {
  static async AdminGET(req, res) {
    try {
      const static_list = await statistics.find();
      res.render("admin", {
        statistics: static_list,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async AdminStatisticPOST(req, res) {
    try {
      let { count, name } = req.body;
      console.log(count, name);
      await statistics.create({
        id: v4(),
        count,
        name,
      });

      res.redirect("/admin");
    } catch (e) {
      console.log(e);
    }
  }

  static async AdminStatisticDELETE(req, res) {
    try {
      const { id } = req.params;

      await statistics.findOneAndDelete({
        id,
      });

      res.redirect("/admin");
    } catch (e) {
      console.log(e);
    }
  }

  static async ServicesGET(req, res) {
    try {
      let service_list = await services.find();
      res.render("services", {
        services: service_list,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async ServiceCreateGET(req, res) {
    try {
      res.render("service-create");
    } catch (e) {
      console.log(e);
    }
  }

  static async ServicePOST(req, res) {
    try {
      const { image } = req.files;
      const { name, text, link } = req.body;
      console.log(image);
      let imageType = image.mimetype.split("/")[0];
      let imageFormat = image.mimetype.split("/")[1];
      let imageName = image.md5;

      if (imageType === "image" || imageType === "vector") {
        let imagePath = path.join(
          __dirname,
          "..",
          "..",
          "public",
          "uploads",
          `${imageName}.${imageFormat}`
        );

        await image.mv(imagePath);
        await services.create({
          id: v4(),
          name,
          text,
          link,
          image: `${imageName}.${imageFormat}`,
        });

        let service_list = await services.find();

        res.render("services", {
          services: service_list,
          message: "Muvofaqqiyatli yaratildi",
        });
      } else {
        throw new Error("Image type 'image' or 'vector'");
      }
    } catch (e) {
      console.log(e);
      res.render("service-create", {
        error: e + "",
      });
    }
  }

  static async ServiceDELETE(req, res) {
    try {
      const { id } = req.params;

      await services.findOneAndDelete({
        id,
      });

      let service_list = await services.find();
      res.render("services", {
        services: service_list,
        message: "Muvofaqqiyatli o'chirildi",
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async ThoughtsGET(req, res) {
    try {
      let thought_list = await thoughts.find();

      res.render("thoughts", {
        thoughts: thought_list,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async ThoughtsPOST(req, res) {
    try {
      const { text } = req.body;

      await thoughts.create({
        id: v4(),
        text,
      });

      let thought_list = await thoughts.find();

      res.render("thoughts", {
        thoughts: thought_list,
        message: "Fikr qo'shildi",
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async ThoughtsDELETE(req, res) {
    try {
      const { id } = req.params;

      await thoughts.findOneAndDelete({
        id,
      });

      let thoughts_list = await thoughts.find();
      res.render("thoughts", {
        thoughts: thoughts_list,
        message: "Muvofaqqiyatli o'chirildi",
      });
    } catch (e) {
      console.log(e);
    }
  }
};
