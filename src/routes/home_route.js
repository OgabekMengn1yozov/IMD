const { HomeGET, HomePOST } = require("../controllers/home/home_controller");

const router = require("express").Router();

router.get("/", HomeGET);
router.post("/", HomePOST)

module.exports = {   
  path: "/",
  router,
};
 