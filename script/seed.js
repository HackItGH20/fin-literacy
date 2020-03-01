'use strict'

const db = require('../server/db')
const {User, Resource} = require('../server/db/models')

const seedResources = [
  {
    name: 'Guardian Life',
    description:
      'Looking out for those you look after. Protecting your life, health and wealth. Everyone deserves a Guardian.',
    resourceUrl: 'https://www.guardianlife.com/',
    personalFinance: true,
    creditCards: false,
    payingOffDebt: false,
    investing: true,
    saving: true,
    studentLoans: false
  },
  {
    name: 'Mint',
    description: `Take charge of your finances with Mint's online budget planner. Our free budget tracker helps you understand your spending for a brighter financial future.`,
    resourceUrl: 'https://www.mint.com/',
    personalFinance: true,
    creditCards: true,
    payingOffDebt: true,
    investing: false,
    saving: false,
    studentLoans: false
  },
  {
    name: 'Credit Karma',
    description:
      'Providing Easy-To-Read Credit Reports, Offering Personalized Score Insights.',
    resourceUrl: 'https://www.creditkarma.com/',
    personalFinance: true,
    creditCards: true,
    payingOffDebt: false,
    investing: false,
    saving: false,
    studentLoans: false
  },
  {
    name: 'Turbo Tax',
    description:
      'TurboTax® is the #1 best-selling tax preparation software to file taxes online. Easily file federal and state income tax returns with 100% accuracy.',
    resourceUrl: 'https://turbo.intuit.com/',
    personalFinance: true,
    creditCards: false,
    payingOffDebt: false,
    investing: false,
    saving: false,
    studentLoans: false
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const resources = await Promise.all(
    seedResources.map(resource => {
      return Resource.create(resource)
    })
  )

  console.log(`seeded ${resources.length} resources`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
