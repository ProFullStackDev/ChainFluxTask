import React, {useState, createRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth, Value, screenHeight} from '../utils';
import Animated from 'react-native-reanimated';
import CardComponent from './cardComponent';
import {FlatList} from 'react-native-gesture-handler';
const AnimatedFlatList = Animated.createAnimatedComponent (FlatList);

const FeedComponent = ({data}) => {
  const flatRef = createRef ();

  const [ani] = useState (new Animated.Value (-1));
  const renderItem = ({item, index}) => {
    return <CardComponent item={item} index={index} ani={ani} />;
  };
  const getItemLayout = (data, index) => ({
    length: screenWidth * 0.7,
    offset: screenWidth * 0.7 * index,
    index,
  });

  return (
    <View style={styles.container}>

      <AnimatedFlatList
        getItemLayout={getItemLayout}
        windowSize={21}
        onScroll={Animated.event ([{nativeEvent: {contentOffset: {x: ani}}}], {
          useNativeDriver: true,
        })}
        horizontal={true}
        data={data}
        keyExtractor={(item, index) => index.toString ()}
        renderItem={renderItem}
        style={{
          height: screenHeight * 0.55,
          width: screenWidth,
        }}
        scrollEventThrottle={16}
        snapToInterval={screenWidth * 0.7}
        decelerationRate="fast"
        contentContainerStyle={{
          marginVertical: Value (10),
          justifyContent: 'center',
          paddingHorizontal: screenWidth * 0.2 / 2,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    height: screenHeight * 0.6,
  },
  headerTxt: {
    fontSize: Value (28),
    color: 'grey',
    letterSpacing: 1,
    fontWeight: '700',
    lineHeight: Value (30),
  },
});

export default FeedComponent;
