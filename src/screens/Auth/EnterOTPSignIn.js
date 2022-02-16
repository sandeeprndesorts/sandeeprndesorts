import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Pressable, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import BaseView from '../../components/BaseView';
import {fontSize, height, width} from '../../components/Resizer';
import {COLORS, FONTS} from '../../constants';
import OtpInputs from 'react-native-otp-inputs';
import {reset} from '../../utils/NavigationService';
import {VerifyOTP} from '../../services/SignIn.service';
import {storeData} from '../../utils/LocalStorage';
import {UserInfoContext} from '../../contextAPI/UserInfoContext';
import {UserAuth} from '../../contextAPI/UserAuthContext';
export default function EnterOTPSignInScreen({route}) {
  const {dataValues} = route.params;
  const {setUserAuthContext} = useContext(UserAuth);
  const [counter, setCounter] = useState(60);
  const navigation = useNavigation();
  //Redux States
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  // const [minutes, setMinutes] = useState(initialMinute);
  // const [seconds, setSeconds] = useState(initialSeconds);

  const onNext = async value => {
    if (value == 4) {
      const object = {
        ...dataValues,
        otp: 1111,
      };
      const responseVerifyOTP = await VerifyOTP(object);
      if (responseVerifyOTP.status === 200) {
        storeData('user', responseVerifyOTP?.data);
        setUserAuthContext(responseVerifyOTP?.data?.user);
      }
      setTimeout(() => {
        reset('BottomTabs');
      }, 3000);
      // navigation.navigate('SignInStart')
    }
  };

  function onBack() {
    navigation.goBack();
  }

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  console.log(counter, 'counter');
  return (
    <BaseView
      header={
        <View
          style={{
            paddingTop: height(6),
            marginHorizontal: width(5),
            marginTop: height(3),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity activeOpacity={1} onPress={onBack}>
              <Image
                source={require('../../assets/icons/back.png')}
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
      }>
      <View>
        <Text
          style={{
            color: '#200E32',
            fontFamily: FONTS.bold,
            fontSize: fontSize(7),
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: height(2),
          }}>
          {counter > 0 && `00:${counter}`}
        </Text>

        <Text
          style={{
            color: 'gray',
            fontSize: fontSize(4.5),
            justifyContent: 'center',
            alignSelf: 'center',
            fontWeight: '500',
            marginVertical: height(0.5),
          }}>
          Type the verification code
        </Text>
        <Text
          style={{
            color: 'gray',
            fontSize: fontSize(4.5),
            justifyContent: 'center',
            alignSelf: 'center',
            fontWeight: '500',
            marginVertical: height(0.5),
          }}>
          we’ve sent you
        </Text>

        <View style={{height: height(15), alignSelf: 'center'}}>
          <OtpInputs
            inputStyles={{
              fontSize: fontSize(6),
              color: COLORS.primary,
              alignSelf: 'center',
              fontWeight: '500',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
            inputContainerStyles={{
              marginHorizontal: 5,
              backgroundColor: '#FFFFFF',
              height: width(15),
              width: width(15),
              borderWidth: 1,
              borderColor: COLORS.primary,
              justifyContent: 'center',
              borderRadius: 8,
            }}
            focusStyles={{backgroundColor: COLORS.primary, color: 'white'}}
            numberOfInputs={4}
            keyboardType="phone-pad"
            handleChange={e => onNext(e.length)}
          />
        </View>

        <Pressable>
          <Text
            style={{
              color: '#0E2DCF',
              fontSize: fontSize(4),
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Send again
          </Text>
        </Pressable>
      </View>
    </BaseView>
  );
}
