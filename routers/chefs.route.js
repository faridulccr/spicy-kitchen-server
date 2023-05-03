const express = require("express");
const router = express.Router();
const chefs = require("../data/chefs.json");

router.get("/", (req, res) => {
    res.status(200).send(chefs);
});

module.exports = router;