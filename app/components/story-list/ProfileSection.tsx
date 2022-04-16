import React, { useState } from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import ChipList from './ChipList';
import {styles} from './styles';

type ProfileName = {
  name: string;
};

const ProfileSection = ({name}: ProfileName): JSX.Element => {
  return (
     <View style={styles.profileContainer}>
       <Image
            style={styles.profileImage}
            resizeMode="cover"
            source={{
              uri: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202110/17/7ad58e84-36e3-4787-9276-0b8468f5789a.jpg',
            }}
          />
        <Text style={styles.profileTitle}>
          햇살처럼 눈부셨던 지난 날의 이야기
        </Text>
        <Text style={styles.profileText}>
          {name} 님의 퍼즐 21조각이 맞춰졌습니다.👏👏👏
        </Text>
    </View>
  );
};

export default ProfileSection;
