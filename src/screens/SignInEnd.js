import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Pressable, View, StatusBar} from 'react-native';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {reset} from '../utils/NavigationService';
export default function SignInEnd() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      reset('BottomTabs');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
        translucent={true}
      />

      <Pressable activeOpacity={1}>
        <Image
          source={require('../assets/icons/start.jpg')}
          style={{height: height(100), width: width(100)}}></Image>
      </Pressable>
    </View>
  );
}
