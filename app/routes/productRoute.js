var express = require('express'),
    router = express.Router(),
    productController = require('../controllers/productController'),
    access_users = require('../../middleware/access_users');


router.post('/products', access_users.authentication, productController.create);
router.get('/products', access_users.authentication, productController.readAll )
router.get('/products/:id', access_users.authentication, productController.read);
router.put('/products/:id', access_users.authentication, productController.update);
router.delete('/products/:id', access_users.authentication, productController.delete);

//endoint by QueryString
// ........
//...HERE..
///........
module.exports = router; 
