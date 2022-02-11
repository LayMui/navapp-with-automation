# nav-app
A simple RN app for component testing


appium --version
1.22.0

To run the test

```
yarn ios.app
```


Issue with DS component's accessibilityLabel
https://user-images.githubusercontent.com/11436517/153374705-fdb75cef-22aa-4668-abf6-551408089850.mov

Using appium inspector, found out the issue in the locator strategy - accessbilityLabel


<img width="1262" alt="appium-inspector" src="https://user-images.githubusercontent.com/11436517/153538031-56a3a255-d684-48f4-87ab-b41f3bb64b8b.png">

Here is after the fix to use $('~inputPress') for the selector


https://user-images.githubusercontent.com/11436517/153538052-7eabb9dc-3ba2-4726-8d3d-9bd337667779.mov

