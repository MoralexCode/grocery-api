const productModel = require('../Models/productModel'),
    productController = {},
    DB = require('../../utils/dbFunctions'),
Util = require('../../utils/util');
const controllerName = 'productController';
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|CREATE NEW product                                                                |
//|                                                                             |
//+-----------------------------------------------------------------------------+
productController.create = async (req, res) => {
    let paylod = req.body;
    try {
        const data = await DB.create(productModel , paylod);
        Util.dataValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|FIND  product BY ID                                                          |
//|                                                                             |
//+-----------------------------------------------------------------------------+
productController.read = async (req, res) => {
    try {
        const { id } = req.params;
        if (Util.integerIDValidation(res, id, controllerName)) {
            const data = await DB.findOne(productModel, id);
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
//|GET LIST OF product CUSTOM QUERY                                            |
//|                                                                             |
//+-----------------------------------------------------------------------------+
productController.readAll = async (req, res) => {
    try {
        const data = await DB.findAll(productModel)
        Util.dataValidation(res, data, controllerName)
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|UPDATE   product  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
productController.update = async (req, res) => {
    const { id } = req.params;
    const paylod = req.body;
    try {
        const data = await DB.update( productModel, paylod, id);
        Util.updateValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|DELETE   product  BY ID                                                      |
//|                                                                             |
//+-----------------------------------------------------------------------------+
productController.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await DB.delete(productModel, id);
        Util.deleteValidation(res, data, controllerName);
    } catch (error) {
        log(controllerName, Util.readMessage(controllerName, error));
        sendError(res, error, Util.readMessage(controllerName, error));
    }
}
module.exports = productController; 
