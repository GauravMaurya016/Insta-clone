import express from 'express'
const app = express()
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
mongoose.connect("mongodb+srv://Gaurav:loveyou3000@cluster0.ldl25.mongodb.net/login");
import Order from "./models/order.js"
const port = 3000
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', async(req, res) => {
    console.log(req.body)
    const a = req.body.username
    const b = req.body.password
    const data = await Order.create(
        {
            email:a,
            password:b
        }
    )
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
