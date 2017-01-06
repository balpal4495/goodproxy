var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var parser = require('xml2json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
let url = 'https://www.goodreads.com/search.xml?key=PffdULAudc8ss8djUWWpdw&q=Ender%27s+Game';
/* GET home page. */
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
    console.log('data::', data);
    res.send(data);
  }
});



module.exports = router;
