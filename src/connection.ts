import { sequelize } from "./sequilezeObject";
export  async function connection(){
      try {
        await sequelize.authenticate();
        console.log("Database connected");
      } catch (e) {
        throw new Error(`Database error, ${e}`);
      }
  
}