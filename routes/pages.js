const { sendDashBoard, sendIndex } = require("../controllers/auth");
const { checkCookiesJWT, checkAuth } = require("../middlewares/auth");

const pagesRouter = require("express").Router();

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashBoard);
pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;