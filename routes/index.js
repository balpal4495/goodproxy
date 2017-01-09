var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var parser = require('xml2json');

// const BASEURL = 'https://www.goodreads.com/search.xml?key=PffdULAudc8ss8djUWWpdw&q='

const key = 'PffdULAudc8ss8djUWWpdw';
// const BASEURL = `https://www.goodreads.com/search.xml?key=${key}&q=Ender%27s+Game`;
const BASEURL = `https://www.goodreads.com/`;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// dummy search url for now, needs to be improved
let url = `${BASEURL}search.xml?key=${key}&q=Ender%27s+Game`;

router.get('/book', function(req, res) {
  return getBook()
        .then(_returnSuccess);
  function getBook() {
    return fetch(url)
     .then(function(res) {
         return res.text();
     }).then(function(body) {
         var json = parser.toJson(body);
        //  console.log('json', json);
         return Promise.resolve(json);
     });
  }
  function _returnSuccess(data) {
    res.send(data);
  }
});



module.exports = router;
