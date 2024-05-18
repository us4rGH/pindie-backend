const apiRouter = require("express").Router();

const gamesRouter = require("./games");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);

module.exports = apiRouter;