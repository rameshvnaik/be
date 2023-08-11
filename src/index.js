const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3005;

// Configuring body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const dirName = path.dirname("");
const buildPath = path.join(dirName, '../fe/build');
// Have Node serve the files for our built React app
app.use(express.static(buildPath));

// All other GET requestsnot handled before will return our React app
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../fe/build/index.html'),function (err){
    if(err){
      res.status(500).send(err);
    }
  }
  );
});

// app.get('/weatherInfo', (req, res) => {
//     const weatherURl = `https://api.weatherapi.com/v1/current.json?key=b5939380155d40e892570523231008&q=${req.query.place}&aqi=no`;
//     fetch(weatherURl).then(res => res.json()).then(result => res.send(result)).catch(err => res.send(err))
// });

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));