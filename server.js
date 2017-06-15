var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var cors = require('cors')
var config = require('./config')
var profileCtrl = require('./controllers/profileCtrl')
var userCtrl = require('./controllers/userCtrl')
var app = express()


app.use(cors(corsOptions))
app.use(session({secret: config.sessionSecret}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))


var corsOptions = {
	origin: 'http://localhost:3000'
};

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)

app.listen(3000, function(){
  console.log("I am listening on port 3000")
})
