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
  LinkPOST,
  CommentCreateGET,
  CommentCreatePOST,
  CommentsGET,
  CommentDELETE,
  CertificateCreateGET,
  CertificateCreatePOST,
  CertificatesGET,
  CertificateDelete,
  PortfoliosGET,
  PortfolioCategoryPOST,
  PortfoliosItemGET,
  PortfoliosItemPOST,
  PortfoliosItemDELETE,
  PortfolioDELETE,
  MessagesGET,
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
router.post("/thoughts/create", admin_middlewares, ThoughtsPOST);
router.get("/thoughts/delete/:id", admin_middlewares, ThoughtsDELETE);
// Comments
router.get("/comments", admin_middlewares, CommentsGET);
router.get("/comments/create", admin_middlewares, CommentCreateGET);
router.post("/comments/create", admin_middlewares, CommentCreatePOST);
router.get("/comments/delete/:id", admin_middlewares, CommentDELETE);
// Certificate
router.get("/certificate", admin_middlewares, CertificatesGET);
router.get("/certificate/create", admin_middlewares, CertificateCreateGET); 
router.post("/certificate/create", admin_middlewares, CertificateCreatePOST);
router.get("/certificate/delete/:id", admin_middlewares, CertificateDelete);
// Portfolios
router.get("/portfolios", admin_middlewares, PortfoliosGET);
router.post("/portfolios", admin_middlewares, PortfolioCategoryPOST);
router.get("/portfolios/:id", admin_middlewares, PortfoliosItemGET);
router.post("/portfolios/:id", admin_middlewares, PortfoliosItemPOST);
router.post("/portfolios/items/:id", admin_middlewares, PortfoliosItemDELETE);
router.get("/portfolios/delete/:id", admin_middlewares, PortfolioDELETE);
// Messages
router.get("/messages", admin_middlewares, MessagesGET);
module.exports = {
  path: "/admin",
  router,
};
