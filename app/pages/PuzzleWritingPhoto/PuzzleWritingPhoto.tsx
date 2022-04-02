import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import HelpQuestion from '../../components/help-question/HelpQuestion';

import SelectablePhoto from '../../components/photo/SelectablePhoto';
import SelectedPhoto from '../../components/photo/SelectedPhoto';
import TopDescriptionBox from '../../components/photo/TopDescriptionBox';
import {
  mainSelectedPhotoState,
  selectedPhotoState,
} from '../../recoils/SelectedPhotoRecoil';

const DeviceWidth = Dimensions.get('window').width;

const PuzzleWritingPhoto = (): JSX.Element => {
  const [photos, setPhotos] = useState<Array<PhotoIdentifier>>();
  const setSelectedPhotoList = useSetRecoilState(selectedPhotoState);
  const selectedPhoto = useRecoilValue(mainSelectedPhotoState);

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
      <TopDescriptionBox />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SelectedPhoto size={DeviceWidth} photo={selectedPhoto} />
        <ScrollView
          style={{height: 500}}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {photos?.map((photo, index) => {
            return (
              <SelectablePhoto
                key={index}
                onSelected={(photo: PhotoIdentifier) => {
                  setSelectedPhotoList(prev => prev.concat([photo]));
                }}
                //! size 수정 필요
                onDeselected={(photo: PhotoIdentifier) => {
                  setSelectedPhotoList(prev =>
                    prev.filter(e => e.node.image.uri !== photo.node.image.uri),
                  );
                }}
                size={DeviceWidth / 3}
                photo={photo}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default PuzzleWritingPhoto;
