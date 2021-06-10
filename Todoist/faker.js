//const fs = require('fs')
//require('dotenv').config()
//const yaml = require('json-to-pretty-yaml')
//const artillery = require('artillery')
const Faker = require('faker');

module.exports = {
  generateRandomData
}
function generateRandomData (userContext, events, done) {
  userContext.vars.taskName = `${Faker.name.firstName()} ${Faker.name.lastName()} PerformanceTests`
  userContext.vars.description = Faker.random.uuid()
  return done()
}
