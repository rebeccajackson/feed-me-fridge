const express = require('express')

const db = require('../db')

const router = express.Router()

// example
// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/',(req, res) => {
  res.render('home')
})



router.post('/search-ing', (req, res) => {
  var ing = req.body.name
  db.findIng(ing)
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



module.exports = router
