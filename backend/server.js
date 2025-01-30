const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const app = express();
const mongo_uri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const db = process.env.DB_NAME || "ghs";

const router = require("./routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: "*"
    })
);

app.use("/server", router);

app.listen(port, () => {
    console.log(`\n[+] Server Listening - http://${host}:${port}\n`);
});
