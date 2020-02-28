const LOGIN = require('./lib/login.selectors')

const PREFIX = 'data-test'

const setSelector = (names) => {
  return Object
    .keys(names)
    .reduce((pV,cV) => {
      pV[cV] = `[${PREFIX}='${names[cV]}']`
      return pV
    }, {})
}

const loginSelectors = process.env.SETTINGS === 'test' ? setSelector(LOGIN) : LOGIN

module.exports = {
  loginSelectors,
}
