require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT

const app = express()
mongoose.connect(process.env.MONGO_URL);

const Cat = mongoose.model('Cat', { name: String })

const start = async () => {
  app.get('/', (req, res) => {
    const kitty = new Cat({ name: 'MarkMain' })

    kitty.save().then(() => {
      Cat.find().then(data => res.send('data'))
    })
  })

  app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`))
}

start().then()