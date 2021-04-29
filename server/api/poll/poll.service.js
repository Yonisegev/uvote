const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('poll')
        // const reviews = await collection.find(criteria).toArray()
        var polls = await collection.find(filterBy).toArray()
        // console.log('Polls from service', polls)

        return polls
    } catch (err) {
        logger.error('cannot find polls', err)
        throw err
    }

}

async function getById(pollId) {
    try {
        console.log('Inside get by id', pollId);
        const collection = await dbService.getCollection('poll')
        const poll = await collection.findOne({ '_id': ObjectId(pollId) })
        return poll
    } catch (err) {
        logger.error(`while finding poll ${pollId}`, err)
        throw err
    }
}

async function update(poll) {
    try {
        // peek only updatable fields!
        poll._id = ObjectId(poll._id)
        const collection = await dbService.getCollection('poll')
        const savedPoll = await collection.updateOne({ '_id': poll._id }, { $set: poll })
        return savedPoll;
    } catch (err) {
        logger.error(`cannot update poll ${poll._id}`, err)
        throw err
    }
}

async function remove(pollId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('poll')
        // remove only if user is owner/admin
        const query = { _id: ObjectId(pollId) }
        if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
        // return await collection.deleteOne({ _id: ObjectId(pollId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove review ${pollId}`, err)
        throw err
    }
}


async function add(poll) {
    try {
        const collection = await dbService.getCollection('poll')
        const addedPoll = await collection.insertOne(poll)
        return addedPoll;
    } catch (err) {
        logger.error('cannot insert poll', err)
        throw err
    }
}



function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
}


