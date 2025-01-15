const {
  createUser,
  getAllUsers,
  updateUsers,
  destroyUser,
} = require("../../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:userId", updateUsers);

router.delete("/:userId", destroyUser);

module.exports = router;
