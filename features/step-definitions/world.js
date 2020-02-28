const { setWorldConstructor } = require('cucumber')

function CustomWorld ({ attach, parameters }) {
  this.attach = attach
  this.parameters = parameters
}

setWorldConstructor(CustomWorld)
