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
  withSequence,
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

type ItemProps = {
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

const Item = (props: ItemProps) => {
  const {
    buttonStyle,
    textStyle,
    activeBackgroundColor = '#d4a8d6',
    backgroundColor = '#EEE7D1',
    activeTextColor = '#7d3577',
    textColor = '#DCCA92',
  } = props;
  const animation = useSharedValue(0);

  const startAnimation = () => {
    animation.value = withSequence(withTiming(-4, {duration: 500}));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${animation.value}deg`}],
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
      }}>
      <Text
        style={[
          styles.textStyle,
          textStyle,
          {color: props.isActive ? activeTextColor : textColor},
        ]}>
        {props.item.text}
      </Text>
    </AnimatedTouchable>
  );
};

const AnimatedChip: React.FC<AnimatedChipType> = ({
  data,
  contentContainerStyle,
  activeId,
  ...refs
}) => {
  const [activeValue, setActiveValue] = useState<string | number>(activeId);

  const renderItem: ListRenderItem<ChipType> = ({item}) => {
    return (
      <Item
        item={item}
        onSelectItem={() => {
          setActiveValue(item.id);
        }}
        isActive={activeValue === item.id}
        {...refs}
      />
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
