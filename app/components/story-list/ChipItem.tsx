import React, { useState } from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ChipItem = ({item, onPress, backgroundColor, textColor, marginLeft}) => (
    <TouchableOpacity onPress={onPress} style={[styles.chipItem, backgroundColor, marginLeft]}>
      <Text style={[styles.chipText, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  );


export default ChipItem;