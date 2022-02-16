import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  Switch,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {loginSuccess, requestError, requestInit} from '../reducers/authReducer';
import {Api} from '../utils/Api';
import {storeToken, storeUser} from '../utils/LocalStorage';
import {reset} from '../utils/NavigationService';
import Validator from '../utils/Validator';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Platform} from 'react-native';

import DatePicker from '../components/DatePicker';
import SwitchToggle from 'react-native-switch-toggle';

export default function Profile() {
  global.base = '1';

  const navigation = useNavigation();

  function openSetting() {
    navigation.navigate('Setting');
  }

  function openEditProfile() {
    navigation.navigate('EditProfile');
  }

  return (
    <BaseView
      header={
        <View
          style={{
            paddingTop: height(6),
            marginHorizontal: width(3),
            marginTop: height(3),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: fontSize(6),
              fontFamily: FONTS.bold,
              justifyContent: 'center',
              marginHorizontal: width(2),
            }}>
            My Profile
          </Text>

          <TouchableOpacity activeOpacity={1} onPress={openSetting}>
            <Image
              source={require('../assets/icons/Setting.png')}
              resizeMode={'contain'}
              style={{
                marginHorizontal: width(2),
                width: width(7),
                height: width(7),
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      }>
      <View style={{marginVertical: height(2)}}>
        <Image
          source={require('../assets/icons/Mask.png')}
          style={{width: '100%', resizeMode: 'cover'}}
          resizeMode={'cover'}
        />
        <Text
          style={{
            color: COLORS.black,
            fontSize: fontSize(4),
            textAlign: 'center',
            justifyContent: 'center',
            fontWeight: '600',
            marginVertical: height(4),
          }}>
          Jessica Parker, 23
        </Text>
        <Image
          source={require('../assets/icons/seekbar.png')}
          style={{
            width: width(60),
            justifyContent: 'center',
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
          resizeMode={'contain'}
        />
        <Text
          style={{
            color: COLORS.black,
            fontSize: fontSize(3.5),
            textAlign: 'center',
            justifyContent: 'center',
            marginVertical: height(2),
          }}>
          Profile Completed 60%
        </Text>

        <TouchableOpacity
          activeOpacity={1}
          onPress={openEditProfile}
          style={{marginVertical: height(2)}}>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: fontSize(4),
              justifyContent: 'center',
              alignSelf: 'center',
              fontFamily: FONTS.bold,
              borderColor: COLORS.primary,
              borderWidth: 2,
              borderRadius: height(2),
              paddingHorizontal: width(6),
              paddingVertical: height(2),
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
}
