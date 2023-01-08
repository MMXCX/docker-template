import express from 'express'
import { config } from 'dotenv'
config()
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './router'
import errorMiddleware from './middlewares/error-middleware'

const app = express()
const port = process.env.PORT
const mongo_uri = String(process.env.MONGO_URI)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

app.get('/', (req, res) => res.send('Привет антон!!'))

const start = async () => {
  try {
    await mongoose.connect(mongo_uri)
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
    })
  } catch (e: any) {
    console.log(e.message)
  }
}

start().then()
