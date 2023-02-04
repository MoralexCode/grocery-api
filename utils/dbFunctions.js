const Sequelize = require("sequelize");
const DB = {};

DB.findOne = async (model, id) => {
  return model.findOne({ where: { id, enable: 1 } }).then((data) => {
    return data;
  });
};
DB.findAll = async (model) => {
  return model
    .findAll({
      where: { enable: 1 },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    .then((data) => {
      return data;
    });
};
DB.findOneCustomQuery = async (model, query) => {
  return await collectorModel.sequelize
    .query(query, { type: Sequelize.QueryTypes.SELECT })
    .then((data) => {
      return data[0];
    });
};
DB.findAllCustomQuery = async (model, query) => {
  return await model.sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    .then((data) => {
      return data;
    });
};

DB.update = async (model, paylod, id) => {
  return await model
    .update(paylod, { where: { id } })
    .then(([rowAffected, rowsUpdate, data]) => {
      return rowAffected;
    });
};

DB.create = async (model, paylod) => {
  return await model.create(paylod).then((data) => {
    return data;
  });
};
DB.bulkCreate = async (model, paylod) => {
  return await model.bulkCreate(paylod).then((data) => {
    return data;
  });
};
//Change the status, (logic deleted)
DB.delete = async (model, id) => {
  return await model
    .update({ enable: 0 }, { where: { id } })
    .then(([rowAffected, rowsUpdate, data]) => {
      return rowAffected;
    });
};

DB.decrement = async (model, id, quantity) => {
  // Model.decrement(['field', '2'], { where: { id: model_id } });
  return await model
    .decrement({ stock: quantity }, { where: { id } })
    .then((data) => {
      return data;
    });
};
module.exports = DB;
