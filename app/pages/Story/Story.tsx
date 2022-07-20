import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {CarouselData} from '../../components/story/ImageCarousel';
import StoryCarousel from '../../components/story/StoryCarousel';
import {SelectedStoryIdState} from '../../recoils/SelectedStoryIdRecoil';
import {styles} from './styles';

const data: CarouselData[] = [
  {
    id: 'image_url_00',
    url: 'https://images.unsplash.com/photo-1504004030892-d06adf9ffbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 'image_url_01',
    url: 'https://images.unsplash.com/photo-1595254310342-ac5cabb1ddc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'image_url_02',
    url: 'https://images.unsplash.com/photo-1612633201772-9a8f3df6bbf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 'image_url_03',
    url: 'https://images.unsplash.com/photo-1624537046903-1e4acee0487f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
  },
];

const Story = (): JSX.Element => {
  const [storyId, setStoryId] = useRecoilState(SelectedStoryIdState);
  // const { id } = route.params;
  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <StoryCarousel data={data} />
      <Text>Story</Text>
      <Text>{storyId}</Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1559744801-dc539b55737e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        }}
      />
    </SafeAreaView>
  );
};
export default Story;
