import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json())


app.get("/", (request: Request, response: Response, next: NextFunction)=>{
  response.status(200).json({ message: "Running Successfully" })
})


app.post("/", (request: Request, response: Response, next: NextFunction)=>{
  const { name, age } = request.body;

  console.log("Name: ", name)
  console.log("Age: ", age)

  response.status(200).json({ message: "Posted Successfully" })
})

app.listen(PORT, async ()=>{
  console.log(`Server is running on port ${PORT}`)
})