import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import StoryViewNavigator from '../../routes/no-tab/StoryViewNavigator';
import {useSetRecoilState} from 'recoil';
import {SelectedStoryKeyState} from '../../recoils/SelectedStoryIdRecoil';
import {Story} from '../../type/story';
import {getStoryDisplayTagsDate} from '../../utils/story.display.util';

type props = {
  story: Story;
};

const StoryItem = ({story}: props): JSX.Element => {
  const navigation = useNavigation<any>();
  const storyId = useSetRecoilState(SelectedStoryKeyState);

  const moveToStoryDetailPage = (id: Story['id']) => {
    storyId(id);
    navigation.navigate('NoTab', StoryViewNavigator);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        moveToStoryDetailPage(story.id);
      }}>
      <View style={styles.thumbnailListItemContainer}>
        <View style={{flex: 1}}>
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.listTitle}>
              {story.title}
            </Text>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.description}>
              {story.content}
            </Text>
          </View>
        </View>
        {story.photos.length > 0 && (
          <View style={styles.thumbnailBox}>
            <View>
              <Image
                style={styles.thumbnailImage}
                resizeMode="cover"
                source={{
                  uri: story.photos[0],
                }}
              />
            </View>
          </View>
        )}
        <View style={styles.bottomRowBox}>
          <View>
            <Text style={styles.dateText}>
              {getStoryDisplayTagsDate(story)}
            </Text>
          </View>
          {story.audios.length > 0 && (
            <View style={styles.micIconBox}>
              <Icon name="mic" size={14} color={'#010440'} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoryItem;
