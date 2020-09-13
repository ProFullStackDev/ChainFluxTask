import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NeuView, NeuButton} from 'react-native-neu-element';
import {
  newsIcon,
  screenHeight,
  screenWidth,
  Value,
  backIcon,
  dateConverter,
  sourceIcon,
  timeIcon,
  BlackTimeIcon,
  BlackSourceIcon,
} from '../utils';
import {useNavigation} from '@react-navigation/native';
const DHComponent = props => {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>

        <NeuButton
          color="#eef2f9"
          height={Value (42)}
          width={Value (42)}
          borderRadius={Value (9)}
          onPress={() => navigation.navigate ('Home')}
        >
          <Image
            source={backIcon}
            style={{
              height: Value (24),
              width: Value (24),
              resizeMode: 'contain',
              borderRadius: Value (2),
            }}
            resizeMethod="auto"
          />
        </NeuButton>

      </View>
      <View style={{paddingTop: Value (10), flex: 1}}>
        <NeuView
          color="#eef2f9"
          height={screenHeight * 0.34}
          width={screenWidth * 0.92}
          borderRadius={Value (9)}
          style={{alignSelf: 'center'}}
          inset
        >
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={styles.imageStyle}
              resizeMode="cover"
              resizeMethod="auto"
              source={{uri: props.uri}}
            />
            <View
              style={{
                position: 'absolute',
                bottom: Value (0),
                height: '12%',
                width: '100%',
                backgroundColor: 'rgba(244,244,244,0.6)',
                justifyContent: 'center',
                paddingHorizontal: Value (8),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={BlackSourceIcon}
                    resizeMethod="resize"
                    style={{
                      resizeMode: 'contain',
                      height: Value (12),
                      width: Value (12),
                    }}
                  />

                  <Text style={styles.txtStyle}>
                    {props.sourceName}{'  '}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={BlackTimeIcon}
                    resizeMethod="resize"
                    style={{
                      resizeMode: 'contain',
                      height: Value (12),
                      width: Value (12),
                    }}
                  />
                  <Text style={styles.txtStyle}>
                    {dateConverter (props.date)}{' '}
                  </Text>
                </View>

              </View>
            </View>
          </View>
        </NeuView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    width: screenWidth,

    paddingHorizontal: screenWidth * (0.1 / 2.7),
  },
  subContainer: {
    flexDirection: 'row',
    paddingTop: Value (8),
  },
  imageStyle: {
    width: screenWidth * 0.915,
    height: screenHeight * 0.335,
    borderRadius: Value (6),
  },
  headerSubPartText: {
    color: '#DA6370',
    fontWeight: '300',
  },
  txtStyle: {
    fontSize: Value (10),
    textTransform: 'uppercase',
    paddingLeft: Value (3),
  },
});

export default DHComponent;
