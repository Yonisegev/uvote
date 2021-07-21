const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    let { email, password } = req.body
    email = email.toLowerCase()
    try {
        const user = await authService.login(email, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

async function signup(req, res) {
    try {
        const userInfo = req.body
        const account = await authService.signup({ ...userInfo })
        logger.debug(`auth.controller - new account created: ` + JSON.stringify(account))
        const user = await authService.login(userInfo.email, userInfo.password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}

module.exports = {
    login,
    signup,
    logout
}