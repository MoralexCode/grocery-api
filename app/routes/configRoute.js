var express = require('express'),
    router = express.Router(),
    configController = require('../controllers/configController'),
    access_users = require('../../middleware/access_users');


router.post('/configs', access_users.authentication, configController.create);
router.get('/configs', access_users.authentication, configController.readAll )
router.get('/configs/:id', access_users.authentication, configController.read);
router.put('/configs/:id', access_users.authentication, configController.update);
router.delete('/configs/:id', access_users.authentication, configController.delete);

//endoint by QueryString
// ........
//...HERE..
///........
module.exports = router; 
