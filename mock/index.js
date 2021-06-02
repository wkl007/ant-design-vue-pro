const user = require('./user')
const message = require('./message')
const form = require('./form')
const analysis = require('./dashboard/analysis')
const monitor = require('./dashboard/monitor')
const workplace = require('./dashboard/workplace')
const cardList = require('./list/cardList')
const tableList = require('./list/tableList')
const permission = require('./permission')
const notices = require('./notices.js')

module.exports = {
  ...user,
  ...message,
  ...form,
  ...analysis,
  ...monitor,
  ...workplace,
  ...cardList,
  ...tableList,
  ...permission,
  ...notices
}
