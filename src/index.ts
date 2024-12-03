import express from "express";
import { config } from "dotenv";
import { GetUsersControllers } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

config();

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersControllers = new GetUsersControllers(mongoGetUsersRepository);

  const {body, statusCode} = await getUsersControllers.handle();

  res.send(body).status(statusCode);
});
