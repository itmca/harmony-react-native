/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import {styles} from './styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const PuzzleHelpQuestion = (): JSX.Element => {
	const [open, setOpen] = useState(true);
	const onToggle = () => setOpen(!open);
    
	return (
		<View style={styles.container}>
			<View style={open ? styles.div:styles.smallDiv}>
				<TouchableOpacity onPress={() => {!open ? setOpen((open) => !open):undefined;}}>
					<Image 
						source={require('../../assets/images/puzzle_blue_piece.png')} 
						style={open ? styles.puzzle:{width: 24, height: 24}} 
					/>
				</TouchableOpacity>
				{open ?
					<Text style={styles.question}>
                    초등학교 시절 친구들과 있었던 일 중 가장 기억에 남는 이야기를 들려주세요.
					</Text> : null}
				<TouchableOpacity onPress={onToggle}>
					{open ? 
						<Image 
							source={require('../../assets/images/close.png')} 
							style={styles.close} 
						/> : null}
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PuzzleHelpQuestion;