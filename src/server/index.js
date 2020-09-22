var path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');

dotenv.config();
const key = {
  'apiKey': process.env.API_KEY
}


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
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(key.apiKey)

})

app.get('/getkey', function (req, res) {
    res.send(key)
})
