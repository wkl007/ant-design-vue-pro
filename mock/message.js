const Mock = require('mockjs')

module.exports = {
  'GET /api/message/sms': (req, res) => {
    return res.json({ captcha: Mock.mock('@integer(10000, 99999)') })
  }
}
