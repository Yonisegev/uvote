const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;

async function query(filterBy = {}, page = 1, sortBy = "newest") {
  const PAGE_SIZE = 5;
  const skip = (page - 1) * PAGE_SIZE;
  try {
    const criteria = _buildCriteria(filterBy);
    const collection = await dbService.getCollection("poll");
    let mongoSort;
    if (sortBy === "newest") {
      mongoSort = { createdAt: -1 };
    } else if (sortBy === "popularity") {
      mongoSort = { totalVotes: -1 };
    }
    var polls = await collection
      .find(criteria, { _id: 0 })
      .sort(mongoSort)
      .skip(skip)
      .limit(PAGE_SIZE);
    const total = await polls.count();
    const res = {
      data: await polls.toArray(),
      total,
    };

    return res;
  } catch (err) {
    logger.error("cannot find polls", err);
    throw err;
  }
}

async function getById(pollId) {
  try {
    const collection = await dbService.getCollection("poll");
    const poll = await collection.findOne({ _id: ObjectId(pollId) });
    return poll;
  } catch (err) {
    logger.error(`while finding poll ${pollId}`, err);
    throw err;
  }
}

async function update(poll, user) {
  if(!user || user._id !== poll.owner._id) {
    throw new Error('Not owner!')
  }
  try {
    poll._id = ObjectId(poll._id);
    const collection = await dbService.getCollection("poll");
    const savedPoll = await collection.findOneAndUpdate(
      { _id: poll._id },
      { $set: poll },
      { upsert: true, returnOriginal: false }
    );
    return savedPoll.value;
  } catch (err) {
    logger.error(`cannot update poll ${poll._id}`, err);
    throw err;
  }
}

async function add(poll) {
  try {
    const collection = await dbService.getCollection("poll");
    const addedPoll = await collection.insertOne(poll);
    return addedPoll.ops[0];
  } catch (err) {
    logger.error("cannot insert poll", err);
    throw err;
  }
}

async function remove(pollId, user) {
  try {
    const collection = await dbService.getCollection("poll");
    // remove only if user is owner/admin
    const query = { _id: ObjectId(pollId) };
    const poll = await collection.findOne({ _id: ObjectId(pollId) });
    if (poll.owner._id !== user._id) throw new Error("Not the owner");
    return await collection.deleteOne(query);
  } catch (err) {
    logger.error(`cannot remove review ${pollId}`, err);
    throw err;
  }
}

function _buildCriteria(filterBy) {

  const criteria = {}
  if (filterBy.userId) {
    criteria.$or = [{ "owner._id": filterBy.userId }]
  }
  criteria.isPrivate = { $in: [false] }
  return criteria;
}
module.exports = {
  query,
  getById,
  remove,
  add,
  update,
};
