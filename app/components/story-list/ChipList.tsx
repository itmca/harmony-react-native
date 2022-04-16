import React, { useState } from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import ChipItem from './ChipItem';
import {styles} from './styles';

const chipData = [
  {
    key: "all",
    name: "전체",
  },
  {
    key: "childhood",
    name: "유년기",
  },
  {
    key: "teenager",
    name: "청소년기",
  },
  {
    key: "youth",
    name: "청년기",
  },
  {
    key: "middleAge",
    name: "중장년기",
  },
  {
    key: "oldAge",
    name: "노년기",
  },
  {
    key: "etc",
    name: "기타",
  },
];

const ChipList = (): JSX.Element => {
  const [selectedKey, setSelectedKey] = useState("all");

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedKey ? '#010440' : '#E5E5E5';
    const marginLeft = item.key === "all" ? 16 : 0;
    const color = item.key === selectedKey ? '#ffffff' : 'rgba(0, 0, 0, 0.87);';

  const onPress = (value) => {
    console.log(value);
    setSelectedKey(item.key);
  };

    return (
      <ChipItem
        item={item}
        onPress={() => onPress(item.key)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        marginLeft={{ marginLeft }}
      />
    );
  };

  return (
     <SafeAreaView style={styles.chipContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={chipData}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          // extraData={selectedId}
          horizontal={true}
        />
    </SafeAreaView>
  );
};

export default ChipList;
