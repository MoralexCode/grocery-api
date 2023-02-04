"use strict";
/**
 * Star db with tables  and some data
 */
const conexion = require("../conexion/conexion");
const query1 = `CREATE TABLE IF NOT EXISTS  grocery_users (
      id int(11) NOT NULL AUTO_INCREMENT,
      name varchar(50) NOT NULL,
      surname varchar(75) NOT NULL,
      nickname varchar(20) DEFAULT NULL,
      email varchar(75) NOT NULL,
      password varchar(200) NOT NULL,
      confirmed tinyint NOT NULL DEFAULT '0',
      status tinyint(4) NOT NULL DEFAULT '1',
      enable tinyint(4) NOT NULL DEFAULT '1',
      createdAt datetime DEFAULT CURRENT_TIMESTAMP,
      updatedAt datetime DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    )  ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;
const query2 = `
    CREATE TABLE IF NOT EXISTS  grocery_products (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(50) NOT NULL,
      description varchar(250) DEFAULT NULL,
      price decimal(10,0) NOT NULL,
      stock int NOT NULL,
      expiration_date datetime NOT NULL,
      barcode varchar(100) NOT NULL,
      status tinyint NOT NULL DEFAULT '1',
      enable tinyint NOT NULL DEFAULT '1',
      createdAt datetime DEFAULT CURRENT_TIMESTAMP,
      updatedAt datetime DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`;

const query3 = `CREATE TABLE IF NOT EXISTS  grocery_sales (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(100) NOT NULL,
      price decimal(10,0) NOT NULL,
      quantity int NOT NULL,
      barcode varchar(100) NOT NULL,
      product_id int NOT NULL,
      status tinyint NOT NULL DEFAULT '1',
      enable tinyint NOT NULL DEFAULT '1',
      createdAt datetime DEFAULT CURRENT_TIMESTAMP,
      updatedAt datetime DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`;

const query4 = `INSERT INTO grocery_users  (name, surname, nickname, email, password,confirmed,status,enable)
    VALUES
     ('Oscar','Morales','MoralexCode','oscar@moralexcode.com',
     '01f87abdf40a282ebaacf87fc09a224e049b9c483c8639875023d1583bdc45a12815b11d95d3c70fe952de1fc6f0742d4dc507228ef69f3ff1ac385ab5dd4252',
     0,1,1)
    `;
async function initDB() {
  const exist = await tables_exist();
  if (!exist) await create_tables();
}
async function tables_exist() {
  const query = `show tables;`;
  const [tables] = await run(query);
  //   info("ra,", tables.length);
  if (tables.length > 0) return true;
  return false;
}
async function create_tables() {
  await run(query1);
  await run(query2);
  await run(query3);
  await run(query4);
}
async function run(query) {
  return await conexion.query(query, { raw: true });
}
module.exports = initDB;
