import express from 'express'
const app=express();
import {connection} from './connection'; 
async function main () {
    connection();
    app.listen("4000",()=>{
        console.log("Server is running on the port 4000");
    })
}
main();