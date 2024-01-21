import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimatedChip from './lib/AnimatedChip/AnimatedChip';

const CHIP_DATA = [
  {
    id: 1,
    text: 'Friends',
    active: false,
  },
  {
    id: 2,
    text: 'How I Met Your Mother',
    active: false,
  },
  {
    id: 3,
    text: 'Prison Break',
    active: false,
  },
  {
    id: 4,
    text: 'The Last of Us',
    active: false,
  },
  {
    id: 5,
    text: 'Game of Thrones',
    active: false,
  },
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <AnimatedChip />
    </SafeAreaView>
  );
}

export default App;
