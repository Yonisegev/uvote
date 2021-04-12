const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('poll')
        // const reviews = await collection.find(criteria).toArray()
        var polls = await collection.find(filterBy).toArray()
        console.log('Polls from service', polls);
        // reviews = reviews.map(review => {
        //     review.byUser = { _id: review.byUser._id, fullname: review.byUser.fullname }
        //     review.aboutUser = { _id: review.aboutUser._id, fullname: review.aboutUser.fullname }
        //     delete review.byUserId
        //     delete review.aboutUserId
        //     return review
        // })

        return polls
    } catch (err) {
        logger.error('cannot find polls', err)
        throw err
    }

}

async function getById(pollId) {
    try {
        const collection = await dbService.getCollection('poll')
        const poll = await collection.findOne({ '_id': pollId })
        return poll
    } catch (err) {
        logger.error(`while finding poll ${pollId}`, err)
        throw err
    }
}

async function update(poll) {
    try {
        // peek only updatable fields!
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


async function add(review) {
    try {
        // peek only updatable fields!
        const reviewToAdd = {
            byUserId: ObjectId(review.byUserId),
            aboutUserId: ObjectId(review.aboutUserId),
            txt: review.txt
        }
        const collection = await dbService.getCollection('review')
        await collection.insertOne(reviewToAdd)
        return reviewToAdd;
    } catch (err) {
        logger.error('cannot insert review', err)
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


