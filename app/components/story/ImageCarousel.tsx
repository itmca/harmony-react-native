import React, {useState} from 'react';
// import {Carousel} from '@ant-design/react-native';
import {Image, Text, View, FlatList} from 'react-native';
import {styles} from './styles';

export type CarouselData = {
  id: string;
  url: string;
};

type CarouselProps = {
  data: CarouselData[];
  index?: number;
};

const ImageCarousel = ({data}: CarouselProps): JSX.Element => {
  const [page, setPage] = useState<number>(0);

  const Item = ({url, id}: CarouselData): JSX.Element => (
    <>
      <Image
        style={styles.carouselImage}
        source={{ uri: url}}
      />
    </>
  );

  const carouselItem = ({item}) => {
    return (
      <View>
        <Item url={item.url} id={item.id} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.carouselImageWrapper}>
        <FlatList
          data={data}
          // onScroll={onScroll}
          horizontal
          pagingEnabled
          renderItem={carouselItem}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
        />
            {/* {carouselItem} */}
            {/* <Image style={styles.carouselImage} resizeMode="cover" source={{ uri: data[0].url }} />
            <Image style={styles.carouselImage} resizeMode="cover" source={{ uri: data[1].url }} />
            <Image style={styles.carouselImage} resizeMode="cover" source={{ uri: data[2].url }} />
            <Image style={styles.carouselImage} resizeMode="cover" source={{ uri: data[3].url }} /> */}
            {/* {data.map((item) => carouselItem(item))} */}
      </View>
    </>
  );
};

export default ImageCarousel;
