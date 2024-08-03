const express = require('express')
const app = express()

// import 'dotenv/config'         SyntaxError: Cannot use import statement outside a module
require('dotenv').config()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
  res.send('<h1>Testing for the Twitter</h1>')
})

app.get('/login', (req,res) => {
  res.send("<h2>Please! Login your account</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
