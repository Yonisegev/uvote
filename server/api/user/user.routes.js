const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  getByEmailValidator,
} = require("./user.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/email/:email", getByEmailValidator);
router.put("/:id", updateUser);

// router.put('/:id',  requireAuth, updateUser)
router.delete("/:id", requireAuth, requireAdmin, deleteUser);

module.exports = router;
