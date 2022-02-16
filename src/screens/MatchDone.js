import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StatusBar, View, Text, Pressable} from 'react-native';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {reset} from '../utils/NavigationService';

export default function MatchDone() {
  const navigation = useNavigation();

  function keepLooking() {
    global.base = '3';
    navigation.navigate('BottomTabs');
  }

  function goChat() {
    navigation.navigate('BottomTabs1');
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
        translucent={true}
      />

      <Image
        source={require('../assets/icons/background.png')}
        style={{height: height(100), width: width(100)}}></Image>

      <View
        style={{
          position: 'absolute',
          height: height(100),
          width: width(100),
          justifyContent: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: fontSize(8),
            textAlign: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            fontFamily: FONTS.bold,
          }}>
          It’s a match, Jake!
        </Text>

        <Text
          style={{
            color: COLORS.white,
            fontSize: fontSize(3.6),
            textAlign: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            fontFamily: FONTS.bold,
            marginVertical: height(0.5),
          }}>
          Start a conversation now with each other
        </Text>

        <Image
          source={require('../assets/icons/matchDone.png')}
          style={{height: width(80), width: width(80)}}
          resizeMode={'contain'}></Image>

        <Image
          source={require('../assets/icons/likeGreen.png')}
          style={{
            height: width(15),
            width: width(15),
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: height(46.9),
          }}
          resizeMode={'contain'}></Image>

        <Pressable
          onPress={goChat}
          style={{
            height: height(7),
            borderRadius: height(1),
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            width: width(80),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: fontSize(4.5),
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              fontFamily: FONTS.bold,
            }}>
            Go to the chat
          </Text>
        </Pressable>

        <Pressable
          onPress={keepLooking}
          style={{
            height: height(7),
            marginVertical: height(2),
            borderRadius: height(1),
            borderWidth: width(0.3),
            borderColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            width: width(80),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: fontSize(5),
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              fontFamily: FONTS.bold,
            }}>
            Keep looking
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
