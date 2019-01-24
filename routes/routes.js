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
  
  db.showIng()
  .then(ing =>{
    res.render('home' ,{ing})
  })
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

router.get('/option/:id', (req, res) => {
  var id= req.params.id
  db.viewDish(id)
  .then(() =>{
    console.log(id)
    res.render('option', id)
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
