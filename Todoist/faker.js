//const fs = require('fs')
//require('dotenv').config()
//const yaml = require('json-to-pretty-yaml')
//const artillery = require('artillery')
const Faker = require('faker')
//var taskName="123";
//var description="abc";

module.exports = {
  generateRandomData
}

function generateRandomData (userContext, events, done) {
    userContext.vars.taskName = Faker.lorem.word()
    userContext.vars.description = Faker.lorem.sentence()
    return done()
}
