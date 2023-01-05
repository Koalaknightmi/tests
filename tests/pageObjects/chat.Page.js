const { expect } = require('@playwright/test')
const { chatUrl } = require('../static/globalVariables')
const { joinChatTestMessage } = require('../static/testValues')

exports.chatTestPage = class chatTestPage {
  /**
     * @param {import('@playwright/test').Page} page
     */
  constructor (page) {
    this.page = page
    this.input_messageBox = page.locator('input[id="outlined-basic"]')
    this.button_submit = page.locator('text=SENDsend')
    this.messages = page.locator('_react=Messages')
    this.messages_last = page.locator('_react=Message').last()
    this.people = page.locator('_react=People')
    this.chats = page.locator('_react=Chat')
    this.chatName = page.locator('_react=ChatName')
    this.button_createChat = page.locator('text=Create Chat')
    this.input_newChatName = page.locator('')
  }

  async goto () {
    await this.page.goto(chatUrl, { timeout: 30000 })
    await expect(this.page).toHaveScreenshot({ maxDiffPixels: 0 })
  }

  async sendNormalMessage (message) { // TODO https://app.clickup.com/t/3u1b0m8
    await this.input_messageBox.fill(message)
    await this.button_submit.click()
    await expect(this.messages_last).toContainText(message, { timeout: 6000 })
  }

  async sendMessageWithLink (message) { // TODO https://app.clickup.com/t/3u1b12m
    await this.input_messageBox.fill(message)
    await this.button_submit.click()
    await expect(this.messages_last.textContent).toContain(message, { timeout: 6000 })
    const link = this.page.locator('_react=Link').click()
    await link.click()
    await expect(this.page).toHaveURL(link.getAttribute('url'))
  }

  async createChat (chatID) { // TODO https://app.clickup.com/t/3u1b19f
    this.button_createChat.click()
    // TODO creation settings and verification
  }

  async joinChat (chatID) { // TODO https://app.clickup.com/t/3u1b19f
    const chat = this.page.locator('_react=chat[key=' + chatID + ']')
    await chat.click()
    await expect(this.page).toHaveURL(chatUrl + '/' + chat.getAttribute('key'))
    await expect(this.chatName.innerText).toBe(chat.innerText)
    this.sendNormalMessage(joinChatTestMessage)
  }

  async verifyPagePickedChat () {
    await expect(this.chatName.innerText).not.toBe('', { timeout: 1000 })
  }

  async deleteChat (chatID) { // TODO https://app.clickup.com/t/3u1b19f
    // TODO deletion test and deletion verification verification
  }
}
