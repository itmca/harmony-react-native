import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeroSetting from '../../pages/HeroSetting/HeroSetting';
import GoBackHeaderLeft from '../../components/header/GoBackHeaderLeft';
import HeroRegister from '../../pages/HeroRegister/HeroRegister';
import HeroModification from '../../pages/HeroModification/HeroModification';
import HeroSelectingPhoto from '../../pages/HeroSelectingPhoto/HeroSelectingPhoto';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';

const Stack = createNativeStackNavigator();

const CharacterSettingNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="CharacterSetting"
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="CharacterSetting"
        component={HeroSetting}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '주인공 관리',
        }}
      />
      <Stack.Screen
        name="CharacterRegister"
        component={HeroRegister}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '주인공 추가',
        }}
      />
      <Stack.Screen
        name="CharacterModification"
        component={HeroModification}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '주인공 정보 수정',
        }}
      />
      <Stack.Screen
        name="CharacterSelectingPhoto"
        component={HeroSelectingPhoto}
        options={{
          headerLeft: () => <GoBackHeaderLeft iconType="chevron-left" />,
          title: '주인공 사진 선택',
          headerRight: () => (
            <WritingHeaderRight
              text="완료"
              customAction={() => {
                console.log('test');
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CharacterSettingNavigator;
