var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const request = require('request');
projectData = {};
dotenv.config();

const app = express()

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/getdata', function (req, res) {
  projectData = req.body;
  const key = process.env.API_KEY
  const urlParts = {
    'firstPart': 'https://api.meaningcloud.com/sentiment-2.1?key=',
    'secondPart': '&of=json&lang=en&txt='
  }
  const fullUrl = urlParts.firstPart + key + urlParts.secondPart + projectData.input;
  request(fullUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body) // Show the HTML for the Google homepage.
    }
  });
})
