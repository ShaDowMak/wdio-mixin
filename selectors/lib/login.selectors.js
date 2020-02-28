const selectors = process.env.SETTINGS === 'test' 
  ?
    {
      userName: 'username',
      password: 'password',
      submit: 'submit',
    }
  :
    {
      userName: '.input[placeholder="Username"]',
      password: '.input[placeholder="Password"]',
      submit: '.button[type="submit"]',
    }

module.exports = selectors
