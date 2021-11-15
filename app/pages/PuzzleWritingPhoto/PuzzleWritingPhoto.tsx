import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import React, {useEffect, useState} from 'react';

import {ScrollView, View} from 'react-native';

import SelectablePhoto from '../../components/PuzzleWirtingPhoto/SelectablePhoto';

const PuzzleWritingPhoto = (): JSX.Element => {
  const [photos, setPhotos] = useState<Array<PhotoIdentifier>>();

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
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {photos?.map((photo, index) => {
          return (
            <SelectablePhoto
              key={index}
              onSelected={() => {
                console.log('onSelected!');
              }}
              //! size 수정 필요
              onDeselected={() => console.log('onDeselected!')}
              size={130}
              url={photo.node.image.uri}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PuzzleWritingPhoto;
