/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRecoilValue} from 'recoil';
import {PuzzleWritingInput} from '../../recoils/PuzzleWritingInput';

const PuzzleHelpQuestion = (): JSX.Element => {
  const puzzleHelpInputValue = useRecoilValue(PuzzleWritingInput);
  const [open, setOpen] = useState(true);
  const onToggle = () => setOpen(!open);

  return (
    <View style={styles.containerWrap}>
      <View style={open ? styles.div : styles.smallDiv}>
        <TouchableOpacity
          onPress={() => {
            !open ? setOpen(open => !open) : undefined;
          }}>
          <Image
            source={require('../../assets/images/puzzle_blue_piece.png')}
            style={open ? styles.puzzle : {width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/puzzle_help_line_vertical.png')}
          style={
            open ? {width: 1, height: 38, marginLeft: 12} : {display: 'none'}
          }
        />
        {open ? (
          <Text style={styles.question}>
            { puzzleHelpInputValue }
          </Text>) : null }
      </View>
      <TouchableOpacity onPress={onToggle}>
			{open ? 
				<Icon 
					name='chevron-left' size={24} 
					style={styles.closeIcon}
				/> : null
			}
      </TouchableOpacity>
    </View>
  );
};

export default PuzzleHelpQuestion;
