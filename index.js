require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/',(req,res)=>{
   res.send('server is running...')
})

app.listen(3000)
console.log('server is running...')