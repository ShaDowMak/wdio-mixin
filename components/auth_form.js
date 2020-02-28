const { mix } = require('mixwith')

const Input = require('../elements/input')
const Button = require('../elements/button')
const ElementSeeker = require('../elements/element')

const { loginSelectors } = require('../selectors')

class AuthForm extends mix(ElementSeeker).with(Input, Button) {
  constructor ({ userName, password, submit }) {
    super()
    this.userName = userName
    this.password = password
    this.submit = submit
  }

  setUsername (name) {
    const config = {
      selector: this.userName,
      value: name
    }
    super.setValueToInput(config)
    return this
  }

  setPassword (password) {
    const config = {
      selector: this.password,
      value: password
    }
    super.setValueToInput(config)
    return this
  }

  submitForm () {
    const config = {
      selector: this.submit
    }
    super.clickButton(config)
    return this
  }

  setCredentialsAndSubmit ({ name, password }) {
    this.setUsername(name)
      .setPassword(password)
      .submitForm()
  }
}

module.exports = new AuthForm(loginSelectors)
