import React, {useState} from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import StoryListItem, {
  ItemData,
} from '../../components/story-list/StoryListItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAxiosPromise } from '../../hooks/network.hooks';
import { authState } from '../../recoils/AuthRecoil';
import { AuthTokens } from '../../type/auth';

const storyViewData: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title:
      '초등학교 시절 가장 기억에 남는 순간 초등학교 시절 기억에 남는 순간 타이틀 제목 2줄까지 늘어나라 얍',
    description:'어렸을 때는 무슨 공부냐 농사나 지어라라는 이야기가 많았다. 그랬지만 공부하고 싶어 부모님께 말씀드리고 기회가 있을때마다 공부가 하고싶다고 부모님을 졸라봤지만 늘 돌아오는 대답은 한결같았다."너 밑으로 동생이 몇명이니? 엄마 아빠 둘이서 일해서는 너도 동생들도 공부는 커녕 밥도 못먹는다." 그때는 왜 그렇게 서운했는지',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1648842316439-c018ff4e093e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80',
    totalImage: 1,
    voiceData: false,
    createdAt: '2021.12.13',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    title: '초등학교 행복했던 순간',
    description:
      '처음 반장이 됐을 때 나보다 더 좋아하시던 부모님이 기억에 남는다. 처음에는 학교 다니는 것도 반대하셨는데 막상 학급 반장이 되었다고 하니',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1631981782640-9eec0cca25f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    totalImage: 1,
    voiceData: true,
    createdAt: '2022.02.04',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    title: '할부지의 추억 여행',
    description:
      '어렸을 때는 무슨 공부냐 농사나 지어라라는 이야기가 많았다. 그랬지만 공부하고 싶어 부모님께 말씀도 못드렸었다.',
    thumbnailUrl: null,
    totalImage: 0,
    voiceData: true,
    createdAt: '2021.12.13',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: '유년기 기억 조각',
    description:
      '어린 시절 심심한 나는 둘째 누님 뒤를 졸졸 쫓아다니곤 했다. 그런 내가 귀찮았던 누님은 어느',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1559744801-dc539b55737e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    totalImage: 3,
    voiceData: false,
    createdAt: '2021.12.13',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
    title: '유년기 기억 조각 2편',
    description:
      '어린 시절 심심한 나는 둘째 누님 뒤를 졸졸 쫓아다니곤 했다. 그런 내가 귀찮았던 누님은 어느',
    thumbnailUrl: null,
    totalImage: 0,
    voiceData: false,
    createdAt: '2021.10.01',
  },
];

const ScrollingView = (): JSX.Element => {
  const [scrollPositionY, setScrollPositionY] = useState<number>(0);
  const onPressTopButton = () => {
    console.log('top button clicked');
    setScrollPositionY(0);
  };

  const handleScroll = (event: Object) => {
    const positionY = event.nativeEvent.contentOffset.y;
    setScrollPositionY(positionY);
    console.log(positionY);
  };

  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <ScrollView onScroll={handleScroll} contentOffset={{y:scrollPositionY}} showsVerticalScrollIndicator={false}>
        {storyViewData.map((item:ItemData, index: number) =>
            <StoryListItem data={item} key={index} />
        )}
        {/* <FlatList
          data={storyViewData}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        /> */}
      </ScrollView>
      {
        scrollPositionY >= 10 ? (<TouchableOpacity 
          style={styles.floatingBtBox}
          onPress={onPressTopButton}
        >
            <Icon
              name="chevron-up-sharp"
              size={34} color={'#000000'} 
              style={styles.floatingBtTop}
              />
        </TouchableOpacity>) : null
      }
  </SafeAreaView>
  );
};

export default ScrollingView;
