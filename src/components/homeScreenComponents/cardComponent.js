import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  screenWidth,
  screenHeight,
  Value,
  sourceIcon,
  authorIcon,
  dateConverter,
  timeIcon,
} from '../utils';
import {NeuView, NeuButton} from 'react-native-neu-element';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const CardComponent = ({item, index, ani}) => {
  const {publishedAt, urlToImage} = item;
  const navigation = useNavigation ();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              scale: ani.interpolate ({
                inputRange: [
                  (index - 1) * screenWidth * 0.7,
                  index * screenWidth * 0.7,
                  (index + 1) * screenWidth * 0.7,
                ],
                outputRange: [0.97, 1, 0.97],
              }),
            },
            {
              translateX: ani.interpolate ({
                inputRange: [
                  (index - 1) * screenWidth * 0.7,
                  index * screenWidth * 0.7,
                  (index + 1) * screenWidth * 0.7,
                ],
                outputRange: [10, 0, -10],
              }),
            },
          ],
        },
      ]}
    >

      <NeuView
        color="#eef2f9"
        height={screenHeight * 0.55}
        width={screenWidth * 0.7}
        borderRadius={Value (8)}
      >
        <View style={styles.subContainer}>
          <View style={{height: '100%', paddingHorizontal: Value (10)}}>
            <View
              style={{
                height: '15%',
                justifyContent: 'center',
                flexDirection: 'column',
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
                    source={sourceIcon}
                    resizeMethod="resize"
                    style={{
                      resizeMode: 'contain',
                      height: Value (12),
                      width: Value (12),
                      borderRadius: Value (3),
                    }}
                  />

                  <Text style={styles.sourceTxt}>
                    {item.source.name}{' '}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={timeIcon}
                    resizeMethod="resize"
                    style={{
                      resizeMode: 'contain',
                      height: Value (12),
                      width: Value (12),
                    }}
                  />
                  <Text style={styles.sourceTxt}>
                    {dateConverter (publishedAt)}
                  </Text>
                </View>

              </View>
              <View style={{flexDirection: 'row', marginTop: Value (3)}}>
                <Image
                  source={authorIcon}
                  resizeMethod="auto"
                  style={{
                    resizeMode: 'contain',
                    height: Value (12),
                    width: Value (12),
                  }}
                />

                <Text style={styles.sourceTxt}>
                  {item.author ? item.author : 'NA'}
                </Text>
              </View>
            </View>
            {/* News Title Container */}
            <View
              style={{
                height: '33%',
                paddingTop: Value (1),
                paddingHorizontal: screenWidth * 0.01,
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  height: '78%',
                }}
              >
                <Text
                  style={{
                    fontSize: Value (9),
                    textAlign: 'justify',
                    color: 'grey',
                    fontStyle: 'italic',
                  }}
                >
                  {item.title}
                </Text>

                <View
                  style={{
                    width: '100%',
                    height: Value (1),
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    alignSelf: 'center',
                    marginVertical: Value (4),
                  }}
                /><Text
                  style={{
                    fontSize: Value (9),
                    letterSpacing: 0.1,
                    textAlign: 'justify',
                    color: 'grey',
                  }}
                >
                  {item.description.length > 130
                    ? `${item.description.substring (0, 130)}...`
                    : item.description}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                }}
              >
                <NeuButton
                  color="#eef2f9"
                  borderRadius={Value (6)}
                  height={Value (17)}
                  width={Value (80)}
                  onPress={() => navigation.navigate ('Detail', {item})}
                >
                  <Text
                    style={{
                      fontSize: Value (9),
                      color: '#DA6370',
                      fontWeight: '700',
                    }}
                  >
                    READ MORE{' '}
                  </Text>
                </NeuButton>
              </View>

            </View>

            {/* News Image element */}
            <NeuView
              color="#eef2f9"
              borderRadius={Value (8)}
              width={screenWidth * 0.67}
              height={screenHeight * (0.55 / 2)}
              style={{alignSelf: 'center'}}
              inset
            >
              <Image
                source={{uri: urlToImage}}
                resizeMethod="auto"
                style={styles.imageStyle}
              />
            </NeuView>

          </View>

        </View>
      </NeuView>
    </Animated.View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingVertical: Value (8),
    alignItems: 'center',
    height: screenHeight * 0.55,
    width: screenWidth * 0.7,
  },
  subContainer: {
    flex: 1,
  },
  imageStyle: {
    height: '100%',
    width: screenWidth * 0.67,
    resizeMode: 'cover',
    borderRadius: Value (8),
  },
  sourceTxt: {
    paddingHorizontal: Value (4),
    fontSize: Value (9),
    letterSpacing: 0.1,
    textTransform: 'uppercase',
    color: '#DA6370',
  },
});

export default CardComponent;
