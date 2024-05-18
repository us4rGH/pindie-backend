const users = require('../models/user');
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}

const findUserById = async (req, res, next) => {
  console.log(`GET /users/${req.params.id}`);
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
  }
};

const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Error while user creating" });
  }
};

const deleteUser = async (req, res, next) => {
  console.log(`DELETE /users/${req.params.id}`);
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка удаления пользователя" }));
  }
};

const updateUser = async (req, res, next) => {
  console.log(`PUT /users/${req.params.id}`);
  try {
    if (req.body.name || req.body.email || req.body.password) {
      console.log(req.body);
      req.user = await users.findByIdAndUpdate(req.params.id, req.body);
      next();
    }
    else {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка обновления пользователя: body is empty" }));
    }
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления пользователя" }));
  }
};

const hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
}; 

module.exports = { findAllUsers, findUserById, createUser, deleteUser, updateUser, hashPassword };