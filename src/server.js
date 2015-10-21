var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

var ravintoarvot = {
    ravintoarvot: [
        {
            id: 1,
            nimi: 'Sokeri',
            kalorit: '500kcal',
            terveellisyysAste: '-1000'
        },
        {
            id: 2,
            nimi: 'Olut',
            kalorit: '5000kcal',
            terveellisyysAste: '1'
        },
        {
            id: 3,
            nimi: 'Peruna',
            kalorit: '1000kcal',
            terveellisyysAste: '1'
        },
        {
            id: 4,
            nimi: 'Kala',
            kalorit: '2000kcal',
            terveellisyysAste: '2'
        },
        {
            id: 5,
            nimi: 'Maksa',
            kalorit: '230kcal',
            terveellisyysAste: '4'
        }
        {
            id: 6,
            nimi: 'Suola',
            kalorit: '30kcal',
            terveellisyysAste: '2'
        }
        {
            id: 7,
            nimi: 'Vehnäjauho',
            kalorit: '50kcal',
            terveellisyysAste: '1'
        }
    ]
};

app.get('/api/ravintoarvot', function(req, res, next) {
    res.send(ravintoarvot);
});


app.get('/api/ravintoarvot/:id', function(req, res, next) {
    res.send(ravintoarvot[req.params.id]); // TOOD: Tämä ei vielä täysin toimi.
});

app.get('/api/tussi', function(req, res, next) {

    res.send([
        'Arto',
        'Tero',
        'Jylppy',

    ]);

});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});


