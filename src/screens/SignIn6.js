import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import BaseView from '../components/BaseView';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import TextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import Validator from '../utils/Validator';
import {SignUpStep6} from '../services/CreateAccount.services';

export default function SignIn1() {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //Redux States

  const next = async () => {
    setLoader(true);
    if (Validator.checkEmail(email)) {
      const response = await SignUpStep6(email);
      console.log(response,"sinUP6")
      if (response.status === 200) {
        navigation.navigate('SignIn7');
      }
    }
    setLoader(false);
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
                fontFamily: FONTS.bold,
                color: COLORS.white,
                fontSize: fontSize(5),
                textAlign: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
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
      <View style={{flex: 1, paddingVertical: height(1)}}>
        <Image
          source={require('../assets/icons/email.png')}
          resizeMode={'contain'}
          style={{
            width: width(100),
            height: height(10),
            marginVertical: height(2),
          }}
          resizeMode={'contain'}
        />

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: fontSize(6),
              marginVertical: height(1),
              fontFamily: FONTS.bold,
            }}>
            What is your email?
          </Text>
          <Text style={{fontSize: fontSize(3), fontWeight: '500'}}>
            If you ever lose access to your account,
          </Text>
          <Text style={{fontSize: fontSize(3), fontWeight: '500'}}>
            we can use your email to recover it.
          </Text>
        </View>

        <View style={{flex: 1, marginVertical: height(3)}}>
          <TextInput
            label="Email address"
            value1="jessica@gmail.com"
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>
      <Loader visible={loader} />
    </BaseView>
  );
}
