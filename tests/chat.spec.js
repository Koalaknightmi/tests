const { test } = require('@playwright/test')
require('./static/authentication')
const { chatTestPage } = require('./pageObjects/chatPage')
const { chatNormalMessage, chatLinkMsg, chatChatName, chatNewChatName } = require('./static/testValues')

test.describe('chat Page tests', () => {
  test.skip('chat that the page selects a chat', async ({ page }) => {
    const ChatPage = new chatTestPage(page)
    await ChatPage.goto()
    await ChatPage.verifyPagePickedChat()
  })
  test('check that we can send a normal message', async ({ page }) => {
    const ChatPage = new chatTestPage(page)
    await ChatPage.goto()
    console.log(chatNormalMessage)
    await ChatPage.sendNormalMessage(chatNormalMessage)
  })
  test.skip('check that we can send a linked message and navigate to the link', async ({ page }) => {
    const ChatPage = new chatTestPage(page)
    await ChatPage.goto()
    await ChatPage.sendMessageWithLink(chatLinkMsg)
  })
  test.skip('check that we can create a chat', async ({ page }) => {
    const ChatPage = new chatTestPage(page)
    await ChatPage.goto()
    await ChatPage.createChat(chatNewChatName)
  })
  test.skip('check that we can join a chat', async ({ page }) => {
    const ChatPage = new chatTestPage(page)
    await ChatPage.goto()
    await ChatPage.joinChat(chatChatName)
  })
})
