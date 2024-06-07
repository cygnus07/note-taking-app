import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDb =  async () => {
    try {
         await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDb connected`)
    } catch (error) {
        console.log("Mongodb connection error", error)
        process.exit(1);
    }
}

export default connectDb