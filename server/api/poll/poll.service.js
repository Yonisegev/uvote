const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

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
        poll._id = ObjectId(poll._id)
        const collection = await dbService.getCollection('poll')
        const savedPoll = await collection.findOneAndUpdate({ '_id': poll._id }, { $set: poll }, {upsert: true, returnOriginal: false})
        console.log('the saved poll is', savedPoll.value)
        return savedPoll.value;
    } catch (err) {
        logger.error(`cannot update poll ${poll._id}`, err)
        throw err
    }
}

async function add(poll) {
    try {
        const collection = await dbService.getCollection('poll')
        const addedPoll = await collection.insertOne(poll)
        return addedPoll.ops[0]
    } catch (err) {
        logger.error('cannot insert poll', err)
        throw err
    }
}

async function remove(pollId, user) {
    try {

        const collection = await dbService.getCollection('poll')
        // remove only if user is owner/admin
        const query = { _id: ObjectId(pollId) }
        const poll = await collection.findOne({ '_id': ObjectId(pollId) })
        console.log('THE POLL IS ', poll)
        if(poll.owner._id !== user._id) throw new Error('Not the owner')
        return await collection.deleteOne(query)
    } catch (err) {
        logger.error(`cannot remove review ${pollId}`, err)
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


