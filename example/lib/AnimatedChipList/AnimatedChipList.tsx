import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
/**
 * ? Local Imports
 */
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

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 4,
    marginBottom: 8,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 8,
  },
  textStyle: {
    fontWeight: '800',
  },
});
