
require('dotenv').config();
const express = require('express');
const connectToDB  = require('./app.js')

const app = express()
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/home', (req, res) => {
    res.send('POST request to the homepage')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})