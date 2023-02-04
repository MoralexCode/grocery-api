const saleModel = require("../Models/saleModel"),
  saleController = {},
  DB = require("../../utils/dbFunctions"),
  Util = require("../../utils/util");
const controllerName = "saleController";
const productModel = require("../Models/productModel");
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|CREATE NEW sale                                                                |
//|                                                                             |
//+-----------------------------------------------------------------------------+
saleController.create = async (req, res) => {
  let paylod = req.body;
  let data = [];
  try {
    for (let index = 0; index < paylod.length; index++) {
      const product = paylod[index];
      const decrement = await DB.decrement(
        productModel,
        product.product_id,
        product.quantity
      );
      console.log("decrement|", decrement);
      data.push(await DB.create(saleModel, product));
    }
    Util.dataValidation(res, data, controllerName);
  } catch (error) {
    log(controllerName, Util.readMessage(controllerName, error));
    sendError(res, error, Util.readMessage(controllerName, error));
  }
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|FIND  sale BY ID                                                          |
//|                                                                             |
//+-----------------------------------------------------------------------------+
saleController.read = async (req, res) => {
  try {
    const { id } = req.params;
    if (Util.integerIDValidation(res, id, controllerName)) {
      const data = await DB.findOne(saleModel, id);
      Util.dataValidation(res, data, controllerName);
    }
  } catch (error) {
    log(controllerName, Util.readMessage(controllerName, error));
    sendError(res, error, Util.readMessage(controllerName, error));
  }
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|GET LIST OF sale CUSTOM QUERY                                            |
//|                                                                             |
//+-----------------------------------------------------------------------------+
saleController.readAll = async (req, res) => {
  try {
    const data = await DB.findAll(saleModel);
    Util.dataValidation(res, data, controllerName);
  } catch (error) {
    log(controllerName, Util.readMessage(controllerName, error));
    sendError(res, error, Util.readMessage(controllerName, error));
  }
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|UPDATE   sale  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
saleController.update = async (req, res) => {
  const { id } = req.params;
  const paylod = req.body;
  try {
    const data = await DB.update(saleModel, paylod, id);
    Util.updateValidation(res, data, controllerName);
  } catch (error) {
    log(controllerName, Util.readMessage(controllerName, error));
    sendError(res, error, Util.readMessage(controllerName, error));
  }
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|DELETE   sale  BY ID                                                      |
//|                                                                             |
//+-----------------------------------------------------------------------------+
saleController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await DB.delete(saleModel, id);
    Util.deleteValidation(res, data, controllerName);
  } catch (error) {
    log(controllerName, Util.readMessage(controllerName, error));
    sendError(res, error, Util.readMessage(controllerName, error));
  }
};
module.exports = saleController;
