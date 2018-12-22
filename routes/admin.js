const express = require('express')
const router = express.Router()

router.get('/product', (req, res) => {
    res.send('<form method="POST" action="/add-product"><input type="text" name="title" placeholder="Enter title"><button type="submit">Add</button></form>')
})

router.post('/add-product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router