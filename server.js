const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Bienvenue sur mon app Node.js simple avec OpenShift</h1>");
});

app.listen(port, () => console.log(`App running on port ${port}`));
