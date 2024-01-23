import React from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
/**
 * ? Local Imports
 */
import styles from './AnimatedChip.style';

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
  contentContainerStyle?: ViewStyle;
  onPress?: (chip: ChipType) => void;
};
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedChip: React.FC<AnimatedChipType> = ({
  data,
  onPress,
  buttonStyle,
  contentContainerStyle,
}) => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${offset.value}deg`}],
    };
  });

  const renderItem: ListRenderItem<ChipType> = ({item}) => {
    return (
      <AnimatedTouchable
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
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderItem}
    />
  );
};

export default AnimatedChip;
