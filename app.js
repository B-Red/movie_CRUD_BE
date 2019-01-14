const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(cors())

//shows all movies
app.get('/', (req, res) => {
    queries.listAll().then(movies => res.json(movies))
})
//shows a movie by Id
app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(movies => res.json(movies))
})
//creates a new movie
app.post('/', (req, res) => {
    queries.createMovie(req.body).then(movies => res.json(movies))
})
//removes movie
app.delete('/:id', (req, res) => {
    queries.deleteMovie(req.params.id).then(res.status(204).send('Yeah that movie sucked anyway.'))
})
//edits a movie
app.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(data => res.json(data))
})
//error handlers
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))