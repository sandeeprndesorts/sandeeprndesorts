import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {CONFIG, FONTS} from '../constants';
import {
  onAddFav,
  propertiesReqError,
  propertiesReqInit,
} from '../reducers/propertiesReducer';
import {Api} from '../utils/Api';
import {fontSize, height, width} from './Resizer';

export default function AppItem({data, style, navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  function onFav() {
    dispatch(
      Api(
        `user/fav`,
        'POST',
        JSON.stringify({propertyId: data._id}),
        true,
        propertiesReqInit,
        onAddFav,
        propertiesReqError,
      ),
    );
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(
          global.type == 'seller'
            ? 'PropertyDetailsSeller'
            : 'PropertyDetailsBuyer',
          {data},
        );
      }}
      style={[
        {
          flexDirection: 'row',
          borderRadius: width(5),
          marginHorizontal: width(5),
          marginVertical: height(1),
          backgroundColor: 'white',
        },
        style,
      ]}>
      <Image
        style={{
          width: width(30),
          borderTopLeftRadius: width(5),
          borderBottomLeftRadius: width(5),
        }}
        source={{uri: `${CONFIG.baseUrl}${data.images[0]}`}}
      />

      <View
        style={{
          borderRadius: height(2),
          backgroundColor: data.isRental ? '#FFA811' : '#23C133',
          paddingHorizontal: width(3),
          position: 'absolute',
          margin: width(3),
          paddingVertical: height(0.5),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize(3),
            fontFamily: FONTS.bold,
            color: 'white',
          }}>
          {data.isRental ? 'For Rent' : 'For Sale'}
        </Text>
      </View>
      <View style={{padding: width(4), flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#585858',
              fontFamily: FONTS.regular,
              fontSize: fontSize(4),
            }}>
            {data.name}
          </Text>
          <Pressable onPress={onFav}>
            <Image
              style={{height: width(4), width: width(4)}}
              resizeMode="contain"
              source={
                data.isFav
                  ? require('../assets/icons/check.png')
                  : require('../assets/icons/heart_gray.png')
              }
            />
          </Pressable>
        </View>
        <Text
          style={{
            color: '#1473E6',
            paddingVertical: 4,
            fontFamily: FONTS.medium,
            fontSize: fontSize(4),
          }}>
          $ {data.price}
        </Text>
        {data.type == 'Home' && (
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                style={{
                  tintColor: 'lightgray',
                  height: height(2),
                  width: width(2),
                  marginEnd: 4,
                  top: Platform.OS == 'android' ? 4 : 0,
                }}
                resizeMode="contain"
                source={require('../assets/icons/check.png')}
              />
              <View>
                <Text style={{fontFamily: FONTS.light, color: '#999999'}}>
                  Bedrooms
                </Text>
                <Text style={{fontFamily: FONTS.regular, color: '#585858'}}>
                  {data.bedrooms}
                </Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                style={{
                  tintColor: 'lightgray',
                  height: height(2),
                  width: width(2),
                  marginEnd: 4,
                  top: Platform.OS == 'android' ? 4 : 0,
                }}
                resizeMode="contain"
                source={require('../assets/icons/check.png')}
              />
              <View>
                <Text style={{fontFamily: FONTS.light, color: '#999999'}}>
                  Bathrooms
                </Text>
                <Text style={{fontFamily: FONTS.regular, color: '#585858'}}>
                  {data.bathrooms}
                </Text>
              </View>
            </View>
          </View>
        )}
        <Text
          style={{
            fontFamily: FONTS.light,
            color: '#999999',
            marginTop: height(1),
          }}>
          {data.region}
          {data.address}
        </Text>
      </View>
    </Pressable>
  );
}
