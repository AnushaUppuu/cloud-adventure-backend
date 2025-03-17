import express, { Request, Response } from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { Users } from "./schema/User";
import AWS from "aws-sdk";
// const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const s3 = new AWS.S3();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({ storage: storage });
export async function create(
  request: Request,
  response: Response
): Promise<any> {
  console.log(request.body);
  console.log(request.file);
  if (!request.body.username || !request.body.firstname || !request.file) {
    return response.send("All fields are required");
  }

  const params = {
    Bucket: "before-reseizing-cloud-adventure-bucket",
    Key: request.file.originalname,
    Body: fs.createReadStream(request.file.path),
  };

  s3.upload(params, (err: any, data: any) => {
    if (err) {
      console.error(err);
      return response.status(500).send("Error uploading file");
    }

    response.send("File uploaded successfully");
  });
//   const existedUser = await Users.findOne({
//     where: { username: request.body.username },
//   });
//   if (existedUser) {
//     return response.send("User already exist with this username");
//   }
  const val = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    username: request.body.username,
    password: request.body.password,
    profilePicture: request.file,
  };
//   await Users.create(val);
  return response.send("User created successfully");
}
export async function Check(
  request: Request,
  response: Response
): Promise<any> {
  response.send("Pong!!!!");
}
