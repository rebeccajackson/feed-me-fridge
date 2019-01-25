const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/option/:id', (req,res) => {
  var id = req.params.id
  console.log('params ', id)
  db.showRecipe(id)
    .then((result) => {
      res.render('view', result)
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

router.post('/:id', (req, res) => {
  var id = req.body.id
  var name = req.body.name
  db.viewDish(id, name)
  .then((result) => {
    res.redirect('/option', result)
  })
   .catch(err => {
     res.status(500).send('error')
   })
})


router.post('/option', (req, res) => {
  var id = req.body.id
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
