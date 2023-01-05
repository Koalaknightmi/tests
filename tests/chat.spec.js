import { chatF as test} from "../src/fixtures/index.f"
//import "../src/static/authentication"
const { chatNormalMessage, chatLinkMsg, chatChatName, chatNewChatName } = require('../src/static/testValues')

test.describe('chat Page tests', () => {
  test.skip('chat that the page selects a chat', async ({ page, chatPage }) => {
    await chatPage.goto()
    await chatPage.verifyPagePickedChat()
  })
  test('check that we can send a normal message', async ({ page, chatPage  }) => {
    await chatPage.goto()
    console.log(chatNormalMessage)
    await chatPage.sendNormalMessage(chatNormalMessage)
  })
  test.skip('check that we can send a linked message and navigate to the link', async ({ page, chatPage  }) => {
    await chatPage.goto()
    await chatPage.sendMessageWithLink(chatLinkMsg)
  })
  test.skip('check that we can create a chat', async ({ page, chatPage  }) => {
    await chatPage.goto()
    await chatPage.createChat(chatNewChatName)
  })
  test.skip('check that we can join a chat', async ({ page, chatPage  }) => {
    await chatPage.goto()
    await chatPage.joinChat(chatChatName)
  })
})
