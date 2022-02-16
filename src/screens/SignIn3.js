import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Platform, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import Loader from '../components/Loader';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {loginSuccess, requestError, requestInit} from '../reducers/authReducer';
import {GetGenders, SignUpStep3} from '../services/CreateAccount.services';
import {Api} from '../utils/Api';
import {storeToken, storeUser} from '../utils/LocalStorage';
import {reset} from '../utils/NavigationService';
import Validator from '../utils/Validator';

let List = [
  {
    id: 1,
    name: 'Female',
    icon: require('../assets/icons/female.png'),
  },
  {
    id: 2,
    name: 'Male',
    icon: require('../assets/icons/male.png'),
  },
  {
    id: 3,
    name: 'Other',
    icon: require('../assets/icons/other.png'),
  },
];

export default function SignIn3() {
  const [loader, setLoader] = useState(false);
  const [genders, setGenders] = useState([]);
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getGenders = async () => {
    const getGendersResponse = await GetGenders();
    if (getGendersResponse.status === 200) {
      const newData = getGendersResponse?.data?.genders?.map((x, i) => {
        if (x.name === 'Female') {
          return {...x, icon: require('../assets/icons/female.png')};
        } else if (x.name === 'Mail') {
          return {...x, icon: require('../assets/icons/male.png')};
        } else {
          return {...x, icon: require('../assets/icons/other.png')};
        }
      });
      setGenders(newData);
    }
  };
  useEffect(() => {
    getGenders();
  }, []);

  const [selected, setSelected] = useState(0);
  const next = async () => {
    setLoader(true);
    const responseSignUp3 = await SignUpStep3(selected);
    console.log(responseSignUp3, 'signUp3');
    if (responseSignUp3.status === 200) {
      navigation.navigate('SignIn4');
    }
    setLoader(false);
  };
  function onBack() {
    navigation.goBack();
  }
  console.log(selected, 'selected');
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
            <Loader visible={loader} />
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
        selected ? (
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
        ) : null
      }>
      <View style={{flex: 1, paddingVertical: height(2)}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: fontSize(6), fontFamily: FONTS.bold}}>
            What is your gender?
          </Text>
        </View>

        <View style={{marginVertical: height(3)}}>
          <FlatList
            data={genders}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: selected == item.id ? '#0E2DCF' : '#BFBAC3',
                    borderWidth: 1,
                    width: width(80),
                    borderRadius: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: height(2),
                    height: height(12),
                  }}>
                  <Pressable
                    onPress={() => setSelected(item.id)}
                    style={{
                      height: height(11.5),
                      width: width(79),
                      borderRadius: width(2),
                      backgroundColor:
                        selected == item.id ? '#EFF0FF' : '#ffffff',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}>
                      {index == 0 ? (
                        Platform.OS == 'ios' ? (
                          <Image
                            source={item.icon}
                            style={{
                              paddingVertical: 20,
                              tintColor:
                                selected == item.id ? '#0E2DCF' : 'black',
                              height: height(10),
                              resizeMode : "contain",
                              width: width(7.5),
                            }}
                          />
                        ) : (
                          <Image
                            source={item.icon}
                            style={{
                              paddingVertical: 20,
                              resizeMode : "contain",
                              tintColor:
                                selected == item.id ? '#0E2DCF' : 'black',
                              height: height(5.0),
                              width: width(10),
                            }}
                          />
                        )
                      ) : (
                        <Image
                          source={item.icon}
                          style={{
                            resizeMode : "contain", 
                            tintColor:
                              selected == item.id ? '#0E2DCF' : 'black',
                            height: width(10),
                            alignItems: 'center',
                            width: width(10),
                          }}
                        />
                      )}

                      <Text
                        style={{
                          fontSize: fontSize(5),
                          color: selected == item.id ? '#0E2DCF' : 'black',
                          textAlign: 'center',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          marginStart: width(1),
                          fontFamily: FONTS.bold,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      </View>
    </BaseView>
  );
}
