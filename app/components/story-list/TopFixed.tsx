import React, {useState} from 'react';
import {View} from 'react-native';
import ProfileSection from './ProfileSection';
import ChipList, {ChipMenu} from './ChipList';
import {styles} from '../../pages/StoryList/styles';

const profileData = {
  name: '할부지',
  id: 'profile-001',
};

const chipData: ChipMenu[] = [
  {
    key: 'all',
    name: '전체',
  },
  {
    key: 'childhood',
    name: '유년기',
  },
  {
    key: 'teenager',
    name: '청소년기',
  },
  {
    key: 'youth',
    name: '청년기',
  },
  {
    key: 'middleAge',
    name: '중장년기',
  },
  {
    key: 'oldAge',
    name: '노년기',
  },
  {
    key: 'etc',
    name: '기타',
  },
];

const TopFixed = (): JSX.Element => {
  return (
    <View style={styles.topFixedContainer}>
      <ProfileSection name={profileData.name} />
      <ChipList data={chipData} />
    </View>
  );
};

export default TopFixed;
