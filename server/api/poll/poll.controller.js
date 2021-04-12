const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const pollService = require('./poll.service')

async function getPolls(req, res) {
    try {
        const polls = await pollService.query()
        res.send(polls)
    } catch (err) {
        logger.error('Cannot get polls', err)
        res.status(500).send({ err: 'Failed to get polls' })
    }
}

async function getPoll(req, res) {
    try {
        const poll = await pollService.getById(req.params.id)
        res.send(poll)
    } catch (err) {
        logger.error('Failed to get poll', err)
        res.status(500).send({ err: 'Failed to get poll' })
    }
}

async function deletePoll(req, res) {
    try {
        await pollService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete poll', err)
        res.status(500).send({ err: 'Failed to delete poll' })
    }
}


async function updatePoll(req, res) {
    try {
        let poll = req.body
        console.log('The req is:', poll);
        // poll.byUserId = req.session.user._id
        poll = await pollService.update(poll)
        res.send(poll)

    } catch (err) {
        logger.error('Failed to update poll', err)
        res.status(500).send({ err: 'Failed to update poll' })
    }
}


module.exports = {
    getPolls,
    getPoll,
    updatePoll,
    deletePoll,
}