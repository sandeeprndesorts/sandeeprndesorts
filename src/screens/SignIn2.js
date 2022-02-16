import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
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
import LinearGradient from 'react-native-linear-gradient';
import {SignUpStep2} from '../services/CreateAccount.services';
import Loader from '../components/Loader';

export default function SignIn2() {
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  //Redux States
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  const [first, setFirst] = useState('David');
  const [last, setLast] = useState('Peterson');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);
  // const [date, setDate] = useState(new Date())

  const next = async () => {
    setLoader(true);
    const responseSignUp2 = await SignUpStep2(date);
    console.log(responseSignUp2, 'responseSignUp2');
    if (responseSignUp2.status === 200) {
        navigation.navigate('SignIn3');
    }
    setLoader(false)
  };

  function onBack() {
    navigation.goBack();
  }

  return (
    <BaseView
      header={
        <View
          style={{
            paddingTop: height(6),
            marginHorizontal: width(5),
            marginTop: height(3),
          }}>
          <Loader visible={loader} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity activeOpacity={1} onPress={onBack}>
              <Image
                source={require('../assets/icons/back.png')}
                resizeMode={'contain'}
                style={{
                  marginHorizontal: width(2),
                  width: width(10),
                  height: width(10),
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
      }
      footer={
        <Pressable
          style={{
            marginBottom: 18,
          }}
          onPress={next}>
          <LinearGradient
            colors={['#0727CE', '#0727CE', '#052D8D']}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: height(1),
              width: width(80),
              height: height(7),
            }}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: fontSize(5),
                textAlign: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                fontFamily: FONTS.bold,
              }}>
              Next
            </Text>
            <Image
              source={require('../assets/icons/arrow.png')}
              style={{
                height: height(6),
                marginStart: 10,
                width: width(6),
                resizeMode: 'contain',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
          </LinearGradient>
        </Pressable>
      }>
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <Image
          source={require('../assets/icons/birthday.png')}
          resizeMode={'contain'}
          style={{width: width(90), height: height(30)}}
          resizeMode={'contain'}
        />

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: fontSize(6), fontFamily: FONTS.bold}}>
            When is your birthday?
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <DatePicker date={date} onDateChange={setDate} mode={'date'} />
        </View>
      </View>
    </BaseView>
  );
}
