import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import {newsIcon, screenHeight, screenWidth, Value} from '../utils';

const HeaderComponent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <NeuView
          color="#eef2f9"
          height={Value (42)}
          width={Value (42)}
          borderRadius={Value (9)}
        >

          <Image
            source={newsIcon}
            style={{
              height: Value (30),
              width: Value (30),
              resizeMode: 'contain',
              borderRadius: Value (2),
            }}
            resizeMethod="auto"
          />

        </NeuView>
        <View style={{justifyContent: 'center', paddingHorizontal: Value (10)}}>
          <Text style={styles.headerText}>
            News<Text style={styles.headerSubPartText}>pro </Text>
          </Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    width: screenWidth,
    height: screenHeight * 0.1,
    paddingHorizontal: screenWidth * (0.1 / 2.7),
  },
  subContainer: {
    flexDirection: 'row',
    paddingTop: Value (8),
  },
  headerText: {
    fontSize: Value (26),
    color: 'grey',
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  headerSubPartText: {
    color: '#DA6370',
    fontWeight: '300',
  },
});

export default HeaderComponent;
