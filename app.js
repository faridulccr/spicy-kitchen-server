// create an express server
const express = require("express");
const cors = require("cors");

// routes
const homeRouter = require("./routers/home.route");

// create express server
const app = express();
app.use(cors());

app.use("/", homeRouter);

// route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: "Page not Found",
    });
});

// server error handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("something broke");
});

module.exports = app;
