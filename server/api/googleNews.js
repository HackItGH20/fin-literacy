const router = require('express').Router()
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)
module.exports = router

// our default route is on finances
router.get('/', async (req, res, next) => {
  try {
    const finLiteracy = await newsapi.v2.everything({
      q: 'financial',
      language: 'en',
      sortBy: 'latest'
    })
    res.json(finLiteracy)
  } catch (err) {
    next(err)
  }
})

router.get('/credit', async (req, res, next) => {
  try {
    const creditLiteracy = await newsapi.v2.everything({
      q: 'credit',
      language: 'en'
    })
    res.json(creditLiteracy)
  } catch (err) {
    next(err)
  }
})

router.get('/debt', async (req, res, next) => {
  try {
    const debtLiteracy = await newsapi.v2.everything({
      q: 'debt',
      language: 'en'
    })
    res.json(debtLiteracy)
  } catch (err) {
    next(err)
  }
})

router.get('/investment', async (req, res, next) => {
  try {
    const finInvestment = await newsapi.v2.everything({
      q: 'financial investment',
      language: 'en'
    })
    res.json(finInvestment)
  } catch (err) {
    next(err)
  }
})

router.get('/saving', async (req, res, next) => {
  try {
    const budgeting = await newsapi.v2.everything({
      q: 'budgeting savings',
      language: 'en'
    })
    res.json(budgeting)
  } catch (err) {
    next(err)
  }
})

router.get('/loans', async (req, res, next) => {
  try {
    const loanLiteracy = await newsapi.v2.everything({
      q: 'loan repayment',
      language: 'en'
    })
    res.json(loanLiteracy)
  } catch (err) {
    next(err)
  }
})
