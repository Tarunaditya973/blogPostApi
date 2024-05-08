const express = require("express");
const dbConnection = require("./dbConnection");
const app = express();
const userRoutes = require("./routes/userRoutes");
dbConnection();
app.use(express.json());

app.use("/api/auth", userRoutes);

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
