import { By, PageElement } from '@serenity-js/web'

export const AhuaTextInputPage = {
  ahuaTextInputButton: () =>
    PageElement.located(By.css('~AhuaTextInputButton')),

  ahuaTextInput: () =>
    PageElement.located(By.css('~AhuaTextInput')),

  RNTextInput: () =>
    PageElement.located(
      By.css('~PhoneNumberInput')
    ),
}
