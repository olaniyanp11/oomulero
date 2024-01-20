import express from "express";
import dotenv from "dotenv"
dotenv.config()
import userRoute from "./routes/user.js"
// inirialise app variable
const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use("/user",userRoute)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`server started at port http://localhost:${port}`);
})
