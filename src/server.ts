import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const router = express.Router();
import cors from "cors";
app.use(cors());
import userRouter from "./controllers";
import { connection } from "./connection";
import { sequelize } from "./sequilezeObject";
async function main() {
  console.log(process.env.USERNAME)
  await connection();
     await sequelize.sync({ alter: true });
  app.use(userRouter);
  app.listen(4000, () => {
    console.log("Server is running on the port 4000");
  });
}
main();
