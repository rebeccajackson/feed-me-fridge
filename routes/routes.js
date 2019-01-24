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
  db.finIng(newIng.id)
  .then((result) => {
    res.redirect('/option')
  })
   .catch(err => {
     res.status(500).send('error')
   })
})
git 

module.exports = router
