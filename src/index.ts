import express from "express";
import { config } from "dotenv";

config();

console.log("testando git");

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get("/", (req, res) => {
  res.send("Fala ai meu bom!");
});
