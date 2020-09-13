import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth, Value} from '../utils';

const NewsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Discover</Text>
      <View
        style={{
          height: Value (2.2),
          width: Value (30),
          backgroundColor: '#DA6370',
          marginHorizontal: Value (3),
          marginTop: Value (4),
        }}
      />
      <View
        style={{
          height: Value (2.2),
          width: Value (24),
          backgroundColor: '#DA6370',
          marginHorizontal: Value (3),
          marginTop: Value (2),
        }}
      />
      <View
        style={{
          height: Value (2.2),
          width: Value (18),
          backgroundColor: '#DA6370',
          marginHorizontal: Value (3),
          marginTop: Value (2),
        }}
      />
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
    fontSize: Value (28),
    color: 'grey',
    letterSpacing: 0.2,
    fontWeight: '700',
    lineHeight: Value (30),
  },
});

export default NewsHeader;
