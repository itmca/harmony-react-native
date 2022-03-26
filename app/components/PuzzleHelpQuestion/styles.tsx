import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingHorizontal: 16,
	},
	containerWrap: {
		width: '100%',
		paddingLeft:15,
		paddingRight: 15,
		paddingBottom: 15,
		height: 88,
		backgroundColor: '#ffffff',
	},
	div: {
		position: 'relative',
		width: '100%',
		height: 73,
		backgroundColor: '#ffffff',
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.15,
		elevation: 10,
		marginTop: 3,
		paddingLeft: 15,
		paddingRight: 36.15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	smallDiv: {
		width: 32,
		height: 32,
		backgroundColor: '#ffffff',
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.15,
		elevation: 10,
		marginTop: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	puzzle: {
		width: 33.94,
		height: 33.25
	},
	question: {
		marginLeft: 24.5,
		marginRight: 36.15,
		fontWeight: 'bold',
		color: '#707070',
		fontSize: 14,
		lineHeight: 22,
		letterSpacing: 0.15
	},
	close: {
		position: 'absolute',
		right: 0,
		width: 24.5,
		height: 24
	},
	closeIcon: {
		position: 'absolute',
		right: 15,
		width: 24.5,
		height: 24,
		bottom: 11,
	},
	box: {
		width: '100%',
		height: 48,
		backgroundColor: '#93B0D0',
		opacity: 0.2
	}
});