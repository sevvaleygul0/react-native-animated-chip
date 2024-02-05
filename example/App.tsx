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
  {
    id: 6,
    text: 'Breaking Bad',
    active: false,
  },
  {
    id: 7,
    text: 'Chernobyl',
    active: false,
  },
  {
    id: 8,
    text: 'Our Planet',
    active: false,
  },
  {
    id: 9,
    text: 'The World at War',
    active: false,
  },
  {
    id: 10,
    text: 'Rick and Morty',
    active: false,
  },

  {
    id: 11,
    text: 'Sherlock',
    active: false,
  },
  {
    id: 12,
    text: 'Batman: The Animated Series',
    active: false,
  },
  {
    id: 13,
    text: 'The Office',
    active: false,
  },
  {
    id: 14,
    text: 'Firefly',
    active: false,
  },
  {
    id: 15,
    text: 'Seinfeld',
    active: false,
  },
  {
    id: 16,
    text: 'Freaks and Geeks',
    active: false,
  },
  {
    id: 17,
    text: 'Black Mirror',
    active: false,
  },
  {
    id: 18,
    text: 'The Last of Us',
    active: false,
  },
  {
    id: 19,
    text: ' Dark',
    active: false,
  },
  {
    id: 20,
    text: 'Mr. Bean',
    active: false,
  },
  {
    id: 21,
    text: 'Anne with an E',
    active: false,
  },
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{marginHorizontal: 24, marginTop: 200}}>
      <AnimatedChip
        activeId={3}
        data={CHIP_DATA}
        onPress={selected => {
          console.log(selected);
        }}
      />
    </SafeAreaView>
  );
}

export default App;
