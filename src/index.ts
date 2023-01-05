import express from 'express'
import { config } from 'dotenv'
import mongoose, { HydratedDocument } from 'mongoose'
import { IUser, User } from './models/User'

config()

const app: express.Express = express()
const port = process.env.PORT

const mongo_uri: string = `${process.env.MONGO_URI}`

app.get('/', async (req: express.Request, res: express.Response) => {
  const data= {
    name: 'Andrey',
    age: 21
  }

  await new User(data).save()
  User.find().then(data => {
    res.json(data)
  })
})

// app.use('/api', router)


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
