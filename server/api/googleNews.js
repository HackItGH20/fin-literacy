const router = require('express').Router()
const NewsAPI = require('newsapi')
const {newsAPIKey} = require('../../secrets')
const newsapi = new NewsAPI(newsAPIKey)
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const finLiteracy = await newsapi.v2.everything({
      q: 'financial',
      language: 'en'
    })
    console.log('api call results', finLiteracy)
    res.json(finLiteracy)
  } catch (err) {
    next(err)
  }
})
