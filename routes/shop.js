const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>This is home page.</h1><a href="/product">Add</a>')
})

module.exports = router
