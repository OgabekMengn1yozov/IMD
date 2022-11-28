const {
  AdminGET,
  AdminStatisticPOST,
  AdminStatisticDELETE,
  ServicesGET,
  ServiceCreateGET,
  ServicePOST,
  ServiceDELETE,
  ThoughtsGET,
  ThoughtsPOST,
  ThoughtsDELETE,
} = require("../controllers/admin/admin");
const { LoginGET, LoginPOST } = require("../controllers/login/login");
const admin_middlewares = require("../middlewares/admin_middlewares");

const router = require("express").Router();

// Login
router.get("/login", LoginGET);
router.post("/login", LoginPOST);
// Statistics
router.get("/delete/:id", admin_middlewares, AdminStatisticDELETE);
router.get("/", admin_middlewares, AdminGET);
router.post("/", admin_middlewares, AdminStatisticPOST);
// Services
router.get("/services", admin_middlewares, ServicesGET);
router.get("/services/create", admin_middlewares, ServiceCreateGET);
router.post("/services", admin_middlewares, ServicePOST);
router.get("/services/delete/:id", admin_middlewares, ServiceDELETE);
// Thoughts
router.get("/thoughts", admin_middlewares, ThoughtsGET);
router.post("/thoughts", admin_middlewares, ThoughtsPOST);
router.get("/thoughts/delete/:id", admin_middlewares, ThoughtsDELETE);
module.exports = {
  path: "/admin",
  router,
};
