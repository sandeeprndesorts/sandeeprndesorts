import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {Field, Formik} from 'formik';
import {useDispatch} from 'react-redux';
import BaseView from '../../components/BaseView';
import {fontSize, height, width} from '../../components/Resizer';
import {COLORS, FONTS} from '../../constants';
import OtpInputs from 'react-native-otp-inputs';
import {CallingCodePicker} from '@digieggs/rn-country-code-picker';
import CustomTextInput from '../../components/CustomTextInput';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import TextInputCustom from '../../components/CustomFormikTextField';
import Loader from '../../components/Loader';
import SignIn from './SignIn';
import {SignInService} from '../../services/SignIn.service';
import {UserInfoContext} from '../../contextAPI/UserInfoContext';
import {UserAuth} from '../../contextAPI/UserAuthContext';
import Validator from '../../utils/Validator';
const AuthSignIn = () => {
  const [selectedCallingCode, setSelectedCallingCode] = useState('');
  const [loader, setLoader] = useState(false);
  const {setUserInfoData, userInfoData} = useContext(UserInfoContext);
  const {setUserAuthContext} = useContext(UserAuth);
  const validationSchema = Yup.object().shape({
    phone: Yup.string().required('Phone Number is required'),
  });
  //Local States
  //Hooks
  const navigation = useNavigation();
  //Redux States
  const onNext = () => {};
  return (
    <BaseView style={{backgroundColor: 'white', flex: 1}}>
      <Image
        source={require('../../assets/icons/logo.png')}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: height(10),
        }}
        resizeMode={'contain'}
      />
      <Loader visible={loader} />
      <Formik
        initialValues={{phone: '', country_code: ''}}
        validationSchema={validationSchema}
        onSubmit={async values => {
          if (Validator.checkPhoneNumber(values.phone)) {
            setLoader(true);
            const responseSignIn = await SignInService(values);
            console.log(responseSignIn, 'signIn');
            if (responseSignIn.status === 200) {
              setUserAuthContext(responseSignIn?.data?.user);
              // storeData('userSignUpEndData', responseSignIn?.data?.user);
              navigation.navigate('EnterOtpSignIn', {dataValues: values});
              setUserInfoData(() => values);
            }
            setLoader(false);
          }
        }}
        component={({handleChange, handleSubmit, values, setFieldValue}) => (
          <View style={{flex: 1, paddingVertical: height(5)}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: fontSize(6),
                  fontFamily: FONTS.bold,
                  marginVertical: height(2),
                }}>
                Enter Your Mobile Number
              </Text>
              <Text
                style={{
                  fontSize: fontSize(3.5),
                  color: 'gray',
                  fontWeight: '500',
                }}>
                Please enter your valid phone number
              </Text>
              <Text
                style={{
                  fontSize: fontSize(3.5),
                  color: 'gray',
                  fontWeight: '500',
                }}>
                send you a 4-digit code to verify your account.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#BFBAC3',
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: width(5),
                marginVertical: height(5),
                paddingHorizontal: width(3),
              }}>
              <CallingCodePicker
                onValueChange={code => setFieldValue('country_code', code)}
              />
              <View
                style={{
                  width: width(0.3),
                  backgroundColor: 'gray',
                  height: height(7),
                  marginHorizontal: width(1),
                }}
              />
              <Field
                value={values.phone}
                style={{fontSize: fontSize(5), marginHorizontal: width(3)}}
                component={TextInputCustom}
                keyboardType={'number-pad'}
                name={'phone'}
                maxLength={12}
                onChangeText={handleChange('phone')}
              />
            </View>

            <Pressable
              style={{
                marginBottom: 18,
              }}
              onPress={handleSubmit}>
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
                  Send Code
                </Text>
              </LinearGradient>
            </Pressable>
            <Text
              style={{
                color: 'black',
                fontSize: fontSize(3),
                justifyContent: 'center',
                alignSelf: 'center',
                marginVertical: height(1),
              }}>
              By continuing, you agree to our
              <Text
                style={{
                  color: 'black',
                  fontSize: fontSize(3),
                  textDecorationLine: 'underline',
                }}>
                Terms and Privacy
              </Text>
            </Text>
          </View>
        )}
      />
    </BaseView>
  );
};
export default AuthSignIn;
