const http = require('http')
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = module.exports = express()
const server = http.createServer(app)
const port = parseInt(process.env.PORT || 4000)
const devMode = process.env.NODE_ENV !== 'production'
const mongo = require('./dbfunctions.js')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(devMode ? 'dev' : 'combined'))
app.use(cors({ origin: true }))


app.get('/user', (req, res) => {
  var name = req.query.name;
  mongo.findUser(name)
    .then(user => {
      res.send(user)
    })
})

app.get('/allusers', (req, res) => {
  mongo.findAllUsers()
    .then(users => {
      res.send(users)
    })
})


app.post('/user', (req, res) => {
  console.log('receiving data');
  console.log('body is ', req.body);
  mongo.createUser(req.body)
    .then(user => {
      console.log('created user')
      res.send(user)
    })
})

app.post('/facilities', (req, res) => {
  console.log('receiving data');
  console.log('body is ', req.body);
  mongo.addFacility(req.body)
    .then(facility => {
      console.log('created facility')
      res.send(facility)
    })
})

app.get('/facilities', (req, res) => {
  var id = req.query.id;
  mongo.getFacility(id)
    .then(facility => {
      console.log(facility)
      res.send(facility)
    })
})

app.get('/allfacilities', (req, res) => {
  mongo.getAllFacilities()
    .then(facilities => {
      res.send(facilities)
    })
})

app.post('/inventory', (req, res) => {
  console.log('receiving data');
  console.log('body is ', req.body);
  mongo.addItem(req.body)
    .then(item => {
      console.log('created item')
      res.send(item)
    })
})

app.delete('/inventory', (req, res) => {
  var itemId = req.query.id;
  mongo.removeItem(itemId)
    .then(res.send('removed'))
})

app.get('/inventory', (req, res) => {
  mongo.getAllItems()
    .then(inventory => {
      res.send(inventory)
    })
})

app.use(notFound)
app.use(errorHandler)

server.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));

function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important auto requests
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({ error: 'Url not found', status: 404, url })
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = devMode ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}
