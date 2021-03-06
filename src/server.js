var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

import { I, List } from 'immutable';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

var ravintoarvot = {
    ravintoarvot: [
        {
            id: 1,
            nimi: 'mössö',
            ainekset: ['Sokeri ', 'Suola ', 'Maksa ', 'Kala '],
            ravintoarvo: '500kcal',
            valmistus: 'Kamat pataan, keitto 20min ja valmis'
        },
        {
            id: 2,
            nimi: 'Olut',
            ainekset: ['Hiiva \t', 'Mallas \n', 'Vesi  ', 'Sokeri '],
            kalorit: '5000kcal',
            terveellisyysAste: '1'
        },
        {
            id: 3,
            nimi: 'Peruna',
            ainekset: ['Sokeri ', 'Suola ', 'Maksa ', 'Kala '],
            kalorit: '1000kcal',
            terveellisyysAste: '1'
        },
        {
            id: 4,
            nimi: 'Kala',
            ainekset: ['Sokeri ', 'Suola ', 'Maksa ', 'Kala '],
            kalorit: '2000kcal',
            terveellisyysAste: '2'
        },
        {
            id: 5,
            nimi: 'Maksa',
            ainekset: ['Sokeri ', 'Suola ', 'Maksa ', 'Kala '],
            kalorit: '230kcal',
            terveellisyysAste: '4'
        },
        {
            id: 6,
            nimi: 'Suola',
            ainekset: ['Sokeri ', 'Suola ', 'Maksa ', 'Kala '],
            kalorit: '30kcal',
            terveellisyysAste: '2'
        },
        {
            id: 7,
            nimi: 'Vehnäjauho',
            ainekset: ['Sokeri ', 'Suola ', 'Maksa ', 'Kala '],
            kalorit: '50kcal',
            terveellisyysAste: '1'
        }
    ]
};

app.get('/api/ravintoarvot', function(req, res, next) {
    res.send(ravintoarvot);
});


app.get('/api/ravintoarvot/:id', function(req, res, next) {
    console.log(req.params.id);


    res.send(
        List(ravintoarvot.ravintoarvot)
            .filter((r) => r.id == req.params.id)
            .first()
    );
});

app.post('/api/resepti', function(req, res, next) {
    nimet.push(req.params.nimi);
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


