const user = require('./user')
const message = require('./message')
const listTableList = require('./listTableList')
const form = require('./form')
const analysis = require('./dashboard/analysis')
const monitor = require('./dashboard/monitor')
const workplace = require('./dashboard/workplace')
const basicList = require('./list/basicList')
const cardList = require('./list/cardList')
const permission = require('./permission')

module.exports = {
  ...user,
  ...message,
  ...listTableList,
  ...form,
  ...analysis,
  ...monitor,
  ...workplace,
  ...basicList,
  ...cardList,
  ...permission
}
