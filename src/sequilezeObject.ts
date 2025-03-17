import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const username = process.env.USERNAME ? process.env.USERNAME : "anusha";
const database = process.env.DATABASE ? process.env.DATABASE : "testing";
const password = process.env.PASSWORD ? process.env.PASSWORD : "anusha";
const host=process.env.HOST ? process.env.HOST:"localhost";
console.log('environment variables',username,database,password,host);
export const sequelize = new Sequelize(database,username,
  password,
 {
  dialect: "postgres",
  host: "demo-postgres-database.crkwm2mw0148.ap-south-1.rds.amazonaws.com",
  port:5432,
});
