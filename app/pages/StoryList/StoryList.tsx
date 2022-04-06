import React from 'react';
import {View, Text} from 'react-native';
import StoryListScrollView from './StoryListScrollView';
import StoryListTopFixed from './StoryListTopFixed';
import {styles} from './styles';

const StoryList = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <StoryListTopFixed />
      <StoryListScrollView />
    </View>
  );
};

export default StoryList;
