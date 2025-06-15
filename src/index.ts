import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT =  process.env.PORT || 3000;


app.get("/", (request: Request, response: Response, next: NextFunction)=>{
  response.status(200).json({ message: "Running Successfully" })
})


app.listen(PORT, async ()=>{
  console.log(`Server is running on port ${PORT}`)
})