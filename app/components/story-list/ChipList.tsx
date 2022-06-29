import React, { useState } from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { useRecoilState } from 'recoil';
import { SelectedCategoryState } from '../../recoils/SelectedCategoryRecoil';
import ChipItem from './ChipItem';
import {styles} from './styles';

export type ChipMenu = {
  key: string;
  name: string;
};

type Props = {
  data: ChipMenu[];
  index?: number;
};

const ChipList = ({data}: Props): JSX.Element => {
  const [selectedKey, setSelectedKey] = useRecoilState(SelectedCategoryState);

  function renderItem({item}) {
    const backgroundColor = item.key === selectedKey ? '#010440' : '#E5E5E5';
    const marginLeft = item.key === 'all' ? 16 : 0;
    const color = item.key === selectedKey ? '#ffffff' : 'rgba(0, 0, 0, 0.87);';

    const onPress = (key: string) => {
      console.log(key);
      setSelectedKey(key);
    };

    return (
      <ChipItem
        item={item}
        onPress={() => onPress(item.key)}
        backgroundColor={backgroundColor}
        textColor={color}
        marginLeft={marginLeft}
      />
    );
  }

  return (
    <SafeAreaView style={styles.chipContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

export default ChipList;
