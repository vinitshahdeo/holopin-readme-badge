const express = require('express'),
  router = express.Router(),
  holopin = require('../services/holopin');

router.get('/:id', function (req, res, next) {
  const username = req.params.id, // holopin username
    style = req.query.style,
    static = req.query.static,
    generateBadge = static ? holopin.generateStaticBadge : holopin.generateBadge;

  generateBadge(username, style)
    .then((badge) => {
      res.setHeader('content-type', 'image/svg+xml;charset=utf-8');
      res.send(badge);
    })
    .catch(console.log);
});

// defaults to badge for https://holopin.io/@vinitshahdeo
router.get('/', function (req, res, next) {
  holopin
    .generateBadge()
    .then((badge) => {
      res.setHeader('content-type', 'image/svg+xml;charset=utf-8');
      res.send(badge);
    })
    .catch(console.log);
});

module.exports = router;