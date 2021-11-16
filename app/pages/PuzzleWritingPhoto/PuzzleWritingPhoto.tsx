import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import React, {useEffect, useState} from 'react';

import {Dimensions, ScrollView, View} from 'react-native';

import SelectablePhoto from '../../components/PuzzleWirtingPhoto/SelectablePhoto';
import SelectedPhoto from '../../components/PuzzleWirtingPhoto/SelectedPhoto';

const DeviceWidth = Dimensions.get('window').width;

const PuzzleWritingPhoto = (): JSX.Element => {
  const [photos, setPhotos] = useState<Array<PhotoIdentifier>>();
  const [selectedPhotoList, setSelectedPhotoList] =
    useState<Array<PhotoIdentifier>>();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoIdentifier>();

  useEffect(() => {
    void getMedia();
  }, []);

  const getMedia = async () => {
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
                setSelectedPhoto(photo);
              }}
              //! size 수정 필요
              onDeselected={(photo: PhotoIdentifier) =>
                console.log('onDeselected!')
              }
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
