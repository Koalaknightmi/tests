import { loginTestPage } from "./pages/default/login.p";

const Users = [
    {
      email: 'thisIsATestEmail@gmail.com',
      password: '!WatSsAekk5iBz9'
    }, {
      email: 'thisIsATestEmail2@gmail.com',
      password: '!WatSsAekk5iBz9'
    }
  ]

const defaultFixtures = {
    loginPage: [async ({page}, use, workerInfo) => {
        let lp = new loginTestPage(page)
        await lp.goto()
        await lp.signInWithEmail(Users[workerInfo.workerIndex].email, Users[workerInfo.workerIndex].password)
        await use(lp)
    }, { auto: true }]
}

export default defaultFixtures