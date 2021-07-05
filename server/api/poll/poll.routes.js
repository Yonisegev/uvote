const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const { checkHeader } = require("../../middlewares/header.middleware");
const { log } = require("../../middlewares/logger.middleware");
const {
  getPolls,
  getPoll,
  addPoll,
  deletePoll,
  updatePoll,
} = require("./poll.controller");
const router = express.Router();

router.get("/", checkHeader, log, getPolls);
router.get("/:id", getPoll);
router.post("/", addPoll);
router.put("/:id", checkHeader, updatePoll);
router.delete("/:id", requireAuth, deletePoll);

module.exports = router;
