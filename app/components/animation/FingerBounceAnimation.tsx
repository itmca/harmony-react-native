import React, {useEffect} from 'react';
import {Animated, Image, Platform, Text} from 'react-native';
import {styles} from './styles';

type Props = {
  text: string;
  durationSeconds?: number;
};

const FingerBounceAnimation = ({text, durationSeconds = 0}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bounceValue, setBounceValue] = React.useState(new Animated.Value(20));
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    if (durationSeconds > 0) {
      setTimeout(() => {
        setVisible(false);
      }, durationSeconds * 1000);
    }
  }, []);

  React.useEffect(() => {
    playBounce();
  }, []);

  const playBounce = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 0,
          useNativeDriver: true,
          duration: 2000,
        }),
        Animated.timing(bounceValue, {
          toValue: 20,
          useNativeDriver: true,
          duration: 2000,
        }),
      ]),
    ).start();
  };

  const bounce = bounceValue.interpolate({
    inputRange: [0, Platform.OS === 'ios' ? 5 : 25],
    outputRange: [Platform.OS === 'ios' ? 5 : 25, 0],
  });

  if (!visible) return null;

  return (
    <Animated.View
      style={{
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 35,
        transform: [{translateY: bounce}],
      }}>
      <Text style={styles.animationText}>{text}</Text>
      <Image
        style={styles.fingerImage}
        source={require('../../assets/images/finger.png')}
      />
    </Animated.View>
  );
};

export default FingerBounceAnimation;
