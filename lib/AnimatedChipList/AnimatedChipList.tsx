import React, {useState} from 'react';
import {FlatList, ListRenderItem, TextStyle, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './AnimatedChipList.style';
import AnimatedChip from '../AnimatedChip/AnimatedChip';

export type ChipType = {
  id: string | number;
  text: string;
  active?: boolean;
};

type AnimatedChipListType = {
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
const AnimatedChipList: React.FC<AnimatedChipListType> = ({
  data,
  contentContainerStyle,
  activeId,
  ...refs
}) => {
  const [activeValue, setActiveValue] = useState<string | number>(activeId);

  const renderItem: ListRenderItem<ChipType> = ({item}) => {
    return (
      <AnimatedChip
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

export default AnimatedChipList;
