const express = require('express')
require('dotenv').config()
const colors = require('./routes/colors')
const port = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/colors', colors)

app.listen(port, () => {
    console.log('app listening at port ' + port)
})
