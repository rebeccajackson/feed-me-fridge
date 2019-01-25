const express = require('express')

const db = require('../db')

const router = express.Router()

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


router.post('/home', (req, res) => {
  var id = req.body
  console.log('post ', id)
  db.viewDish(id)
    .then((result) => {
      console.log(result)
      res.render('option', result)
    })
    .catch(err => {
      res.status(500).send('error')
    })
})



router.post('/option/:id', (req,res) => {
   var id = req.body.id
   db.viewDish(id)
     .then((result) => {
       res.render('/view', result)
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



module.exports = router
