const express = require('express')
const app = express()
const port = 3000

const books = require('./routes/books')
const authors = require('./routes/authors')

app.use('/authors', authors)
app.use('/books', books)

app.get("/*", (req, res) => res.status(404).json({
    message: 'Unexistant route'
}))

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

module.exports = app