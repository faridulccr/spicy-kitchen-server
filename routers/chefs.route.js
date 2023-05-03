const express = require("express");
const router = express.Router();
const chefs = require("../data/chefs.json");
const recipes = require("../data/recipes.json");

router.get("/", (req, res) => {
    res.status(200).send(chefs);
});

router.get("/:chefID", (req, res) => {
    const chefSingleData = chefs.find((chef) => chef.id == req.params.chefID);
    const recipesData = recipes.filter(
        (recipe) => recipe.cid == req.params.chefID
    );

    res.status(200).send({ chefData: chefSingleData, recipeData: recipesData });
});

module.exports = router;
