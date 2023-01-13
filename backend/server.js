const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/user");

const app = express();
const port = 9876;

app.use(express.json());
connectDB();
app.use("/api/user", userRoutes);

app.listen(port, console.log(`app is runnig on port ${port}`));
