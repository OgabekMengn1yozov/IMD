const { v4 } = require("uuid");
const path = require("path");
const services = require("../../models/services_schema");
const statistics = require("../../models/statistic_schema");
const thoughts = require("../../models/thoughts_schema");
const links = require("../../models/link_schema");
const comments = require("../../models/comments_schema");
const certificates = require("../../models/certificate_schema");
const portfolios = require("../../models/portfolio_categories");
const portfolios_items = require("../../models/portfolios_items");
const messages = require("../../models/message_schema");

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

      let link = await links.find();

      res.render("thoughts", {
        thoughts: thought_list,
        link,
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
      let link = await links.find();

      res.render("thoughts", {
        thoughts: thought_list,
        link,
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
      let link = await links.find();

      res.render("thoughts", {
        thoughts: thoughts_list,
        link,
        message: "Muvofaqqiyatli o'chirildi",
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async LinkPOST(req, res) {
    try {
      let { link } = req.body;

      let link_list = await links.find();

      if (!link_list[0]) {
        await links.create({
          id: v4(),
          link,
        });
      } else {
        await links.findOneAndUpdate(
          {
            id: link_list[0].id,
          },
          {
            link,
          }
        );
      }

      res.redirect("/admin/thoughts");
    } catch (e) {
      console.log(e + "");
    }
  }

  static async CommentsGET(req, res) {
    try {
      let comment_list = await comments.find();

      res.render("comments", {
        comments: comment_list,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async CommentCreateGET(req, res) {
    try {
      res.render("comments-create");
    } catch (e) {
      console.log(e);
    }
  }

  static async CommentCreatePOST(req, res) {
    try {
      let { image } = req.files;
      let { name, comment, direction, date } = req.body;

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

        await comments.create({
          id: v4(),
          name,
          comment,
          direction,
          date,
          image: `${imageName}.${imageFormat}`,
        });

        let comment_list = await comments.find();

        res.render("comments", {
          comments: comment_list,
          message: "Muvofaqqiyatli yaratildi",
        });
      } else {
        throw new Error("Image type 'image' or 'vector'");
      }
    } catch (e) {
      console.log(e);
      res.render("comments-create", {
        error: e + "",
      });
    }
  }

  static async CommentDELETE(req, res) {
    try {
      const { id } = req.params;

      await comments.findOneAndDelete({
        id,
      });

      let comment_list = await comments.find();

      res.render("comments", {
        comments: comment_list,
        message: "Muvofaqqiyatli o'chirildi",
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async CertificatesGET(req, res) {
    try {
      let certificate_list = await certificates.find();

      res.render("certificate", {
        certificates: certificate_list,
      });
    } catch (e) {
      console.log(e);
      res.render("certificate-create", {
        error: e + "",
      });
    }
  }

  static async CertificateCreateGET(req, res) {
    try {
      res.render("certificate-create");
    } catch (e) {
      console.log(e);
    }
  }

  static async CertificateCreatePOST(req, res) {
    try {
      let { direction_image, certificate_image } = req.files;
      let imageTypeDirection = direction_image.mimetype.split("/")[0];
      let imageFormatDirection = direction_image.mimetype.split("/")[1];
      let imageNameDirection = direction_image.md5;

      let imageTypeCertificate = certificate_image.mimetype.split("/")[0];
      let imageFormatCertificate = certificate_image.mimetype.split("/")[1];
      let imageNameCertificate = certificate_image.md5;

      if (
        imageTypeDirection === "image" ||
        imageTypeDirection === "vector" ||
        imageTypeCertificate === "image" ||
        imageTypeCertificate === "vector"
      ) {
        let imagePathDirection = path.join(
          __dirname,
          "..",
          "..",
          "public",
          "uploads",
          `${imageNameDirection}.${imageFormatDirection}`
        );
        let imagePathCertificate = path.join(
          __dirname,
          "..",
          "..",
          "public",
          "uploads",
          `${imageNameCertificate}.${imageFormatCertificate}`
        );

        await direction_image.mv(imagePathDirection);
        await certificate_image.mv(imagePathCertificate);

        await certificates.create({
          id: v4(),
          direction_image: `${imageNameDirection}.${imageFormatDirection}`,
          certificate_image: `${imageNameCertificate}.${imageFormatCertificate}`,
        });

        let certificate_list = await certificates.find();

        res.render("certificate", {
          certificates: certificate_list,
          message: "Muvofaqqiyatli yaratildi",
        });
      } else {
        throw new Error("Image type 'image' or 'vector'");
      }
    } catch (e) {
      console.log(e);
      res.render("certificate-create", {
        error: e + "",
      });
    }
  }

  static async CertificateDelete(req, res) {
    try {
      const { id } = req.params;

      await certificates.findOneAndDelete({
        id,
      });

      let certificate_list = await certificates.find();

      res.render("certificate", {
        certificates: certificate_list,
        message: "Muvofaqqiyatli o'chirildi",
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async PortfoliosGET(req, res) {
    try {
      let portfolios_categories = await portfolios.find();

      res.render("portfolios", {
        portfolios: portfolios_categories,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async PortfolioCategoryPOST(req, res) {
    try {
      const { name } = req.body;

      await portfolios.create({
        id: v4(),
        name,
      });

      let portfolios_categories = await portfolios.find();

      res.render("portfolios", {
        message: "Muvofaqqiyatli yaratildi",
        portfolios: portfolios_categories,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async PortfolioDELETE(req, res) {
    try {
      let { id } = req.params;

      await portfolios.deleteOne({ id });
      await portfolios_items.deleteMany({ portfolio_id: id });

      let portfolios_categories = await portfolios.find();

      res.render("portfolios", {
        message: "Muvofaqqiyatli o'chirildi",
        portfolios: portfolios_categories,
      });
    } catch (e) {
      console.log(e + "");
    }
  }

  static async PortfoliosItemGET(req, res) {
    try {
      const { id } = req.params;

      let category = await portfolios.findOne({ id });

      let portfolios_items_list = await portfolios_items.find({
        portfolio_id: id,
      });

      res.render("portfolios_items", {
        category,
        portfolios_items: portfolios_items_list,
      });
    } catch (e) {
      console.log(e + "");
    }
  }

  static async PortfoliosItemPOST(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const { image } = req.files;

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
        await portfolios_items.create({
          id: v4(),
          portfolio_id: id,
          name,
          image: `${imageName}.${imageFormat}`,
        });

        res.redirect(`/admin/portfolios/${id}`);
      } else {
        throw new Error("Image type 'image' or 'vector'");
      }
    } catch (e) {
      console.log(e + "");
    }
  }

  static async PortfoliosItemDELETE(req, res) {
    try {
      let { id } = req.params;
      let { item_id } = req.body;
      console.log(id, item_id);
      await portfolios_items.findOneAndDelete({
        id: item_id,
      });

      res.redirect(`/admin/portfolios/${id}`);
    } catch (e) {
      console.log(e + "");
    }
  }

  static async MessagesGET(req, res) {
    try {
      let msg_list = await messages.find();

      res.render("messages", {
        messages: msg_list,
      });
    } catch(e) {
      console.log(e);
    }
  }
};
