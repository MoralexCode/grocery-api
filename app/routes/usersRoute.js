var express = require("express"),
  router = express.Router(),
  usersController = require("../controllers/usersController"),
  access_users = require("../../middleware/access_users");

router.post("/login", usersController.login);
router.post("/users", usersController.create);
router.get("/users", access_users.authentication, usersController.readAll);
// router.get("/course", access_users.authentication, usersController.readCourses);
router.get("/users/:id", access_users.authentication, usersController.read);
router.put("/users/:id", access_users.authentication, usersController.update);
router.delete(
  "/users/:id",
  access_users.authentication,
  usersController.delete
);

//endoint by QueryString
// ........
//...HERE..
///........
module.exports = router;
