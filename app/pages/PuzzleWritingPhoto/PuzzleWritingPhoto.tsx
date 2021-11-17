import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import React, {useEffect, useState} from 'react';

import {Dimensions, ScrollView, View} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import SelectablePhoto from '../../components/PuzzleWirtingPhoto/SelectablePhoto';
import SelectedPhoto from '../../components/PuzzleWirtingPhoto/SelectedPhoto';
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
    const result = await CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    });
    setPhotos(result.edges);
  };

  return (
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
  );
};

export default PuzzleWritingPhoto;
