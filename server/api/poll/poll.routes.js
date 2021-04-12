const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getPolls, getPoll, deletePoll, updatePoll } = require('./poll.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getPolls)
router.get("/:id", getPoll);
router.put('/:id', updatePoll)
// router.post('/', addReview)
router.delete('/:id', requireAuth, deletePoll)

module.exports = router