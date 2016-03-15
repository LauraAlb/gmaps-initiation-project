var express = require('express'),
  router = express.Router(),
  fs = require('fs');
// Api Routes
/* Middle ware */
router
  .use(function(req, res, next) {
    console.log('Something is happening.');
    next();
  });

/* Generic Root */
router
  .get('/', function(req, res) {
    res.json({
      message: 'Api running FTW'
    });
  });

module.exports = router;
