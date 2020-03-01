const router = require('express').Router()
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const finLiteracy = await newsapi.v2.everything({
      q: 'financial',
      language: 'en'
    })
    res.json(finLiteracy)
  } catch (err) {
    next(err)
  }
})
