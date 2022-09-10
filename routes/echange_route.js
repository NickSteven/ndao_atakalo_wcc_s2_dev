const router = require('express').Router();

const echangeController = require('../controllers/echange_controller')

router.post('/', echangeController.creerEchange)

module.exports = router;
