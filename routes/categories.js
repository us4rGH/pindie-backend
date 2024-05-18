const categoriesRouter = require("express").Router();

const { findAllCategories, findCategoryById, createCategory, deleteCategory, updateCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated } = require('../controllers/categories');
const { checkAuth } = require("../middlewares/auth");

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get(
    "/categories/:id",
    findCategoryById,
    sendCategoryById
);

categoriesRouter.post(
    "/categories",
    checkAuth,
    createCategory,
    sendCategoryCreated);

categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted);

categoriesRouter.put('/categories/:id', checkAuth, findCategoryById, updateCategory, sendCategoryUpdated);


module.exports = categoriesRouter;
