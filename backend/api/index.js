const router = require('express').Router();
const cards = require('./cards');

router.use('/api', cards);

module.exports = router;