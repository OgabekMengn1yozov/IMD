const { HomeGET } = require("../controllers/home/home_controller");

const router = require("express").Router();

router.get("/", HomeGET);

module.exports = {   
  path: "/",
  router,
};
 