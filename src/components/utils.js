import {Platform, StatusBar, Dimensions, PixelRatio} from 'react-native';

const {height, width} = Dimensions.get ('window');
const standardLength = width > height ? width : height;
const offset = width > height
  ? 0
  : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

const scale = width / 320;

var pixelRatio = PixelRatio.get ();

const deviceHeight = Platform.OS === 'android'
  ? standardLength - offset
  : standardLength;

export function normalize (size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round (PixelRatio.roundToNearestPixel (newSize));
  } else {
    return Math.round (PixelRatio.roundToNearestPixel (newSize)) - 2;
  }
}

export function Percentage (percent) {
  const heightPercent = percent * deviceHeight / 100;
  return Math.round (heightPercent);
}

export function Value (fontSize, standardScreenHeight = 680) {
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Math.round (heightPercent);
}

export const pixel = size => {
  if (pixelRatio == 2) {
    return size;
  }
  return size * 1.15;
};

export const screenWidth = Math.round (Dimensions.get ('window').width);
export const screenHeight = Math.round (Dimensions.get ('window').height);
export const newsIcon = require ('../../assets/images/news1.png');
export const sourceIcon = require ('../../assets/images/rss2.png');
export const authorIcon = require ('../../assets/images/user1.png');
export const timeIcon = require ('../../assets/images/clock2.png');
export const backIcon = require ('../../assets/images/back1.png');
export const BlackTimeIcon = require ('../../assets/images/clock1.png');
export const BlackSourceIcon = require ('../../assets/images/rss.png');

export const dateConverter = publishedAt => {
  const tot = Date.parse (publishedAt);
  const newD = new Date (tot);

  const date = newD.getDate ();
  const day = newD.getDay ();
  const time = newD.getHours ();
  const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const month = newD.getMonth ();

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const getTime = [
    '1 am',
    '2 am',
    '3 am',
    '4 am',
    '5 am',
    '6 am',
    '7 am',
    '8 am',
    '9 am',
    '10 am',
    '11 am',
    '12 pm',
    '1 pm',
    '2 pm',
    '3 pm',
    '4 pm',
    '5 pm',
    '6 pm',
    '7 pm',
    '8 pm',
    '9 pm',
    '10 pm',
    '11 pm',
    '12 am',
  ];
  return `${getTime[time]} ${daysName[day]} ${date}, ${monthNames[month]}`;
};
