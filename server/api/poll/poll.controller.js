const logger = require("../../services/logger.service");
const userService = require("../user/user.service");
const pollService = require("./poll.service");

async function getPolls(req, res) {
  try {
    const pageNumber = parseInt(req.query.page || 1);
    const { sortBy } = req.query;
    const polls = await pollService.query({}, pageNumber, sortBy);
    res.send(polls);
  } catch (err) {
    logger.error("Cannot get polls", err);
    res.status(500).send({ err: "Failed to get polls" });
  }
}

async function getPoll(req, res) {
  try {
    const poll = await pollService.getById(req.params.id);
    res.send(poll);
  } catch (err) {
    logger.error("Failed to get poll", err);
    res.status(500).send({ err: "Failed to get poll" });
  }
}

async function deletePoll(req, res) {
  try {
    const user = req.session.user;
    await pollService.remove(req.params.id, user);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete poll", err);
    if (err.status === 401) res.status(401).send({ err: "Unauthorized" });
    res.status(500).send({ err: "Failed to delete poll" });
  }
}

async function updatePoll(req, res) {
  let user = req.session.user
  if (!user) user = req.body.user
  try {
    let { poll } = req.body;
    poll = await pollService.update(poll, user);
    res.send(poll);
  } catch (err) {
    logger.error("Failed to update poll", err);
    res.status(500).send({ err: "Failed to update poll" });
  }
}

async function addPoll(req, res) {
  try {
    let poll = req.body;
    poll = await pollService.add(poll);
    res.send(poll);
  } catch (err) {
    logger.error("Failed to add poll", err);
    res.status(500).send({ err: "Failed to add poll" });
  }
}

module.exports = {
  getPolls,
  getPoll,
  addPoll,
  updatePoll,
  deletePoll,
};
