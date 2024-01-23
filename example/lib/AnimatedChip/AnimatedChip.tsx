import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './AnimatedChip.style';
import Animated, {
  SensorType,
  interpolate,
  useAnimatedSensor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type ChipType = {
  id: string | number;
  text: string;
  active?: boolean;
};

type AnimatedChipType = {
  data: ChipType[];
  activeBackgroundColor?: string;
  activeTextColor?: string;
  buttonStyle?: ViewStyle;
  onPress?: (chip: ChipType) => void;
};
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedChip: React.FC<AnimatedChipType> = ({
  data,
  onPress,
  buttonStyle,
}) => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${offset.value}deg`}],
    };
  });

  const renderItem = ({item, index}) => {
    return (
      <AnimatedTouchable
        id={index}
        style={[styles.container, animatedStyle, buttonStyle]}
        onPress={() => {
          offset.value = withTiming(-3, {duration: 500});
          onPress?.(item);
        }}>
        <Text>{item.text}</Text>
      </AnimatedTouchable>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderItem}
    />
  );
};

export default AnimatedChip;
