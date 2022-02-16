import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View, Switch} from 'react-native';
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

let placeList = [
  {
    id: 1,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Ava',
  },
  {
    id: 2,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Sophia',
  },
  {
    id: 3,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Amelia',
  },
  {
    id: 4,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Ava',
  },
  {
    id: 5,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Ava',
  },
  {
    id: 6,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Sophia',
  },
  {
    id: 7,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Amelia',
  },
  {
    id: 8,
    img: {uri: 'https://i.pravatar.cc/300'},
    name: 'Ava',
  },
];

export default function HotSpotPage() {
  const navigation = useNavigation();

  const [selected, setSelected] = useState('sport');

  function onBack() {
    navigation.goBack();
  }

  return (
    <BaseView>
      <View>
        <Pressable>
          <Image
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={{width: width(100), height: height(50)}}
          />
        </Pressable>

        <View
          style={{
            position: 'absolute',
            top: width(5),
            left: width(1),
            right: width(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
              alignSelf: 'flex-start',
              margin: width(6),
            }}>
            <Pressable onPress={onBack}>
              <Image
                source={require('../assets/icons/back.png')}
                style={{
                  width: width(12),
                  height: width(12),
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-start',
                }}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: width(5),
          borderTopLeftRadius: width(5),
          marginTop: height(-3),
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#6F95FF50',
            paddingVertical: height(2),
            borderRadius: width(2),
            margin: width(5),
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/icons/footPrint.png')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              height: width(5),
              width: width(5),
              marginHorizontal: width(1),
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontWeight: '600',
              color: 'black',
              fontSize: fontSize(4.5),
              marginHorizontal: width(1),
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Are you visiting today?
          </Text>

          <View
            style={{
              marginHorizontal: width(1),
              flexDirection: 'row',
              paddingHorizontal: width(1.5),
              paddingVertical: width(1.5),
              backgroundColor: COLORS.primary,
              borderRadius: width(2),
            }}>
            <Image
              source={require('../assets/icons/whiteHeart.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: width(4.5),
                width: width(4.5),
                marginRight: 1,
              }}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: fontSize(4),
                marginTop: height(0.2),
                marginHorizontal: width(0.8),
              }}>
              Check in
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginVertical: height(1),
            marginHorizontal: width(7),
          }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: fontSize(4.5),
              color: 'black',
              marginTop: height(0.2),
            }}>
            Statue of Liberty National Monument
          </Text>

          <View style={{flexDirection: 'row', marginVertical: height(1.5)}}>
            <Image
              source={require('../assets/icons/addressLocation.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: width(4.5),
                width: width(4.5),
                marginRight: 3,
              }}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
                fontSize: fontSize(3.8),
                marginTop: height(0.2),
                marginHorizontal: width(0.8),
              }}>
              New York, NY 10004, United States
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/icons/watch.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: width(4.5),
                width: width(4.5),
                marginRight: 3,
              }}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
                fontSize: fontSize(3.8),
                marginTop: height(0.2),
                marginHorizontal: width(0.8),
              }}>
              Open 08:00 AM to 09:00 PM
            </Text>
          </View>

          <Text
            style={{
              fontSize: fontSize(3.5),
              color: 'black',
              marginVertical: height(1.5),
              fontWeight: '400',
            }}>
            {
              'The Statue of Liberty, officially known as Liberty Enlightening the World, is a colossal neoclassical sculpture on Liberty Island'
            }
          </Text>

          <View style={{flexDirection: 'row', marginVertical: height(1)}}>
            <Image
              source={require('../assets/icons/whiteHeart.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: width(5),
                width: width(5),
                marginRight: 3,
                tintColor: COLORS.primary,
              }}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
                fontSize: fontSize(4),
                marginTop: height(0.2),
                marginHorizontal: width(0.8),
              }}>
              Total Checked In
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: width(10),
                borderWidth: width(0.2),
                marginHorizontal: width(2),
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  color: 'black',
                  fontSize: fontSize(2.8),
                  padding: width(1),
                }}>
                04
              </Text>
            </View>
          </View>

          <View
            style={{
              height: height(0.07),
              backgroundColor: '#F9A602',
              marginVertical: height(2),
            }}></View>

          <View style={{flexDirection: 'row', marginVertical: height(1)}}>
            <Image
              source={require('../assets/icons/whiteHeart.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: width(5),
                width: width(5),
                marginRight: 3,
                tintColor: COLORS.primary,
              }}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
                fontSize: fontSize(4),
                marginTop: height(0.2),
                marginHorizontal: width(0.8),
              }}>
              Checked in matches
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: width(10),
                borderWidth: width(0.2),
                marginHorizontal: width(2),
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  color: 'black',
                  fontSize: fontSize(2.8),
                  padding: width(1),
                }}>
                08
              </Text>
            </View>
          </View>

          <FlatList
            data={placeList}
            numColumns={4}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginVertical: height(1.5),
                  }}>
                  <Image
                    source={item.img}
                    style={{height: height(20), width: width(25)}}
                  />
                  <View>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: 'white',
                        fontSize: fontSize(3.8),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        paddingVertical: height(0.5),
                        backgroundColor: '#000000',
                        opacity: 0.85,
                        width: width(21.5),
                        alignItems: 'center',
                        textAlign: 'center',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </BaseView>
  );
}
