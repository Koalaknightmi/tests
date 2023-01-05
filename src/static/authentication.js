import { defaultF as test } from "../fixtures/index.f"

const Users = [
  {
    email: 'thisIsATestEmail@gmail.com',
    password: '!WatSsAekk5iBz9'
  }, {
    email: 'thisIsATestEmail2@gmail.com',
    password: '!WatSsAekk5iBz9'
  }
]

test.beforeEach(async ({ loginPage }, testInfo) => {
  await loginPage.goto()
  await loginPage.signInWithEmail(Users[testInfo.workerIndex].email, Users[testInfo.workerIndex].password)
})