import React from 'react';
import {View} from 'react-native';
import ProfileSection from '../../components/story-list/ProfileSection';
import ChipList from '../../components/story-list/ChipList';
import {styles} from './styles';

const profileData = {
  name: "할부지",
  id: "profile-001"
};

const StoryListTopFixed = (): JSX.Element => {
  return (
    <View style={styles.topFixedContainer}>
      <ProfileSection name={profileData.name} />
      <ChipList />
    </View>
  );
};

export default StoryListTopFixed;
