const gamesRouter = require('express').Router();

const {findAllGames, findGameById, createGame, deleteGame, updateGame} = require('../middlewares/games');
const {sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdated} = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post("/games", createGame, sendGameCreated);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

gamesRouter.put('/games/:id', findGameById, updateGame, sendGameUpdated);

module.exports = gamesRouter;