<img alt="React Native Typescript Library Starter" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-typescript-library-starter)

[![React Native Typescript Library Starter](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-typescript-library-starter)

[![npm version](https://img.shields.io/npm/v/react-native-typescript-library-starter.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-typescript-library-starter)
[![npm](https://img.shields.io/npm/dt/react-native-typescript-library-starter.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-typescript-library-starter)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Typescript Library Starter"
        src="assets/Screenshots/typescript.jpg" />
</p>

## Library Usage

- `npm i`
- `npm run husky:setup`
- Delete example folder
- Delete build folder
- Make your own library into the `lib` folder
- Change package.json
- Change README for your own documentation
- `npm run build`

```
> react-native-typescript-library-starter@0.1.0 build /Users/kuray/Coursion/MyLibraries/ReactNative/react-native-typescript-library-starter
> cd lib && tsc && cp ../package.json ../build/dist/ && Echo Build completed!

Build completed!
```

- Test your build/dist into the new project
- Finally, time to npm publish :)

### Below part is for Documentation ! Remove above Library Usage

# Installation

Add the dependency:

```bash
npm i react-native-typescript-library-starter
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

# Usage

## Import

```jsx
import MyComponent from "react-native-typescript-library-starter";
```

## Fundamental Usage

```jsx
<MyComponent />
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

| Property               | Type                       | Default       | Description                                                                                          |
| ---------------------- | -------------------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| data                   | ChipType[]                 | []            | An array of chip objects to display                                                                 |
| activeId               | string \| number           | null          | The ID of the currently active chip                                                                  |
| activeBackgroundColor  | string                     | '#d4a8d6'     | The background color of the active chip                                                              |
| backgroundColor        | string                     | '#EEE7D1'     | The background color of inactive chips                                                               |
| activeTextColor        | string                     | '#7d3577'     | The text color of the active chip                                                                    |
| buttonStyle            | ViewStyle                  | {}            | Additional styles to apply to the chip button                                                        |
| contentContainerStyle  | ViewStyle                  | {}            | Additional styles to apply to the container of chips                                                 |
| textStyle              | TextStyle                  | {}            | Additional styles to apply to the chip text                                                          |
| textColor              | string                     | '#DCCA92'     | The text color of inactive chips                                                                     |
| onPress                | (chip: ChipType) => void  | () => {}      | A function that will be called when a chip is pressed, it receives the chip object as its argument  |


## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Typescript Library Starter is available under the MIT license. See the LICENSE file for more info.
