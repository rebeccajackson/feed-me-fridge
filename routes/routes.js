const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/option/:id', (req,res) => {
  var id = req.params.id
  console.log('params ', id)
  db.showRecipe(id)
    .then((result) => {
      console.log(result)
      res.render('view', {result})
    })
    .catch(err => {
      res.status(500).send('error')
    })
})

router.get('/',(req, res) => {
  db.showIng()
  .then(ing =>{
    res.render('home', {ing})
  })
})


router.post('/option', (req, res) => {
  var id = req.body.id
  console.log(req.body)
  db.viewDish(id)
    .then(options => {
      console.log(options)
      res.render('option', {options})
    })
    .catch(err => {
      res.status(500).send('error')
    })
})






module.exports = router
