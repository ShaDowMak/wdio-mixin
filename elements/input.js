const { Mixin } = require('mixwith')

const Input = Mixin((superclass) => class extends superclass {

  getValueOfInput ({ selector }) {
    const input = super.findDisplayedElement(selector)
    return input.getValue()
  }

  setValueToInput ({ selector, value }) {
    const input = super.findDisplayedElement(selector)
    return input.setValue(value)
  }

  addValueToInput ({ selector, value }) {
    const input = super.findDisplayedElement(selector)
    return input.addValue(value)
  }

  clearInput ({ selector }) {
    const input = super.findDisplayedElement(selector)
    return input.clearValue()
  }

})

module.exports = Input
