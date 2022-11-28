const { ADMIN_LOGIN } = require("../../config");
const { verifyToken } = require("../modules/jwt");

module.exports = async (req, res, next) => {
  const token = req.cookies["token"] || req.headers["authorization"];
  
  if (token) {
    let data = await verifyToken(token);
    if (data != ADMIN_LOGIN) {
      res.redirect("/");
      return;
    }
  
    next();

    return;
  }
  res.redirect("/");
};
