import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {userState} from '../../recoils/UserRecoil';
import {isLoggedInState} from '../../recoils/AuthRecoil';
import {useFocusEffect} from '@react-navigation/native';
import {Avatar, Divider, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

type Props = {
  navigation: any;
};

const Profile = ({navigation}: Props): JSX.Element | null => {
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
      <View style={styles.accountInfoContainer}>
        <Avatar.Text
          style={styles.accountAvatar}
          size={40}
          label={user.userNickName.substr(0, 1)}
        />
        <Text style={styles.accountNickName}>{user.userNickName} 님</Text>
        <TouchableOpacity
          style={styles.accountModificationButton}
          onPress={() => {
            navigation.push('NoTab', {
              screen: 'AccountSettingNavigator',
              params: {
                screen: 'AccountModification',
              },
            });
          }}>
          <Icon size={24} name={'chevron-right'} />
        </TouchableOpacity>
      </View>
      <View style={styles.customDivider}></View>
      <View style={styles.listContainer}>
        <List.Item
          title="공지사항"
          left={props => (
            <List.Icon {...props} style={styles.listItemIcon} icon="bell" />
          )}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          title="주인공 관리"
          left={props => (
            <List.Icon
              {...props}
              style={styles.listItemIcon}
              icon="account-supervisor"
            />
          )}
          onPress={() => {
            navigation.push('NoTab', {
              screen: 'CharacterSettingNavigator',
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
