const configModel = require('../Models/configModel'),
    configController = {},
    DB = require('../../utils/dbFunctions'),
Util = require('../../utils/util');
const controllerName = 'configController';
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|CREATE NEW config                                                                |
//|                                                                             |
//+-----------------------------------------------------------------------------+
configController.create = async (req, res) => {
    let paylod = req.body;
    try {
        const data = await DB.create(configModel , paylod);
        Util.dataValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|FIND  config BY ID                                                          |
//|                                                                             |
//+-----------------------------------------------------------------------------+
configController.read = async (req, res) => {
    try {
        const { id } = req.params;
        if (Util.integerIDValidation(res, id, controllerName)) {
            const data = await DB.findOne(configModel, id);
            Util.dataValidation(res, data, controllerName);
        }
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|GET LIST OF config CUSTOM QUERY                                            |
//|                                                                             |
//+-----------------------------------------------------------------------------+
configController.readAll = async (req, res) => {
    try {
        const data = await DB.findAll(configModel)
        Util.dataValidation(res, data, controllerName)
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|UPDATE   config  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
configController.update = async (req, res) => {
    const { id } = req.params;
    const paylod = req.body;
    try {
        const data = await DB.update( configModel, paylod, id);
        Util.updateValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|DELETE   config  BY ID                                                      |
//|                                                                             |
//+-----------------------------------------------------------------------------+
configController.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await DB.delete(configModel, id);
        Util.deleteValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
module.exports = configController; 
