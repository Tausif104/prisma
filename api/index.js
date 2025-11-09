import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoute from './routes/user.route.js'
import productRoute from './routes/product.route.js'

dotenv.config()
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ msg: 'API is Running' })
})

app.use('/api/users', userRoute)
app.use('/api/products', productRoute)

app.listen(3001, () => {
  console.log('Server is runing')
})
