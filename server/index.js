import mongoose from "mongoose";
import cors from "cors"
import express, { json } from "express";
import UserRouter from "./routes/AllRoutes.js"
import User from "./model/User.js";



const app = express()
app.use(express.json())
app.use(cors())


const PORT = 9000

app.listen(PORT, () => {
  console.log("server is running")
})

app.get("/", (req, res) => {
  res.send("hello form server")
})

const DB_URL = "mongodb+srv://MREN:MREN@cluster0.jzydmfw.mongodb.net/protfoilo_data?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((data) => {
  console.log(`mongoDB conected ${data.connection.host}`)
}).catch(Error => {
  console.log(Error)
})


app.use(express.static("public/upload"))
app.use("/api/v1", UserRouter)

const deleteUser = async ()=>{
  try {
    await User.findByIdAndDelete("63be612e0cdcf4904a6ffcef")
  } catch (error) {
    console.log(error)
  }
}
// deleteUser()