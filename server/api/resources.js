const router = require('express').Router()
const {Resource} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.findAll()
    if (!resources) res.sendStatus(500)
    else res.json(resources)
  } catch (error) {
    next(error)
  }
})

module.exports = router
