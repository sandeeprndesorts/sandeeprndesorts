import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Pressable,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import OtpInputs from 'react-native-otp-inputs';
import {CallingCodePicker} from '@digieggs/rn-country-code-picker';
import CustomTextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

export default function CreateAccount() {
  const navigation = useNavigation();

  function onNext() {
    navigation.navigate('SignUp');
  }

  return (
    <BaseView>
      <View>
        <Swiper
          loop={false}
          style={{height: height(78)}}
          showsPagination={false}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/Rectangle.png')}
                style={{width: width(100), height: height(40)}}
              />
              <View style={{position: 'absolute', top: 0}}>
                <Image
                  source={require('../assets/icons/Human.png')}
                  style={{
                    marginTop: height(10),
                    width: width(100),
                    height: height(40),
                  }}
                  resizeMode={'contain'}
                />
              </View>
            </View>
            <Image
              source={require('../assets/icons/content.png')}
              style={{
                marginTop: height(18),
                width: width(80),
                height: height(23),
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              resizeMode={'contain'}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/Rectangle1.png')}
                style={{width: width(100), height: height(40)}}
              />
              <View style={{position: 'absolute', top: 0}}>
                <Image
                  source={require('../assets/icons/Human1.png')}
                  style={{
                    marginTop: height(10),
                    width: width(100),
                    height: height(40),
                  }}
                  resizeMode={'contain'}
                />
              </View>
            </View>
            <Image
              source={require('../assets/icons/content1.png')}
              style={{
                marginTop: height(18),
                width: width(80),
                height: height(23),
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              resizeMode={'contain'}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/Rectangle2.png')}
                style={{width: width(100), height: height(40)}}
              />
              <View style={{position: 'absolute', top: 0}}>
                <Image
                  source={require('../assets/icons/Human3.png')}
                  style={{
                    marginTop: height(10),
                    width: width(100),
                    height: height(40),
                  }}
                  resizeMode={'contain'}
                />
              </View>
            </View>
            <Image
              source={require('../assets/icons/content2.png')}
              style={{
                marginTop: height(18),
                width: width(80),
                height: height(23),
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              resizeMode={'contain'}
            />
          </View>
        </Swiper>
      </View>

      <View style={{paddingVertical: height(3)}}>
        <Pressable
          style={{
            marginBottom: 18,
          }}
          onPress={onNext}>
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
                fontSize: fontSize(4.5),
                textAlign: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                fontFamily: FONTS.bold,
              }}>
              Create an account
            </Text>
          </LinearGradient>
        </Pressable>
        <Pressable onPress={() => {


         return navigation.navigate('AuthSignIn')
        }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSize(3),
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: height(1),
            }}>
            Already have an account?
            <Text style={{color: COLORS.primary, fontSize: fontSize(3)}}>
              Sign In
            </Text>
          </Text>
        </Pressable>
      </View>
    </BaseView>
  );
}
