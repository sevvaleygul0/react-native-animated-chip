import React, {useState} from 'react';
import {View} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './AnimatedChip.style';
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

type ChipType = {
  id: string | number;
  text: string;
  active?: boolean;
};

type AnimatedChipType = {
  data: ChipType;
  activeBackgroundColor?: string;
  activeTextColor?: string;
  onPress: (chip: ChipType) => void;
};

const AnimatedChip: React.FC<AnimatedChipType> = ({data}) => {
  const gravity = useAnimatedSensor(SensorType.GRAVITY);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(gravity.sensor.value.x * 20)},
        {translateY: withSpring(gravity.sensor.value.y * 20)},
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}></Animated.View>
  );
};

export default AnimatedChip;
