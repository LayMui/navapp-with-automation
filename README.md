# nav-app
A simple RN app for component testing


appium --version
1.22.0

To run the test

To start the metro bundler
```
Go to xcode Version 13.2.1 (13C100) and open ios/navapp.xcworkspace
and build 
```
To run the test in iOS Simulator iphone 13 iOS 15.2.

Start the iOS Simulator

```
yarn ios.app
```


Issue with DS component's accessibilityLabel
https://user-images.githubusercontent.com/11436517/153374705-fdb75cef-22aa-4668-abf6-551408089850.mov

Using appium inspector, found out the issue in the locator strategy - accessbilityLabel


<img width="1262" alt="appium-inspector" src="https://user-images.githubusercontent.com/11436517/153538031-56a3a255-d684-48f4-87ab-b41f3bb64b8b.png">

Here is after the fix to use $('~inputPress') for the selector


https://user-images.githubusercontent.com/11436517/153538052-7eabb9dc-3ba2-4726-8d3d-9bd337667779.mov



 console.log((actor as any).abilities)
 ```
abilities is a private property on the Actor class, but by casting it to any we're forcing TypeScript to ignore field visibility and just access the private field. This sort of ugly hackery should only ever be used for debugging, so please don't do it in prod.
```


https://circleci.com/docs/2.0/hello-world-macos/