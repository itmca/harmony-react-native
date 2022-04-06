import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

type Item = {
  id: string;
  key: number;
  title: string;
  description: string;
  thumbnailUrl?: string;
  totalImage: number;
  voiceData: boolean;
  createdAt: string;
};

const StoryListItem = ({data}): JSX.Element => {
  const listItem = (
    <View style={styles.listItemContainer}>
      <View style={styles.textBox}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.listTitle}>
          {data.title}
        </Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>
          {data.description}
        </Text>
      </View>
      <View style={styles.bottomRowBox}>
        <View>
          <Text style={styles.dateText}>{data.createdAt}</Text>
        </View>
        {data.voiceData ? (
          <View style={styles.micIconBox}>
            <Icon name="mic" size={14} color={'#010440'} />
          </View>
        ) : null}
      </View>
    </View>
  );

  const thumbnailListItem = (
    <View style={styles.thumbnailListItemContainer}>
      <View style={styles.thumbnailTextBox}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.listTitle}>
          {data.title}
        </Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>
          {data.description}
        </Text>
      </View>
      <View style={styles.thumbnailBox}>
        <View>
          <Image
            style={styles.thumbnailImage}
            resizeMode="cover"
            source={{
              uri: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202110/17/7ad58e84-36e3-4787-9276-0b8468f5789a.jpg',
            }}
          />
        </View>
      </View>
      <View style={styles.bottomRowBox}>
        <View>
          <Text style={styles.dateText}>{data.createdAt}</Text>
        </View>
        {data.voiceData ? (
          <View style={styles.micIconBox}>
            <Icon name="mic" size={14} color={'#010440'} />
          </View>
        ) : null}
      </View>
    </View>
  );

  return (
  <View style={styles.container}>
    {data.thumbnailUrl != null ? thumbnailListItem : listItem}
  </View>
  );
};

export default StoryListItem;
