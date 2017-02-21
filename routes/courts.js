var express = require('express');
var router = express.Router();


var caseCategoryDummyOptions = {'': ''}
caseCategoryDummyOptions["Class Action - Under $10,000"] = "Class Action - Under $10,000"
caseCategoryDummyOptions["Class Action - Unlimited"] = "Class Action - Unlimited"
caseCategoryDummyOptions["Collections (Other) - Between $10,000 and $25,000"] = "Collections (Other) - Between $10,000 and $25,000"

var caseTypeDummyOptions = {'': ''}
caseTypeDummyOptions["Civil"] = "Civil"

var courthouseDummyOptions = {'': ''}
courthouseDummyOptions["Alhambra Courthouse"] = "Alhambra Courthouse"
courthouseDummyOptions["Burbank Courthouse"] = "Burbank Courthouse"
courthouseDummyOptions["Central Civil West"] = "Central Civil West"
courthouseDummyOptions["Chatsworth Courthouse"] = "Chatsworth Courthouse"
courthouseDummyOptions["Downey Courthouse"] = "Downey Courthouse"
courthouseDummyOptions["Governer Courthouse"] = "Governer Courthouse"

/* GET users listing. */
router.get('/courthouse', function(req, res, next) {
  res.send(courthouseDummyOptions);
});

router.get('/casetype', function(req, res, next) {
  res.send(caseTypeDummyOptions);
});

router.get('/casecategory', function(req, res, next) {
  res.send(caseCategoryDummyOptions);
});

module.exports = router;
