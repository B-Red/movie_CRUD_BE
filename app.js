const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const queries = require('./queries')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// app.get('/', (req, res) => res.send('Hello World!'))
//shows all movies
app.get('/', (req, res) => {
    queries.listAll().then(movies => res.send(movies))
})
//shows a movie by Id
app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(movies => res.send(movies))
})
//creates a new movie
app.post('/', (req, res) => {
    queries.createMovie(req.body).then(movies => res.send(movies))
})
//removes movie
app.delete('/:id', (req, res) => {
    queries.deleteMovie(req.params.id).then(res.sendStatus(204))
})
//edits a movie
app.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(data => res.json(data[0]))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))