import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {fontSize, height, width} from '../components/Resizer';
import {reset} from '../utils/NavigationService';
import {COLORS, FONTS} from '../constants';
export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      reset('CreateAccount');
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
        translucent={true}
      />
      <Pressable activeOpacity={1} style={{marginTop: height(-8)}}>
        <Image
          source={require('../assets/icons/splash.jpg')}
          style={{height: height(100), width: width(100)}}
          resizeMode={'contain'}></Image>
      </Pressable>
    </View>
  );
}
