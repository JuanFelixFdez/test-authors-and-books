const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).json({
    message: 'GET for authors response'
}))

module.exports = app