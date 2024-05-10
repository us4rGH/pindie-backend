const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
}

const findCategoryById = async (req, res, next) => {
  console.log(`GET /categories/${req.params.id}`);
  try {
    req.category = await categories.findById(req.params.id);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
  }
};

const createCategory = async (req, res, next) => {
  console.log("POST /categories");
  try {
    console.log(req.body);
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
  }
};

const deleteCategory = async (req, res, next) => {
  console.log(`DELETE /categories/${req.params.id}`);
  try {
    req.category = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка удаления категории" }));
  }
};

const updateCategory = async (req, res, next) => {
  console.log(`PUT /categories/${req.params.id}`);
  try {
    req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления категории" }));
  }
};

module.exports = { findAllCategories, findCategoryById, createCategory, deleteCategory, updateCategory };