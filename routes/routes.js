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



router.post('/serch-ing', (req, res) => {
  var newIng = req.body
  db.findIng(newIng.id)
  .then((result) => {
    res.redirect('/option')
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
   db.addIng(rescipe)
     .then((result) => {
       res.render('/view')
     })
     .catch(err => {
       res.status(500).send('error')
     })
})

router.get('/view', (req,res) => {
  db.viewDish()
  .then(ingDish => {
    res.render('/view',Id )
  })
  .catch(err => {
    res.status(500).send('error')
  })
})

// router.get()


module.exports = router
