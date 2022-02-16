import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
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

import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

export default function SignIn8() {
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //Redux States

  function next() {
    navigation.navigate('SignIn9');
  }

  function onBack() {
    navigation.goBack();
  }

  const [searchText, onSearchText] = useState('');
  const [onDragEndCoordinates, setOnDragEndCoordinates] = useState('');
  const [region, setRegion] = useState();
  const handleChangeRegion = regionMap => {
    setRegion(regionMap);
    console.log(region);
  };
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
      <View style={{flex: 1, paddingVertical: height(1)}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: fontSize(5),
              fontFamily: FONTS.bold,
              textAlign: 'center',
            }}>
            Which city do you live in?
          </Text>
        </View>
        <View style={{flex: 1, marginVertical: height(2)}}>
          <View style={{height: height(90), flexDirection: 'column'}}>
            <MapView
              onRegionChange={handleChangeRegion}
              region={region}
              style={{height: height(90)}}
              showsUserLocation={true}
              initialRegion={{
                latitude: 30.7046,
                longitude: 76.7179,
                latitudeDelta: 0.004745,
                longitudeDelta: 0.004757,
              }}>
              <Marker
                coordinate={{latitude: 30.7046, longitude: 76.7179}}
                image={require('../assets/icons/redLocation.png')}
                // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
              />
            </MapView>
            <View
              style={{
                height: height(10),
                alignSelf: 'center',
                justifyContent: 'center',
                width: width(100),
                position: 'absolute',
                top: height(52),
              }}>
              <Pressable>
                <View
                  style={{
                    height: height(6.5),
                    width: width(90),
                    borderRadius: width(3),
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginBottom: height(1),
                  }}>
                  <Image
                    source={require('../assets/icons/location.png')}
                    resizeMode={'contain'}
                    style={{
                      marginStart: width(5),
                      alignSelf: 'center',
                      justifyContent: 'center',
                      height: height(5),
                      width: width(5),
                    }}
                  />

                  <TextInput
                    style={{
                      fontSize: fontSize(4),
                      color: 'black',
                      marginHorizontal: width(3),
                      flex: 1,
                    }}
                    onChangeText={onSearchText}
                    value={searchText}
                    placeholder="New York City"
                  />

                  <Image
                    source={require('../assets/icons/search.png')}
                    resizeMode={'contain'}
                    style={{
                      marginHorizontal: width(5),
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </BaseView>
  );
}
