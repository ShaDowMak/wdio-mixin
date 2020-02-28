const { displayError, clickableError } = require('./error')

class ElementSeeker {

  findDisplayedElement (selector) {
    const element = $(selector)
    element.waitForDisplayed(undefined, false, displayError(selector))
    return element
  }

  findClickableElement (selector) {
    const element = this.findDisplayedElement(selector)
    element.waitForClickable({ timeoutMsg: clickableError(selector) })
    return element
  }

}

module.exports = ElementSeeker
