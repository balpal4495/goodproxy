var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var parser = require('xml2json');
var bookCtrl = require('./books');

const key = 'PffdULAudc8ss8djUWWpdw';
const BASEURL = `https://www.goodreads.com/`;



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.route('/book').get(bookCtrl.getBook);
router.route('/book/:book').get(bookCtrl.getBookByName);



module.exports = router;
