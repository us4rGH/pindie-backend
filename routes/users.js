const usersRouter = require('express').Router();

const {findAllUsers, findUserById, createUser, deleteUser, updateUser, hashPassword} = require('../middlewares/users');
const {sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdated, sendMe} = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post('/users', hashPassword, createUser, sendUserCreated);

usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted);

usersRouter.put('/users/:id', checkAuth, findUserById, updateUser, sendUserUpdated);

module.exports = usersRouter;
