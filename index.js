const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("ok")
})


// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("commom"));
app.use("/api/users", userRoute)


app.get("/", (req, res)=>{
    res.send("Welcome")
});


app.listen(8800, ()=>{
    console.log("backenf is runing")
})