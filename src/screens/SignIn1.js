import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {loginSuccess, requestError, requestInit} from '../reducers/authReducer';
import {Api} from '../utils/Api';
import {storeToken, storeUser} from '../utils/LocalStorage';
import {reset} from '../utils/NavigationService';
import Validator from '../utils/Validator';
import TextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {Field, Formik} from 'formik';
import CustomTextInput from '../components/CustomTextInput';
import TextInputCustom from '../components/CustomFormikTextField';
import {SignUpStep1} from '../services/CreateAccount.services';
import Loader from '../components/Loader';
import {ActiveButtonColors, DisableButtonColors} from '../utils/ButtonColors';
export default function SignIn1() {
  const [loader, setLoader] = useState(false);
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
  });
  //Redux States
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const next = async () => {
    setLoader(true);
    const responseSinIn1 = await SignUpStep1({
      first_name: first,
      last_name: last,
      form_step: 1,
    });
    console.log(responseSinIn1, 'responseSinIn1');
    if (responseSinIn1.status === 200) {
      navigation.navigate('SignIn2');
    }
    setLoader(false);
  };

  return (
    <BaseView
      footer={
        <Pressable
          disabled={first.length > 1 && last.length > 1 ? false : true}
          style={{
            marginBottom: 18,
          }}
          onPress={next}>
          <LinearGradient
            colors={
              first.length > 1 && last.length > 1
                ? ActiveButtonColors
                : DisableButtonColors
            }
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
      <View style={{flex: 1, paddingVertical: height(20)}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: fontSize(6), fontFamily: FONTS.bold}}>
            What’s your first and
          </Text>
          <Text style={{fontSize: fontSize(6), fontFamily: FONTS.bold}}>
            last name?
          </Text>
        </View>
        <View style={{flex: 1, marginVertical: height(3)}}>
          <TextInput
            value={first}
            label="First name"
            onChangeText={text => setFirst(text)}
          />
          <TextInput
            value={last}
            label="Last name"
            onChangeText={text => setLast(text)}
          />
        </View>
      </View>
      <Loader visible={loader} />
    </BaseView>
  );
}
