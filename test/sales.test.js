const supertest = require("supertest");
const assert = require("assert");
const { app, server } = require("../grocery");
const api = supertest(app);
const { credentials, contentType } = require("./helper");
const auth = {};
let sale = [
  {
    name: "Nutrileche",
    product_id: 57,
    quantity: 1,
    price: 25.6,
    barcode: "1234567890",
  },
  {
    name: "Nutrileche 2l",
    product_id: 58,
    quantity: 2,
    price: 40.5,
    barcode: "1234567809",
  },
  {
    name: "Nutrileche 3l",
    product_id: 59,
    quantity: 1,
    price: 50.6,
    barcode: "1234567809",
  },
];
//login to get auth token
beforeEach(async () => {
  await api
    .post("/api/v1/login")
    .send(credentials)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      auth.token = response.body.data.token;
      //   assert(response.body.data.mensaje, "Correct authentication");
    });
});

test("Create a new Sale", async () => {
  await api
    .post("/api/v1/sales")
    .set("Authorization", auth.token)
    .send(sale)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data[0].name, sale[0].name);
      assert(response.body.data[0].barcode, sale[0].barcode);
      sale = response.body.data;
    });
});

test("Get a sale", async () => {
  await api
    .get("/api/v1/sales/" + sale[0].id)
    .set("Authorization", auth.token)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data.name, sale.name);
      assert(response.body.data.barcode, sale.barcode);
    });
});

test("Update a Sale", async () => {
  await api
    .put("/api/v1/sales/" + sale[0].id)
    .set("Authorization", auth.token)
    .send({ name: "Nutrileche 3L" })
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data, "The update was successfully.");
    });
});

test("Delete a Sale", async () => {
  const sale = [
    {
      name: "Nutrileche",
      product_id: 57,
      quantity: 1,
      price: 25.6,
      barcode: "1234567890",
    },
  ];
  await api
    .post("/api/v1/sales")
    .set("Authorization", auth.token)
    .send(sale)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data[0].name, sale[0].name);
      assert(response.body.data[0].barcode, sale[0].barcode);
      sale[0].id = response.body.data[0].id;
    });
  await api
    .delete("/api/v1/sales/" + sale[0].id)
    .set("Authorization", auth.token)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data, "This was deleted successfully.");
    });
});
afterEach(async () => {
  await server.close();
});
