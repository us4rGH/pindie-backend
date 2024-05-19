const express = require("express");
const path = require("path");
const bodyParser =  require("body-parser");

const connectToDatabase = require('./database/connect');
const apiRouter = require("./routes/apiRouter");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const PORT = 3000;

const app = express();

connectToDatabase();

app.use(
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, "public"))
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});