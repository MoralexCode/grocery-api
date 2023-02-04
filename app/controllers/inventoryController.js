const inventoryModel = require('../Models/inventoryModel'),
    inventoryController = {},
    DB = require('../../utils/dbFunctions'),
Util = require('../../utils/util');
const controllerName = 'inventoryController';
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|CREATE NEW inventory                                                                |
//|                                                                             |
//+-----------------------------------------------------------------------------+
inventoryController.create = async (req, res) => {
    let paylod = req.body;
    try {
        const data = await DB.create(inventoryModel , paylod);
        Util.dataValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|FIND  inventory BY ID                                                          |
//|                                                                             |
//+-----------------------------------------------------------------------------+
inventoryController.read = async (req, res) => {
    try {
        const { id } = req.params;
        if (Util.integerIDValidation(res, id, controllerName)) {
            const data = await DB.findOne(inventoryModel, id);
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
//|GET LIST OF inventory CUSTOM QUERY                                            |
//|                                                                             |
//+-----------------------------------------------------------------------------+
inventoryController.readAll = async (req, res) => {
    try {
        const data = await DB.findAll(inventoryModel)
        Util.dataValidation(res, data, controllerName)
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|UPDATE   inventory  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
inventoryController.update = async (req, res) => {
    const { id } = req.params;
    const paylod = req.body;
    try {
        const data = await DB.update( inventoryModel, paylod, id);
        Util.updateValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|DELETE   inventory  BY ID                                                      |
//|                                                                             |
//+-----------------------------------------------------------------------------+
inventoryController.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await DB.delete(inventoryModel, id);
        Util.deleteValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
module.exports = inventoryController; 
