var express = require('express'),
    router = express.Router(),
    saleController = require('../controllers/saleController'),
    access_users = require('../../middleware/access_users');


router.post('/sales', access_users.authentication, saleController.create);
router.get('/sales', access_users.authentication, saleController.readAll )
router.get('/sales/:id', access_users.authentication, saleController.read);
router.put('/sales/:id', access_users.authentication, saleController.update);
router.delete('/sales/:id', access_users.authentication, saleController.delete);

//endoint by QueryString
// ........
//...HERE..
///........
module.exports = router; 
