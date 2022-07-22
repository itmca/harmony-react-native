import React from 'react';
import {View} from 'react-native';
import HeroOverview from './HeroOverview';
import SwipingStoryTagChips from './SwipingStoryTagChips';
import {styles} from '../../pages/StoryList/styles';
import {Hero} from '../../type/hero';
import {StoryTag} from '../../type/story';

type Props = {
  hero: Hero;
  storyCount: number;
  tags: StoryTag[];
  onSelect: (tagKey: string) => void;
};

const HeroStoryOverview = ({
  hero,
  storyCount,
  tags,
  onSelect,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <HeroOverview hero={hero} storyCount={storyCount} />
      <SwipingStoryTagChips tags={tags} onSelect={onSelect} />
    </View>
  );
};

export default HeroStoryOverview;
