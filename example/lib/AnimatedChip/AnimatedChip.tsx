import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
/**
 * ? Local Imports
 */
import styles from './AnimatedChip.style';
import {ChipType} from '../AnimatedChipList/AnimatedChipList';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type AnimatedChipProps = {
  isActive: boolean;
  activeBackgroundColor?: string;
  backgroundColor?: string;
  activeTextColor?: string;
  textColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  item: ChipType;
  onSelectItem: () => void;
};

const AnimatedChip: React.FC<AnimatedChipProps> = ({
  isActive,
  activeBackgroundColor = '#d4a8d6',
  backgroundColor = '#EEE7D1',
  activeTextColor = '#7d3577',
  textColor = '#DCCA92',
  buttonStyle,
  textStyle,
  item,
  onSelectItem,
}) => {
  const triggerAnimation = useSharedValue(-2);

  // Derived value for rotation based on isActive
  const rotationValue = useDerivedValue(() => {
    return withTiming(isActive ? -2 : 0, {duration: 800});
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotationValue.value}deg`}],
  }));

  const handlePress = () => {
    triggerAnimation.value = (triggerAnimation.value + 1) % 2;

    runOnJS(onSelectItem)();
  };

  return (
    <AnimatedTouchable
      activeOpacity={1}
      style={[
        styles.container,
        animatedStyle,
        buttonStyle,
        {backgroundColor: isActive ? activeBackgroundColor : backgroundColor},
      ]}
      onPress={handlePress}>
      <Text
        style={[
          styles.textStyle,
          textStyle,
          {color: isActive ? activeTextColor : textColor},
        ]}>
        {item.text}
      </Text>
    </AnimatedTouchable>
  );
};

export default AnimatedChip;
