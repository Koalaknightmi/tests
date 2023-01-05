import { expect } from "@playwright/test"
import {loginUrl} from "../../../static/globalVariables"

exports.loginTestPage = class LoginTestPage {
  /**
     * @param {import('@playwright/test').Page} page
     */
  constructor (page) {
    this.page = page
    this.input_password = page.locator('input[name="password"]')
    this.input_email = page.locator('input[name="email"]')
    this.button_next = page.locator('button:has-text("Next")')
    this.button_signIn = page.locator('button:has-text("Sign In")')
    this.button_WithEmail = page.locator('text=Sign in with emailEmail')
    this.text_loggedIn = page.locator('h1[id="loggedin"]')
  }

  async goto () {
    await this.page.goto(loginUrl, { timeout: 30000 })
  }

  async signInWithEmail (email, password) {
    await expect(this.text_loggedIn).not.toBeVisible()
    await this.button_WithEmail.click()
    await this.input_email.fill(email)
    await this.button_next.click()
    await this.input_password.fill(password)
    await this.button_signIn.click()
    await expect(this.text_loggedIn).toBeVisible()
  }
}
