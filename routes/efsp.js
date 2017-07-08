var express = require('express');
var router = express.Router();


var caseCategoryDummyOptions = {"Class Action - Under $10,000": "Class Action - Under $10,000"}
caseCategoryDummyOptions["Class Action - Unlimited"] = "Class Action - Unlimited"
caseCategoryDummyOptions["Collections (Other) - Between $10,000 and $25,000"] = "Collections (Other) - Between $10,000 and $25,000"

var caseTypeDummyOptions = {"Civil": "Civil"}
caseTypeDummyOptions["Other"] = "Other"

var courthouseDummyOptions = [{name: "Alhambra Courthouse"},{name:"Burbank Courthouse"},{name:"Central Civil West"},{name:"Chatsworth Courthouse"},{name:"Downey Courthouse"},{name:"Governer Courthouse"},{name:"Capital Courthouse"}]

router.get('/case/courthouse', function(req, res, next) {
  res.send(courthouseDummyOptions);
});

router.get('/case/type', function(req, res, next) {
  res.send(caseTypeDummyOptions);
});

router.get('/case/category', function(req, res, next) {
  res.send(caseCategoryDummyOptions);
});

router.get('/case', function(req, res, next) {
  res.send('Choose parameters: /courthouse /type /category');
});

router.get('/', function(req, res, next) {
  res.send('Choose parameters: /case');
});

module.exports = router;
