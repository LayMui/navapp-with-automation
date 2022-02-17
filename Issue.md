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



Adding the
  console.log((actor as any).abilities) 

```
iPhone 13 iOS 15.2 #0-2] Text Input
[iPhone 13 iOS 15.2 #0-2] In order to enter text into the TextInput component
[iPhone 13 iOS 15.2 #0-2] As a QA tester Jan
[iPhone 13 iOS 15.2 #0-2] Jan wants to see how text is entered into TextInput component
[iPhone 13 iOS 15.2 #0-2]
[iPhone 13 iOS 15.2 #0-2] Text Input
[iPhone 13 iOS 15.2 #0-2]    ✓ Given Jan is at the app
[iPhone 13 iOS 15.2 #0-2]    ✖ When he want to enter text to the text input "12345678"
[iPhone 13 iOS 15.2 #0-2]    ? Then he is able to see text entered
[iPhone 13 iOS 15.2 #0-2]
[iPhone 13 iOS 15.2 #0-2] 1 passing (1.9s)
[iPhone 13 iOS 15.2 #0-2] 1 failing
[iPhone 13 iOS 15.2 #0-2]
[iPhone 13 iOS 15.2 #0-2] 1) Text Input When he want to enter text to the text input "12345678"
[iPhone 13 iOS 15.2 #0-2] ConfigurationError: Jan can't BrowseTheWeb yet. Did you give them the ability to do so?
[iPhone 13 iOS 15.2 #0-2] ConfigurationError: Jan can't BrowseTheWeb yet. Did you give them the ability to do so?
[iPhone 13 iOS 15.2 #0-2]     at Actor.abilityTo (/Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/core/src/screenplay/actor/Actor.ts:47:19)
[iPhone 13 iOS 15.2 #0-2]     at Function.as (/Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/web/src/screenplay/abilities/BrowseTheWeb.ts:19:22)
[iPhone 13 iOS 15.2 #0-2]     at WaitUntil.performAs (/Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/web/src/screenplay/interactions/Wait.ts:229:29)
[iPhone 13 iOS 15.2 #0-2]     at /Users/a845751yara.com/poc/navapp-with-automation/node_modules/@serenity-js/core/src/screenplay/activities/TrackedActivity.ts:34:39
[iPhone 13 iOS 15.2 #0-2]     at async World.<anonymous> (/Users/a845751yara.com/poc/navapp-with-automation/tests/src/step-definitions/TextInput.steps.ts:16:5)


Spec Files:      0 passed, 1 failed, 2 skipped, 3 total (100% completed) in 00:00:20 

2022-02-17T04:58:28.782Z INFO @wdio/local-runner: Shutting down spawned worker
2022-02-17T04:58:29.036Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-02-17T04:58:29.037Z INFO @wdio/local-runner: shutting down
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```