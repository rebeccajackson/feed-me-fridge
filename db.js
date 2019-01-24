const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getIng (db = connection){
    return db('ing').select()
}

module.exports = {
    getIng: getIng
// export the functions
}
// rename functions and make them work for our fridge
// function getUsers (db = connection) {
//   return db('users').select()
// }

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
