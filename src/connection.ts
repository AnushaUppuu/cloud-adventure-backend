import { sequelize } from "./sequilezeObject";
export  async function connection(){
      const username = process.env.USERNAME;
      const database = process.env.DATABASE;
      const password = process.env.PASSWORD;
      if (!username || !database || !password) {
        throw new Error("URL is missing");
      }
      try {
        await sequelize.authenticate();
        console.log("Database connected");
      } catch (e) {
        throw new Error(`Database error, ${e}`);
      }
  
}