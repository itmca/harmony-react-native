import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {isLoggedInState, userState} from '../../recoils/UserRecoil';
import {useFocusEffect} from '@react-navigation/native';
import {List, Divider, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

const Profile = ({navigation}): JSX.Element => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  useFocusEffect(() => {
    if (!isLoggedIn) {
      navigation.push('NoTab', {
        screen: 'LoginRegisterNavigator',
        params: {
          screen: 'LoginMain',
        },
      });
    }
  });

  const user = useRecoilValue(userState);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 80,
          width: '100%',
        }}>
        <Avatar.Text
          style={{marginLeft: 20}}
          size={40}
          label={user.userNickName.substr(0, 1)}
        />
        <Text style={{marginLeft: 24, fontSize: 24}}>
          {user.userNickName} 님
        </Text>
        <TouchableOpacity style={{position: 'absolute', right: 16}}>
          <Icon size={24} name={'chevron-right'} />
        </TouchableOpacity>
      </View>
      <View style={{height: 8, backgroundColor: '#E9E9E9'}}></View>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}>
        <List.Item
          title="공지사항"
          left={props => (
            <List.Icon {...props} style={{marginLeft: 8}} icon="bell" />
          )}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          title="주인공 관리"
          left={props => (
            <List.Icon
              {...props}
              style={{marginLeft: 8}}
              icon="account-supervisor"
            />
          )}
          onPress={() => {
            navigation.navigate('NoTab', {
              screen: 'SettingNavigator',
              params: {
                screen: 'CharacterSetting',
              },
            });
          }}
        />
        <Divider />
      </View>
    </View>
  );
};
export default Profile;
