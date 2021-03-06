import React from 'react';
import {Image} from 'react-native';
import {BlackContainer, Container} from './styles';
import {PhotoIdentifier} from '@react-native-community/cameraroll';

type SelectablePhotoProps = {
  size: number;
  photo: PhotoIdentifier | undefined;
};

const SelectedPhoto = ({size, photo}: SelectablePhotoProps): JSX.Element => {
  return (
    <Container style={{width: size, height: size}}>
      {photo === undefined ? (
        <BlackContainer style={{width: size, height: size}} />
      ) : (
        <Image
          style={{width: size, height: size}}
          source={{uri: photo.node.image.uri}}
        />
      )}
    </Container>
  );
};

export default SelectedPhoto;
