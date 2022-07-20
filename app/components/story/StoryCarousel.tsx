import { CarouselProps } from './Carousel';
import React, {useState} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from './Carousel';


const StoryCarousel = ({data}: CarouselProps): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  // const deviceWidth = Dimensions.get('window');
  // const { id } = route.params;
  return (
       <Carousel
        page={page}
        setPage={setPage}
        gap={16}
        data={RainbowSheet}
        pageWidth={160}
        RenderItem={renderItem}
      />
  );
};
export default StoryCarousel;

const renderItem = ({
  item,
} : {
  item: { 
    id: string; 
    url: string;
    color: string;
  }
}) => (
 <View style={{width: 315, height: 315, backgroundColor: item.color}} />
  // <View style={{width: 160, height: 200}}>
  //   <Image source={{uri: item.url}} />
  // </View>
  );

  const RainbowSheet = [
    {id: 0, color: 'red'},
    {id: 1, color: 'orange'},
    {id: 2, color: 'yellow'},
    {id: 3, color: 'green'},
    {id: 4, color: 'blue'},
    {id: 5, color: 'navy'},
    {id: 6, color: 'purple'},
  ];