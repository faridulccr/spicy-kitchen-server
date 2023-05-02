const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).json({message: "welcome to server"});
});

router.get("/chef", (req, res) => {
    res.status(200).send();
});

router.get("/recipes", (req, res) => {
    res.status(200).send();
});
module.exports = router;
