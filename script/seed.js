'use strict'

const db = require('../server/db')
const {User, Resource} = require('../server/db/models')

const seedResources = [
  {
    name: 'Guardian Life',
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

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

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
