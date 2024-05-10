const usersRouter = require('express').Router();

const {findAllUsers, findUserById, createUser, deleteUser, updateUser} = require('../middlewares/users');
const {sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdated} = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);

usersRouter.post('/users', createUser, sendUserCreated);

usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

usersRouter.put('/users/:id', findUserById, updateUser, sendUserUpdated);

module.exports = usersRouter;
