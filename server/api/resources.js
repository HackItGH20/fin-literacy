const router = require('express').Router()
const {Resource} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.findAll()
    if (!resources) res.sendStatus(500)
    else res.json(resources)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id)
    if (!resource) res.sendStatus(500)
    else res.json(resource)
  } catch (error) {
    next(error)
  }
})

module.exports = router
