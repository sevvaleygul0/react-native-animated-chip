<img alt="React Native Animated Chip" src="assets/logo.png" width="2400" />

<p align="center">
  <img alt="GIF" src="assets/example.gif" width="360" />
  <img alt="Fotoğraf" src="assets/exampleImage.png" width="360" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-animated-chip
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native-reanimated": ">= 3.x.x",
```

# Usage

## 💗 Import

```jsx
import AnimatedChip from "react-native-animated-chip";
```

## ✍🏻 Example Data

```
const CHIP_DATA: ChipType[] = [
  {
    id: 1,
    text: 'Friends',
  },
  {
    id: 2,
    text: '👨‍👩‍👧‍👦 How I Met Your Mother',
  },
  {
    id: 3,
    text: 'Prison Break',
  },

];
```

## 👍🏻 Usage

```jsx
<AnimatedChip
  activeId={3}
  data={CHIP_DATA}
  onPress={(selected) => {
    console.log(selected);
  }}
/>
```

## 📱 Example Project

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

| Property              | Type                     | Default   | Description                                                                                        |
| --------------------- | ------------------------ | --------- | -------------------------------------------------------------------------------------------------- |
| data                  | ChipType[]               | []        | An array of chip objects to display                                                                |
| activeId              | string \| number         | null      | The ID of the currently active chip                                                                |
| activeBackgroundColor | string                   | '#d4a8d6' | The background color of the active chip                                                            |
| backgroundColor       | string                   | '#EEE7D1' | The background color of inactive chips                                                             |
| activeTextColor       | string                   | '#7d3577' | The text color of the active chip                                                                  |
| buttonStyle           | ViewStyle                | {}        | Additional styles to apply to the chip button                                                      |
| contentContainerStyle | ViewStyle                | {}        | Additional styles to apply to the container of chips                                               |
| textStyle             | TextStyle                | {}        | Additional styles to apply to the chip text                                                        |
| textColor             | string                   | '#DCCA92' | The text color of inactive chips                                                                   |
| onPress               | (chip: ChipType) => void | () => {}  | A function that will be called when a chip is pressed, it receives the chip object as its argument |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Add customizable animation
- [ ] Add single and multi selection feature

# Change Log

Change log will be here !

## Author

Sevval Eygul, sevvalleygull@gmail.com

## License

React Native Animated Chip is available under the MIT license. See the LICENSE file for more info.
