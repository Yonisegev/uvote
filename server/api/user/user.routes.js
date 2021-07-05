const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const { checkHeader } = require("../../middlewares/header.middleware");
const {
  getUser,
  getUsers,
  deleteUser,
  getByEmailValidator,
} = require("./user.controller");
const router = express.Router();

router.get("/", checkHeader, getUsers);
router.get("/:id", checkHeader, getUser);
router.get("/email/:email", getByEmailValidator);
// router.put("/:id", updateUser);
router.delete("/:id", checkHeader, requireAuth, requireAdmin, deleteUser);

module.exports = router;
