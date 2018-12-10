const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const queries = require('./queries')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => {
    queries.listAll().then(movies => res.send(movies))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))