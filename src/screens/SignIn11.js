import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {SignUpStep11} from '../services/CreateAccount.services';
import {storeData} from '../utils/LocalStorage';
import Validator from '../utils/Validator';
export default function SignIn10() {
  const {setUsersSignUpData} = useContext(UserSignUpContext);
  //Hooks
  const navigation = useNavigation();
  const [drink1, setDrink1] = useState('');
  const [drink2, setDrink2] = useState('');
  const [loader, setLoader] = useState(false);
  const next = async () => {
    setLoader(true);
    if (
      Validator.checkSingle(drink1, 'drink 1') &&
      Validator.checkSingle(drink2, 'drink 2')
    ) {
      const responseAddDrinks = await SignUpStep11();
      console.log(responseAddDrinks, 'drinks');
      if (responseAddDrinks.status === 200) {
        setUsersSignUpData(responseAddDrinks?.data?.user);
        storeData("userSignUpEndData",responseAddDrinks?.data?.user);
        navigation.navigate('SignInEnd');
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
          source={require('../assets/icons/drink.png')}
          resizeMode={'contain'}
          style={{
            width: width(100),
            height: height(20),
            marginVertical: height(2),
          }}
          resizeMode={'contain'}
        />

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
            Break the ice with a
          </Text>
          <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
            drink! Let others know
          </Text>
          <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
            what drink to send your
          </Text>
          <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
            way and vice versa!
          </Text>

          <Text
            style={{
              fontSize: fontSize(3.2),
              marginVertical: height(3),
              fontWeight: '500',
            }}>
            Your favorite drink choices:
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: width(10),
            flexDirection: 'row',
            marginVertical: height(3),
          }}>
          <Text style={{fontSize: fontSize(4)}}>1.</Text>
          <View style={{marginTop: -50, width: width(80)}}>
            <AppTextInput
              value={drink1}
              onChangeText={setDrink1}
              blurOnSubmit={false}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: width(10),
            flexDirection: 'row',
            marginVertical: height(3),
          }}>
          <Text style={{fontSize: fontSize(4)}}>2.</Text>
          <View style={{marginTop: -50, width: width(80)}}>
            <AppTextInput
              value={drink2}
              onChangeText={setDrink2}
              blurOnSubmit={false}
              onSubmitEditing={() => {}}
            />
          </View>
        </View>
      </View>
    </BaseView>
  );
}
