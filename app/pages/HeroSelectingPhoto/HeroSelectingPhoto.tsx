import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import HelpQuestion from '../../components/help-question/HelpQuestion';

import SelectablePhoto from '../../components/photo/SelectablePhoto';
import SelectedPhoto from '../../components/photo/SelectedPhoto';
import TopDescriptionBox from '../../components/photo/TopDescriptionBox';
import {selectedHeroPhotoState} from '../../recoils/HeroRecoil';
import {
  mainSelectedPhotoState,
  selectedPhotoState,
} from '../../recoils/SelectedPhotoRecoil';

const DeviceWidth = Dimensions.get('window').width;

const HeroSelectingPhoto = (): JSX.Element => {
  const [photos, setPhotos] = useState<Array<PhotoIdentifier>>();
  const setSelectedPhotoList = useSetRecoilState(selectedPhotoState);
  const [selectedPhoto, setSelectedPhoto] = useRecoilState(
    selectedHeroPhotoState,
  );

  useEffect(() => {
    void initPhotos();
  }, []);

  const initPhotos = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      //TODO: Android 권한 없는 경우 Alert 필요
      return;
    }

    const result = await CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    });
    setPhotos(result.edges);
  };

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  return (
    <>
      <HelpQuestion />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView
          style={{height: 500}}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {photos?.map((photo, index) => {
            const isDisabled =
              selectedPhoto?.node.image.uri === photo.node.image.uri;
            console.log(isDisabled, index, selectedPhoto?.node.image);

            return (
              <SelectablePhoto
                key={`${index}-${String(isDisabled)}`}
                onSelected={(photo: PhotoIdentifier) => {
                  setSelectedPhoto(photo);
                }}
                //! size 수정 필요
                onDeselected={() => {
                  if (isDisabled == false) setSelectedPhoto(undefined);
                }}
                size={DeviceWidth / 3}
                photo={photo}
                initalSelected={isDisabled}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default HeroSelectingPhoto;
