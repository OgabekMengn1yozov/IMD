const { ADMIN_LOGIN, ADMIN_PASS } = require("../../../config");
const { generateToken } = require("../../modules/jwt");

module.exports = class Login {
  static async LoginGET(req, res) {
    try {
      res.render("login");
    } catch (e) {
      console.log(e);
      res.render("404");
    }
  }

  static async LoginPOST(req, res) {
    try {
      const { username, password } = req.body;

      if (username != ADMIN_LOGIN || password != ADMIN_PASS)
        throw new Error("Username or password invalid");

      let token = await generateToken(ADMIN_LOGIN);

      res.cookie("token", token).redirect("/admin");
    } catch (e) {
      console.log(e);
      res.render("login", {
        error: e + "",
      });
    }
  }
};
