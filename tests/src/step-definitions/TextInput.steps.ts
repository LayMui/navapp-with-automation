import 'expect-webdriverio'

import { Then, When } from '@cucumber/cucumber'

import ButtonPage from '../page-objects/button.page'
import TextinputPage from '../page-objects/textinput.page'
import { Actor } from '@serenity-js/core'
import { EnterText } from '../tasks/EnterText'


When('{pronoun} want to enter text to the text input {string}', async (actor: Actor, mobileNumber:string) => {
   await ButtonPage.showButtonAhuaTextInput()
   await TextinputPage.enterText(mobileNumber)
  //  await actor.attemptsTo(EnterText.intoAhuaTextInput(mobileNumber))
  
})

Then('{pronoun} is able to see text entered', async (actor: Actor) => {
 // await TextinputPage.textEntered()
})
