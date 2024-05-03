const usersRouter = require('express').Router();

const findAllusers = require('../middlewares/users');
const sendAllusers = require('../controllers/users');

usersRouter.get('/users', findAllusers, sendAllusers);

module.exports = usersRouter;
