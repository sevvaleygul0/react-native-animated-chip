import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  TextStyle,
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
  activeId: string | number;
  activeBackgroundColor?: string;
  backgroundColor?: string;
  activeTextColor?: string;
  buttonStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  textStyle?: TextStyle;
  textColor?: string;
  onPress?: (chip: ChipType) => void;
};
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedChip: React.FC<AnimatedChipType> = ({
  data,
  onPress,
  buttonStyle,
  contentContainerStyle,
  textStyle,
  activeId,
  activeBackgroundColor = '#d4a8d6',
  backgroundColor = '#eee1b7',
  activeTextColor = '#7d3577',
  textColor = '#c9af60',
}) => {
  const [activeValue, setActiveValue] = useState<string | number>(activeId);
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${offset.value}deg`}],
    };
  });

  const renderItem: ListRenderItem<ChipType> = ({item}) => {
    const isActive = activeValue === item.id;
    return (
      <AnimatedTouchable
        activeOpacity={1}
        style={[
          styles.container,
          isActive ? animatedStyle : undefined,
          buttonStyle,
          {backgroundColor: isActive ? activeBackgroundColor : backgroundColor},
        ]}
        onPress={() => {
          setActiveValue(item.id);
          offset.value = withTiming(-3, {duration: 500});
          onPress?.(item);
        }}>
        <Text
          style={[textStyle, {color: isActive ? activeTextColor : textColor}]}>
          {item.text}
        </Text>
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
