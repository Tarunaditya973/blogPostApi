const express = require("express");
const dbConnection = require("./dbConnection");
const app = express();
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const { authenticateUser } = require("./middleware/authentication.middleware");

dbConnection();
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/blog", authenticateUser, blogRoutes);

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
