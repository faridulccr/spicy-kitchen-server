const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/../views/index.html");
    // res.status(200).json({ message: "home route" });
});
router.get("/data", (req, res) => {
    res.status(200).json({});
});
module.exports = router;
