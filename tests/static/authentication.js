const { test } = require('@playwright/test')
const { loginTestPage } = require('../../src/pages/Login/testPage.js')

const Users = [
  {
    email: 'thisIsATestEmail@gmail.com',
    password: '!WatSsAekk5iBz9'
  }, {
    email: 'thisIsATestEmail2@gmail.com',
    password: '!WatSsAekk5iBz9'
  }
]

test.beforeEach(async ({ page }, testInfo) => {
  const LoginTestP = new loginTestPage(page)
  await LoginTestP.goto()
  await LoginTestP.signInWithEmail(Users[testInfo.workerIndex].email, Users[testInfo.workerIndex].password)
})
