const express = require("express");
const router = express.Router();
const chefs = require("../data/chefs.json");
const recipes = require("../data/recipes.json");

router.get("/", (req, res) => {
    res.status(200).json({message: "welcome to server"});
});

router.get("/chef", (req, res) => {
    res.status(200).send(chefs);
});

router.get("/recipes", (req, res) => {
    res.status(200).send(recipes);
});

module.exports = router;
