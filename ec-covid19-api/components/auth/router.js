const { Router } = require('express')
const controller = require('./controller')
const { sucess } = require('../../lib/responseHandler')

const router = Router()

router.post('/login', login)

async function login (req, res, next) {
  try {
    const token = await controller.login(req.body.userName, req.body.userPass)
    sucess(req, res, token)
  } catch (e) {
    next(e)
  }
}

module.exports = router
