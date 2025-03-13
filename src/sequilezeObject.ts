import { Sequelize } from "sequelize";
const username = process.env.USERNAME ? process.env.USERNAME : "anusha";
const database = process.env.DATABASE ? process.env.DATABASE : "testing";
const password = process.env.PASSWORD ? process.env.PASSWORD : "anusha";
export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: username,
  password: password,
  database: database,
});
