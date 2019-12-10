var router = require('express').Router();

router.use('/ports', require('./ports'));

module.exports = router;
