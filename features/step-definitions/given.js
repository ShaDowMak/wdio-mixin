const { Given } = require('cucumber')

Given('User admin credentials', function () {
  this.user = { username: 'admin', password: 'admin1'}
})

Given('User on Auth page', function () {
  browser.url('/auth')
})