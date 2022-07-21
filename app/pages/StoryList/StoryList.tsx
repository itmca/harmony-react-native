import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ScrollingStoryList from '../../components/story-list/ScrollingStoryList';
import HeroStoryOverview from '../../components/story-list/HeroStoryOverview';
import {Divider} from 'react-native-paper';
import {useRecoilValue} from 'recoil';
import {heroState} from '../../recoils/HeroRecoil';
import {Hero} from '../../type/hero';
import {Story, StoryTag} from '../../type/story';
import {useAxios} from '../../hooks/network.hooks';

type HeroStorySet = {
  stories: Story[];
  tags: StoryTag[];
};

type Props = {
  route: any;
};

const StoryList = ({route}: Props): JSX.Element => {
  const hero = useRecoilValue<Hero>(heroState);

  const {response: heroStorySet, refetch} = useAxios<HeroStorySet>({
    url: '/stories',
    params: {
      heroNo: hero.heroNo,
    },
  });

  const {stories, tags} = heroStorySet || {
    stories: [],
    tags: [],
  };

  const [displayStories, setDisplayStories] = useState<Story[]>([]);
  const [selectedTagKey, setSelectedTagKey] = useState<string>('');

  useEffect(() => {
    refetch({
      params: {
        heroNo: hero.heroNo,
      },
    });
  }, [hero.heroNo, route.params?.event]);

  useEffect(() => {
    if (!stories || stories.length === 0) return;

    setDisplayStories(stories || []);
    setSelectedTagKey('');
  }, [stories]);

  useEffect(() => {
    if (!selectedTagKey) return;

    setDisplayStories(
      stories.filter(story =>
        story.tags.some(tag => tag.key === selectedTagKey),
      ),
    );
  }, [selectedTagKey]);

  return (
    <View style={{flex: 1}}>
      <HeroStoryOverview
        hero={hero}
        storyCount={stories.length}
        tags={tags}
        onSelect={setSelectedTagKey}
      />
      <Divider />
      <ScrollingStoryList stories={displayStories} />
    </View>
  );
};

export default StoryList;
