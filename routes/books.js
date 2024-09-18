const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).json({
    message: 'GET for books response'
}))

module.exports = app