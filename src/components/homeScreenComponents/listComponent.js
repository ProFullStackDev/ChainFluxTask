import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {screenWidth, Value, dateConverter} from '../utils';
import {NeuButton} from 'react-native-neu-element';
import {useNavigation} from '@react-navigation/native';

const ListComponent = props => {
  const {publishedAt, urlToImage, title, description, source} = props.item;
  const navigation = useNavigation ();
  return (
    <NeuButton
      color="#eef2f9"
      width={screenWidth * 0.92}
      borderRadius={Value (8)}
      style={styles.container}
      onPress={() => navigation.navigate ('Detail', {item: props.item})}
    >

      <View style={styles.subContainer}>

        <Image
          source={{uri: urlToImage}}
          resizeMethod="auto"
          resizeMode="cover"
          style={styles.imageStyle}
        />

        <View style={styles.bodyContainer}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.txtStyle, {fontWeight: '700'}]}>
              {source.name}{'  '}
            </Text>
            <Text style={styles.txtStyle}>
              {dateConverter (publishedAt)}
            </Text>
          </View>
          <View
            style={{
              width: '98%',
              height: Value (1),
              backgroundColor: 'rgba(0,0,0,0.1)',
              alignSelf: 'center',
              marginVertical: Value (4),
            }}
          />
          <Text
            style={{
              fontSize: Value (9),
              textAlign: 'justify',
              color: 'grey',
              fontStyle: 'italic',
            }}
          >
            {title.length > 150 ? `${title.substring (0, 150)}...` : title}
          </Text>

        </View>

      </View>

    </NeuButton>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginVertical: Value (8),
  },
  subContainer: {
    paddingHorizontal: Value (4),
    flex: 1,
    flexDirection: 'row',
  },
  imageStyle: {
    flex: 0.25,
    borderRadius: Value (4),
    width: null,
    marginVertical: Value (3),
  },
  bodyContainer: {
    flex: 0.75,
    paddingHorizontal: Value (4),
  },
  txtStyle: {
    fontSize: Value (10),
    textAlign: 'justify',
    color: '#DA6370',
    textTransform: 'uppercase',
    marginTop: Value (2),
  },
});

export default ListComponent;
