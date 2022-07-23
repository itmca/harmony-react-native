import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeroSetting from '../../pages/HeroSetting/HeroSetting';
import GoBackHeaderLeft from '../../components/header/GoBackHeaderLeft';
import HeroRegister from '../../pages/HeroRegister/HeroRegister';
import HeroModification from '../../pages/HeroModification/HeroModification';
import HeroSelectingPhoto from '../../pages/HeroSelectingPhoto/HeroSelectingPhoto';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import {useAxiosPromise} from '../../hooks/network.hooks';
import {useRecoilState, useRecoilValue, useResetRecoilState} from 'recoil';
import {heroState, selectedHeroPhotoState} from '../../recoils/HeroRecoil';
import {Hero} from '../../type/hero';
import {PhotoIdentifier} from '@react-native-community/cameraroll';
import {IMG_TYPE} from '../../constants/uploadFileType.constants';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const CharacterSettingNavigator = (): JSX.Element => {
  const navigation = useNavigation<any>();
  const [hero, setHeroState] = useRecoilState(heroState);
  const seletedHeroPhoto: PhotoIdentifier | undefined = useRecoilValue(
    selectedHeroPhotoState,
  );
  const resetHeroPhoto = useResetRecoilState(selectedHeroPhotoState);
  const heroNo = hero.heroNo;
  const url = `/heroes/profile/${heroNo}`;
  const {response: response, refetch: refetch} = useAxiosPromise<void>(
    {
      method: 'post',
      url: url,
      headers: {'Content-Type': 'multipart/form-data'},
    },
    {disableInitialRequest: true},
  );

  const updateHeroImage = () => {
    const formData = new FormData();

    addHeroInFormData(formData);
    addHeroPhotoInFormData(formData);

    refetch({data: formData});
  };

  const addHeroInFormData = (formData: FormData) => {
    const photo: PhotoIdentifier | undefined = seletedHeroPhoto;

    if (!photo) return;

    const currentTime = Date.now();
    const imgName = photo.node.image.filename;
    const imgPath = `/hero/profile/${heroNo}/${currentTime}_${String(imgName)}`;
    const currentHero: Hero = {
      ...hero,
      imageURL: imgPath,
    };

    formData.append('hero', {
      string: JSON.stringify(currentHero),
      type: 'application/json',
    });
  };

  const addHeroPhotoInFormData = (formData: FormData) => {
    const photo: PhotoIdentifier | undefined = seletedHeroPhoto;

    if (!photo) return;

    const fileName = photo.node.image.filename;
    const uri = photo.node.image.uri;
    const type = IMG_TYPE;
    console.log('uplodae File', fileName, uri, type);
    formData.append('photo', {
      uri: uri,
      type: type,
      name: fileName,
    });
  };

  React.useEffect(() => {
    if (!response) return;

    void response
      .then(() => {
        const photo = seletedHeroPhoto;
        const img = photo.node.image.uri;
        const currentHero: Hero = {
          ...hero,
          imageURL: img,
        };

        setHeroState(currentHero);
        Alert.alert('프로필 사진이 업데이트 성공.', '', [
          {
            text: '확인',
            onPress: () => {
              resetHeroPhoto();
              navigation.goBack();
            },
          },
        ]);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('프로필 사진 업데이트 실패', '재시도 하시겠습니까?', [
          {
            text: '확인',
            onPress: () => {
              resetHeroPhoto();
              updateHeroImage();
            },
          },
          {
            text: '취소',
            onPress: () => {
              resetHeroPhoto();
              navigation.goBack();
            },
          },
        ]);
      });
  }, [response]);

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
              text="등록"
              customAction={() => {
                // updateHeroImage();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CharacterSettingNavigator;
