import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth, Value} from '../utils';
import ListComponent from './listComponent';

const TrendingStories = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map ((item, index) => <ListComponent item={item} index={index} />)}

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingHorizontal: screenWidth * (0.1 / 2.2),
    paddingTop: Value (20),
  },
  headerTxt: {
    fontSize: Value (22),
    color: 'grey',

    letterSpacing: 0.2,
    fontWeight: '700',
    lineHeight: Value (30),
    fontStyle: 'italic',
  },
});

export default TrendingStories;
