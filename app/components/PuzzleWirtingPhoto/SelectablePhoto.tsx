import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckCover, Container} from './styles';

type SelectablePhotoProps = {
  onSelected: Function;
  onDeselected: Function;
  size: number;
  url: string;
};

const SelectablePhoto = ({
  onSelected,
  onDeselected,
  size,
  url,
}: SelectablePhotoProps): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  const _onPress = () => {
    isSelected === true ? onDeselected() : onSelected();
    setIsSelected(selected => !selected);
  };

  return (
    <TouchableOpacity onPress={_onPress}>
      <Container style={{width: size, height: size}}>
        <Image style={{width: size, height: size}} source={{uri: url}} />
        {isSelected ? (
          <CheckCover style={{height: '100%', width: '100%'}}>
            <Icon name="checkmark" size={70} color={'white'} />
          </CheckCover>
        ) : null}
      </Container>
    </TouchableOpacity>
  );
};

export default SelectablePhoto;
