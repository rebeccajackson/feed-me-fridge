const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/',(req, res) => {
  res.render('home')
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

router.get('/option', (req, res) => {
  res.render('option')
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
  db.viewDish()
  .then(ingDish => {
    res.render('/view',id )
  })
  .catch(err => {
    res.status(500).send('error')
  })
})

// router.get()


module.exports = router
