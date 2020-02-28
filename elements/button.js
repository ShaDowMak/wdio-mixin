const { Mixin } = require('mixwith')

const Button = Mixin((superclass) => class extends superclass {
  
  clickButton ({ selector }) {
    const button = super.findClickableElement(selector)
    button.click()
  }

})

module.exports = Button
