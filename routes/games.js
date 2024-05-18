const gamesRouter = require('express').Router();

const {findAllGames, findGameById, createGame, deleteGame, updateGame} = require('../middlewares/games');
const {sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdated} = require('../controllers/games');
const {checkAuth} = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post("/games", checkAuth, createGame, sendGameCreated);

gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

gamesRouter.put('/games/:id', checkAuth, findGameById, updateGame, sendGameUpdated);

module.exports = gamesRouter;