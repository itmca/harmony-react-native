import * as React from 'react';

const PuzzleWritingBridge = ({ navigation }): JSX.Element => {
  navigation.navigate('NoTab', {screenName: 'PuzzleWritingQuestion'});
  return <></>;
};

export default PuzzleWritingBridge;
