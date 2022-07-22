import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import StoryPhotoCarousel from '../../components/story/StoryPhotoCarousel';
import {SelectedStoryKeyState} from '../../recoils/SelectedStoryIdRecoil';
import {styles} from './styles';
import {useAxios} from '../../hooks/network.hooks';
import {Story} from '../../type/story';
import {getStoryDisplayTagsDate} from '../../utils/story.display.util';

const StoryDetail = (): JSX.Element => {
  const storyKey = useRecoilValue(SelectedStoryKeyState);
  const [story, setStory] = useState<Story>();

  const {response, refetch} = useAxios<Story>({
    url: `/stories/${storyKey}`,
  });

  useEffect(() => {
    setStory(undefined);

    refetch({
      url: `/stories/${storyKey}`,
    });
  }, [storyKey]);

  useEffect(() => {
    if (!response) return;

    setStory(response);
  }, [response]);

  if (!story) {
    return <></>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StoryPhotoCarousel
          photos={story?.photos}
          containerStyle={{
            height: 360,
          }}
        />
        <View style={styles.textContainer}>
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 24}}>{story.title}</Text>
            <Text style={{fontSize: 12}}>{getStoryDisplayTagsDate(story)}</Text>
          </View>
          <Text>{story.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default StoryDetail;
