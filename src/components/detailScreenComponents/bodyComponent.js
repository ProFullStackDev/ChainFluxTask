import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Value, screenWidth} from '../utils';
import HtmlText from 'react-native-html-to-text';
const BodyComponent = props => {
  const {author, title, description, content} = props;
  console.warn (author);
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          width: '98%',
          height: Value (1),
          backgroundColor: 'rgba(0,0,0,0.2)',
          alignSelf: 'center',
          marginVertical: Value (4),
        }}
      />
      <View>
        <Text>Author: {author ? author : 'NA'}</Text>
      </View>
      <View style={{}}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingVertical: Value (10),
    paddingHorizontal: screenWidth * (0.1 / 2),
  },
  title: {
    fontSize: Value (14),
    fontStyle: 'italic',
  },
  description: {
    fontSize: Value (12),
    marginTop: 10,
    color: 'grey',
  },
});

export default BodyComponent;
