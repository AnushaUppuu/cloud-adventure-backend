import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const username = process.env.USERNAME ? process.env.USERNAME : "anusha";
const database = process.env.DATABASE ? process.env.DATABASE : "users";
const password = process.env.PASSWORD ? process.env.PASSWORD : "anusha123";
const host = process.env.HOST ? process.env.HOST : "localhost";
export const sequelize = new Sequelize(database, username, password, {
  dialect: "postgres",
   "dialectOptions": {
        "ssl": {
            "require": true,
            "rejectUnauthorized": false
        }
    },
  host: host,
  port: 5432,
});
