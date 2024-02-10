import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
/**
 * ? Local Imports
 */
import styles from "./AnimatedChip.style";
import { ChipType } from "../AnimatedChipList/AnimatedChipList";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type AnimatedChipType = {
  isActive?: boolean;
  activeBackgroundColor?: string;
  backgroundColor?: string;
  activeTextColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  textColor?: string;
  item: ChipType;
  onSelectItem: () => void;
};

const AnimatedChip: React.FC<AnimatedChipType> = (props) => {
  const {
    buttonStyle,
    textStyle,
    activeBackgroundColor = "#d4a8d6",
    backgroundColor = "#EEE7D1",
    activeTextColor = "#7d3577",
    textColor = "#DCCA92",
  } = props;
  const animation = useSharedValue(0);

  const startAnimation = () => {
    animation.value = withSequence(withTiming(-4, { duration: 500 }));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${animation.value}deg` }],
    };
  });

  const onSelect = () => {
    startAnimation();
    props.onSelectItem();
  };

  return (
    <AnimatedTouchable
      activeOpacity={1}
      style={[
        styles.container,
        animatedStyle,
        buttonStyle,
        {
          backgroundColor: props.isActive
            ? activeBackgroundColor
            : backgroundColor,
        },
      ]}
      onPress={() => {
        onSelect();
      }}
    >
      <Text
        style={[
          styles.textStyle,
          textStyle,
          { color: props.isActive ? activeTextColor : textColor },
        ]}
      >
        {props.item.text}
      </Text>
    </AnimatedTouchable>
  );
};
export default AnimatedChip;
