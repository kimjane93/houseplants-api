var express = require('express');
var router = express.Router();
const houseplantsCtrl = require('../controllers/api/houseplants')

/* GET users listing. */
router.get('/houseplants', houseplantsCtrl.index)
router.get('/houseplants/:id', houseplantsCtrl.show)
router.post('/houseplants', houseplantsCtrl.create)
router.put('/houseplants/:id', houseplantsCtrl.update)
router.delete('/houseplants/:id', houseplantsCtrl.delete)

module.exports = router;
