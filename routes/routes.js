const express = require('express');
const DeathController = require('../controllers/deathController');
const router = express.Router();

router.get('/deaths', DeathController.deathCount);

module.exports = router;
