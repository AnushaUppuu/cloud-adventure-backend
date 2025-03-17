
import { DataTypes } from "sequelize";
import { sequelize } from "../sequilezeObject";

export const Users=sequelize.define("User",{
 firstname:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 lastname:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 username:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
 },
 password:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 profilePicture:{
    type:DataTypes.STRING,
    allowNull:false
 }
})