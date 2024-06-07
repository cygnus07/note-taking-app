import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./db/index.js"

dotenv.config();
const app=express();

const port=process.env.PORT || 4000;

connectDb();
// middlewares
app.use(cors());
app.use(express.json()); // to parse json requests


app.get('/', (req,res) => {
    res.send("Note-taking app is running ")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


