const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const path = require("path"); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());


const petRoutes = require("./routes/petRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const userRoutes = require("./routes/userRoutes")
// const UserModel = require('./models/User')


app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/pets", petRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/adoption", adoptionRoutes);
app.use("/api/user", userRoutes);

// Use your MongoDB Atlas URI here
//const mongodbUri = "mongodb+srv://abis:siba18122003@cluster1.xhpmrko.mongodb.net/petRes?retryWrites=true&w=majority";


const mongodbUri = "mongodb://localhost:27017/petRes";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB Atlas", err);
});

app.listen(4001, () => {
  console.log("App is running on PORT 4001");
});
