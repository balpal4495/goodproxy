var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var parser = require('xml2json');

const key = 'PffdULAudc8ss8djUWWpdw';
const BASEURL = `https://www.goodreads.com/`;
// dummy search url for now, needs to be improved
let url = `${BASEURL}search.xml?key=${key}&q=Ender%27s+Game`;

module.exports = {
    getBook: function(req, res){
       return getBook()
             .then(_returnSuccess);
       function getBook() {
         return fetch(url)
          .then(function(res) {
              return res.text();
          }).then(function(body) {
              var json = parser.toJson(body);
              return Promise.resolve(json);
          });
       }
       function _returnSuccess(data) {
         res.send(data);
       }
    },
    getBookByName: function(req, res) {
        const book = req.params.book;
        const namedUrl = `${BASEURL}search.xml?key=${key}&q=${book}`;
        return getBook()
               .then(_returnSuccess);

        function getBook() { 
            return fetch(namedUrl)
          .then(function(res) {
              return res.text();
          }).then(function(body) {
              const json = parser.toJson(body);
              return Promise.resolve(json);
          });
        };

        function _returnSuccess(bookData) {
            const sendData = JSON.parse(bookData);
            res.json(sendData);
        }
    }
}

// module.exports = router;
