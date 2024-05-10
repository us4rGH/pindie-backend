const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  console.log("GET /games");
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password"
    });
  next();
};

const findGameById = async (req, res, next) => {
  console.log(`GET /games/${req.params.id}`);
  try {
    req.game = await games
      .findById(req.params.id)
      .populate("categories")
      .populate({
        path: "users",
        select: "-password",
      });
    next();
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Game not found" });
  }
};

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body)
      .populate("categories")
      .populate({
        path: "users",
        select: "-password",
      });;
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
  }
};

const deleteGame = async (req, res, next) => {
  console.log(`DELETE /games/${req.params.id}`);
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка удаления игры" }));
  }
};

const updateGame = async (req, res, next) => {
  console.log(`PUT /games/${req.params.id}`);
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body)
      .populate("categories")
      .populate({
        path: "users",
        select: "-password",
      });;
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
  }
};

module.exports = { findAllGames, findGameById, createGame, deleteGame, updateGame };