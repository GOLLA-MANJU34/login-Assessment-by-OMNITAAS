const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Login API is running");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }

  if (username === "admin" && password === "admin") {
    return res.status(200).json({ message: "Login Successful!", username });
  }

  return res.status(401).json({ message: "Please provide valid credentials" });
});

app.listen(5000, () => {
  console.log("Server running on Port:", 5000);
});
