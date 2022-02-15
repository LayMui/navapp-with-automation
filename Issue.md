```
[0-2] Error in "0: When he want to enter text to the text input "12345678""
ConfigurationError: Jan can't BrowseTheWeb yet. Did you give them the ability to do so?
    at Actor.abilityTo (/Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/core/src/screenplay/actor/Actor.ts:47:19)
    at Function.as (/Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/web/src/screenplay/abilities/BrowseTheWeb.ts:19:22)
    at WaitUntil.performAs (/Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/web/src/screenplay/interactions/Wait.ts:229:29)
    at /Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/core/src/screenplay/activities/TrackedActivity.ts:34:39
    at async World.<anonymous> (/Users/a845751yara.com/poc/navapp-with-automation/tests/src/step-definitions/TextInput.steps.ts:14:5)
[0-2] 2022-02-15T03:11:45.489Z INFO webdriver: COMMAND deleteSession()
[0-2] 2022-02-15T03:11:45.490Z INFO webdriver: [DELETE] http://localhost:4723/session/77a9d37f-1bd4-4a28-8de0-ca9d364a3c9b
[0-2] FAILED in iOS - /tests/features/TextInput.feature
2022-02-15T03:11:46.683Z INFO @wdio/cli:launcher: Run onComplete hook

 "spec" Reporter:
------------------------------------------------------------------
[iPhone 13 iOS 15.2 #0-2] Running: iPhone 13 on iOS 15.2 executing /Users/a845751yara.com/poc/navapp-with-automation/tests/apps/navapp.app
[iPhone 13 iOS 15.2 #0-2] Session ID: 77a9d37f-1bd4-4a28-8de0-ca9d364a3c9b
[iPhone 13 iOS 15.2 #0-2]
[iPhone 13 iOS 15.2 #0-2] » /tests/features/TextInput.feature
[iP
```
