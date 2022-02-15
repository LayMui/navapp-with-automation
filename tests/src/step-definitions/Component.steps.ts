import 'expect-webdriverio'

import { Given, Then, When } from '@cucumber/cucumber'

import ButtonPage from '../page-objects/button.page'
import CalendarPage from '../page-objects/calendar.page'
import { Actor } from '@serenity-js/core'

Given('{actor} is at the app', (actor: Actor) => {})

When(
  '{pronoun} want to select for {string}',
  async (actor: Actor, component: string) => {
    switch (component) {
      case 'Button':
        await ButtonPage.showButton()
        await ButtonPage.customButton()
        await CalendarPage.backToButton()
        await ButtonPage.backToHome()
        break

      case 'Calendar':
        await CalendarPage.showCalendar()
        break
    }
  }
)

Then(
  '{pronoun} is able to see the component displayed',
  async (actor: Actor) => {
    await ButtonPage.backToHome()
  }
)
