import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./db/index.js"
import noteRoutes from "./routes/noteRoutes.js"



dotenv.config();
const app=express();

const port=process.env.PORT || 4000;

connectDb();
app.use(express.json()); // to parse json requests
app.use(cors());

app.use('/api/notes', noteRoutes);
// middlewares





app.get('/', (req,res) => {
    res.send("Note-taking app is running ")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


