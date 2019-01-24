const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/',(req, res) => {
  
  db.showIng()
  .then(ing =>{
    res.render('home' ,{ing})
  })
})

router.post('/search-ing', (req, res) => {
  var id = req.body.id
  var name = req.body.name
  db.findIng(id, name)
  .then((result) => {
    res.redirect('/option', result)
  })
   .catch(err => {
     res.status(500).send('error')
   })
})

router.get('/option/:id', (req, res) => {
  var id= req.params.id
  db.viewDish(id)
  .then((dish) =>{
    console.log(dish)
    res.render('option', {dish})
  })
})

router.post('/option', (req,res) => {
   var recipe = req.body
   db.addIng(recipe)
     .then((result) => {
       res.render('/view')
     })
     .catch(err => {
       res.status(500).send('error')
     })
})

router.get('/view/:id', (req,res) => {
  //needs id from req.body
  db.showRecipe()
  .then(ingDish => {
    res.render('/view',id )
  })
  .catch(err => {
    res.status(500).send('error')
  })
})

// router.get()


module.exports = router
