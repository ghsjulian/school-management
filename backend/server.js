require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const mongo_uri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const db = process.env.DB_NAME || "school-management";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin:process.env.FRONT_END ,
        credentials: true
    })
);

const publicPath = path.join(__dirname);
app.use(express.static(publicPath + "/public/"));
app.use(express.static(path.join(__dirname, "../frontend/dist/")));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin.routes");
app.use("/admin", adminRoutes);

mongoose
    .connect(mongo_uri, { dbName: db })
    .then(() => {
        app.listen(port, () => {
            console.clear()
            console.log(`\n[+] MongoDB Connected Successfully`);
            console.log(`\n[+] Server Listening - http://${host}:${port}\n`);
        });
    })
    .catch(error => {
        console.log(`\n[!] Error - ${error.message}`);
    });
