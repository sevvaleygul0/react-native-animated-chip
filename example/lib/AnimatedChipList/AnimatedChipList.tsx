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

type AnimatedChipListProps = {
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

const AnimatedChipList: React.FC<AnimatedChipListProps> = ({
  data,
  activeId,
  contentContainerStyle,
  onPress,
  ...chipProps
}) => {
  const [activeChipId, setActiveChipId] = useState<string | number | undefined>(
    activeId,
  );

  const handleChipSelect = (chip: ChipType) => {
    activeChipId && activeChipId === chip.id
      ? setActiveChipId(undefined)
      : setActiveChipId(chip.id);
    onPress?.(chip);
  };

  const renderChip: ListRenderItem<ChipType> = ({item}) => (
    <AnimatedChip
      item={item}
      isActive={activeChipId === item.id}
      onSelectItem={() => handleChipSelect(item)}
      {...chipProps}
    />
  );

  return (
    <FlatList
      data={data}
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}
      keyExtractor={item => `${item.id}`}
      renderItem={renderChip}
    />
  );
};

export default AnimatedChipList;
