import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  Text,
  View,
} from 'react-native';
import {
  HeaderComponent,
  NewsHeaderTitle,
  FeedComponent,
  TrendingStories
} from '../../components';
import {getINDNews} from '../../api';
import {Value, screenWidth} from '../../components/utils';


const HomeScreen = () => {
  const [data, setData] = useState ([]);
  const getData = () => {
    getINDNews ().then (res => {
      const d = res.data.articles
      
      setData (d);
    });
  };
  useEffect (() => {
    getData ();
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      
      <ScrollView
        nestedScrollEnabled={true}
        style={[
          styles.container,
          {marginTop: Platform.OS === 'ios' ? Value (5) : Value (4)},
        ]}
      >

        <HeaderComponent />
        <NewsHeaderTitle />
        {data.length > 0 ?<FeedComponent data={data} />:<></>}
        <Text style={styles.headerTxt}>
        Trending
        <Text style={{color: '#DA6370', fontStyle: 'italic'}}> News</Text>
      </Text>
      
      {data.length > 0 ? <TrendingStories data={data}/>:<></>}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#eef2f9',
    flex: 1,
  },headerTxt: {
    fontSize: Value (22),
    color: 'grey',
    letterSpacing: 0.2,
    fontWeight: '700',
    lineHeight: Value (30),
    fontStyle: 'normal',
    paddingHorizontal:screenWidth *(0.1/2),
    paddingTop:screenWidth *(0.1/2),
  },
});

export default HomeScreen;
