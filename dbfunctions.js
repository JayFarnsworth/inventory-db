const monk = require('monk')

// Connection URL
const url = 'lmongodb://@ds235461.mlab.com:35461/heroku_s2sn9c54';

const db = monk(url);

db.then(() => {
  console.log('Connected correctly to server')
})

const users = db.get('users');

function createUser(user) {
  return users.insert({
    "name": user.name,
    "school": user.school,
    "email": user.email
  })
}

function findUser(name) {
  return users.find({
    "name": name
  })
}

module.exports = {
  _db: db,
  createUser,
  findUser
} 