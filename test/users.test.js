const supertest = require("supertest");
const assert = require("assert");
const { app, server } = require("../grocery");
const api = supertest(app);
const { credentials, contentType } = require("./helper");
const auth = {};

// login to get auth token
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

test("User Login", async () => {
  await api
    .post("/api/v1/login")
    .send(credentials)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      //   assert(response.body.data.mensaje, "Correct authentication");
    });
});
test("Create User", async () => {
  const user = {
    name: "Oscar",
    surname: "Moralex",
    email: "oscar.morales@gmail.com",
    password: "123$5",
    nickname: "Moralex",
  };
  await api
    .post("/api/v1/users")
    .send(user)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data.name, user.name);
      assert(response.body.data.email, user.email);
    });
});

test("Get a User", async () => {
  const user = {
    name: "Oscar",
    surname: "Moralex",
    email: "oscar.morales@gmail.com",
    password: "123$5",
    nickname: "Moralex",
  };
  const user_id = await api
    .post("/api/v1/users")
    .send(user)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      return response.body.data.id;
    });

  await api
    .get("/api/v1/users/" + user_id)
    .set("Authorization", auth.token)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      assert(response.body.data.name, user.name);
      assert(response.body.data.email, user.email);
    });
});

// test("Update a User", async () => {
//   const user = {
//     name: "Oscar",
//     surname: "Moralex",
//     email: "oscar.morales@gmail.com",
//     password: "123$5",
//     nickname: "Moralex",
//   };
//   const user_id = await api
//     .post("/api/v1/users")
//     .send(user)
//     .expect(200)
//     .expect("Content-Type", contentType)
//     .then((response) => {
//       return response.body.data.id;
//     });

//   await api
//     .put("/api/v1/users/" + user_id)
//     .set("Authorization", auth.token)
//     .send({ surname: "Morales" })
//     .expect(200)
//     .expect("Content-Type", contentType)
//     .then((response) => {
//       assert(response.body.data, "The update was successfully.");
//     });
// });

test("Delete a User", async () => {
  const user = {
    name: "Oscar",
    surname: "Moralex",
    email: "oscar.morales@gmail.com",
    password: "123$5",
    nickname: "Moralex",
  };
  const user_id = await api
    .post("/api/v1/users")
    .send(user)
    .expect(200)
    .expect("Content-Type", contentType)
    .then((response) => {
      return response.body.data.id;
    });

  await api
    .delete("/api/v1/users/" + user_id)
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
