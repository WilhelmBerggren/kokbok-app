# kokbok-app
React Native app using [Expo](https://expo.io/). 

# Setup
Install [Node](https://nodejs.org/en/)

Install Yarn: `npm install --global yarn`

Install Expo: `npm install --global expo-cli`

Install dependencies: `yarn`

# Start
Start the expo dev server: `expo start`

Expo dev tools will open in a new browser window. Scan the QR code from your phone's expo app or press one of the "Run on..." links in the sidebar.

# Troubleshooting
## Execution warning when trying to run Expo on Windows
Run `Set-ExecutionPolicy Unrestricted` from an elevated Powershell console.

## Can't connect to your Expo app
Try switching connection mode from "LAN" to "tunnel" in Expo dev tools

# Development
## General
React Native comes with some [core built in components](https://reactnative.dev/docs/components-and-apis) that can be used similar to HTML. The most common ones are:

React Native     | Description
---------------- | -----------
View             | Like div
Text             | Required for displaying/styling text
Button           | Basic button, triggers `onPress`
TouchableOpacity | Like View, but allows `onPress`
Image            | Like img

## Navigation
See the [docs for React Navigation](https://reactnavigation.org/docs/tab-based-navigation). It's based on Navigators and Screens. You need a navigator to provide routing and each "page" is a screen.

## Styling
Styling is done using [Styled Components](https://styled-components.com/). With it, you can write 
```
const MyStyledComponent = styled(MyComponent)`
  background-color: blue;
`;
``` 
to create a new version of your component with your styling. For the built in core components, there is the shorthand `styled.View`, `styled.Text`, etc.