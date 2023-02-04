var express = require('express'),
    router = express.Router(),
    inventoryController = require('../controllers/inventoryController'),
    access_users = require('../../middleware/access_users');


router.post('/inventorys', access_users.authentication, inventoryController.create);
router.get('/inventorys', access_users.authentication, inventoryController.readAll )
router.get('/inventorys/:id', access_users.authentication, inventoryController.read);
router.put('/inventorys/:id', access_users.authentication, inventoryController.update);
router.delete('/inventorys/:id', access_users.authentication, inventoryController.delete);

//endoint by QueryString
// ........
//...HERE..
///........
module.exports = router; 
