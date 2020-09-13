import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {DHComponent, BodyComponent} from '../../components';
import {Value} from '../../components/utils';

const DetailScreen = props => {
  const {item} = props.route.params;
  console.warn (item);
  return (
    <SafeAreaView style={[styles.container]}>

      <ScrollView nestedScrollEnabled={true} style={[styles.container]}>
        <DHComponent
          uri={item.urlToImage}
          sourceName={item.source.name}
          date={item.publishedAt}
        />
        <BodyComponent
          author={item.author}
          title={item.title}
          description={item.description}
          content={item.content}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#eef2f9',
  },
});

export default DetailScreen;
