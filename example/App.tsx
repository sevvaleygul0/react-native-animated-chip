import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AnimatedChip from './lib/AnimatedChipList/AnimatedChipList';

const CHIP_DATA = [
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
  {
    id: 4,
    text: 'The Last of Us',
  },
  {
    id: 5,
    text: 'Game of Thrones',
  },
  {
    id: 6,
    text: 'Breaking Bad',
  },
  {
    id: 7,
    text: 'Chernobyl',
  },
  {
    id: 8,
    text: '🪐 Our Planet',
  },
  {
    id: 9,
    text: 'The World at War',
  },
  {
    id: 10,
    text: 'Rick and Morty',
  },

  {
    id: 11,
    text: '🕵🏼‍♂️ Sherlock',
  },
  {
    id: 12,
    text: 'Batman: The Animated Series',
  },
  {
    id: 13,
    text: 'The Office',
  },
  {
    id: 14,
    text: 'Firefly',
  },
  {
    id: 15,
    text: 'Seinfeld',
  },
  {
    id: 16,
    text: 'Freaks and Geeks',
  },
  {
    id: 17,
    text: '🪞 Black Mirror',
  },
  {
    id: 18,
    text: 'The Last of Us',
  },
  {
    id: 19,
    text: ' Dark',
  },
  {
    id: 20,
    text: 'Mr. Bean',
  },
  {
    id: 21,
    text: '👩🏼‍🌾 Anne with an E',
  },
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Text style={styles.textStyle}>Choose your favorite TV series 📺</Text>
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
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#7D3577',
    marginBottom: 32,
  },
  safeAreaStyle: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 150,
  },
});
export default App;
