const { When } = require('cucumber')
const authForm = require('../components/auth_form')

When('User provides self credentials', function () {
  authForm.setCredentialsAndSubmit(this.user)
})
