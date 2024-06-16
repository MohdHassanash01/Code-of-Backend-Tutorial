import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))  // jab data form se aaye
app.use(express.urlencoded({extended:true,limit:'16kb'}))  // jab data url se aaye

app.use(express.static("public")) // images vedio public me store kar sakte hai  

app.use(cookieParser())



// // routes 

import userRouter from './routes/user.routes.js'

// // routes declaration  

// app.use("/users",userRouter)
app.use("/api/v1/users",userRouter)


export {app}