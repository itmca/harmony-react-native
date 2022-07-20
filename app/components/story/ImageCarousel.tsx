import React, {useState, useRef} from 'react';
import {Carousel} from '@ant-design/react-native';
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
  // const [page, setPage] = useState<number>(0);
  const carousel = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // const carouselItem = ({item}): JSX.Element => (
  //        <Image
  //           style={styles.carouselImage}
  //           resizeMode="cover"
  //           source={{uri: item.url}}
  //           />
  //           // {/* <Item url={item.url} id={item.id} /> */}
  //         )
  const onHorizontalSelectedIndexChange = (index: number) => {
    console.log('horizontal change to', index);
    setSelectedIndex(index);
  };

  return (
    <>
      <View style={styles.carouselImageWrapper}>
        <Carousel
          style={styles.carouselImageWrapper}
          selectedIndex={selectedIndex}
          autoplay
          infinite
          afterChange={onHorizontalSelectedIndexChange}
          // ref={(ref) => (carousel = ref)}
        >
          <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
            <Text>Carousel 1</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
            <Text>Carousel 2</Text>
          </View>
          <View
            style={[styles.containerHorizontal, {backgroundColor: 'yellow'}]}>
            <Text>Carousel 3</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'aqua'}]}>
            <Text>Carousel 4</Text>
          </View>
          <View
            style={[styles.containerHorizontal, {backgroundColor: 'fuchsia'}]}>
            <Text>Carousel 5</Text>
          </View>
        </Carousel>
        {/* <FlatList
          data={data}
          horizontal
          pagingEnabled
          renderItem={carouselItem}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
    </>
  );
};

export default ImageCarousel;
