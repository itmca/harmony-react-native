import React from 'react';
import {View, Text} from 'react-native';
import ScrollingView from './ScrollingView';
import TopFixed from './TopFixed';
import {styles} from './styles';

const StoryList = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <TopFixed />
      <ScrollingView />
    </View>
  );
};

export default StoryList;
