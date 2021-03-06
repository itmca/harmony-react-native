import React, {useState} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {styles} from '../../pages/StoryList/styles';
import StoryItem from './StoryItem';
import {Story} from '../../type/story';
import {GoToTopButton} from '../button/GoToTopButton';

type Props = {
  stories: Story[];
};

const ScrollingStoryList = ({stories}: Props): JSX.Element => {
  const [scrollPositionY, setScrollPositionY] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const positionY = event.nativeEvent.contentOffset.y;
    setScrollPositionY(positionY);
  };

  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false}>
        {stories.map((story: Story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </ScrollView>
      <GoToTopButton
        visible={scrollPositionY > 10}
        onPress={() => setScrollPositionY(0)}
      />
    </SafeAreaView>
  );
};

export default ScrollingStoryList;
