import { Duration, Task } from '@serenity-js/core'
import { Click, isVisible, Wait, Enter } from '@serenity-js/web'
import { AhuaTextInputPage } from '../page-objects/AhuaTextInputPage'


export const EnterText = {
  intoAhuaTextInput: (text: string) =>
    Task.where(
      `#actor enter text into textinput`,
      Wait.upTo(Duration.ofMilliseconds(5000000)).until(
        AhuaTextInputPage.ahuaTextInputButton(),
        isVisible()
      ),
      Click.on(AhuaTextInputPage.ahuaTextInputButton()),
      Wait.until(AhuaTextInputPage.RNTextInput(), isVisible()),
      Enter.theValue(text).into(AhuaTextInputPage.RNTextInput())
    ),
}
