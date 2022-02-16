import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
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
import {SignUpStep7} from '../services/CreateAccount.services';
import Validator from '../utils/Validator';

export default function SignIn7() {
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //Redux States
  const [celebrating, setCelebrating] = useState('');
  const [loader, setLoader] = useState(false);
  const next = async () => {
    setLoader(true);
    if (Validator.checkSingle(celebrating, 'What are you celebrating')) {
      const response = await SignUpStep7(celebrating);
      console.log(response);
      if (response.status === 200) {
        navigation.navigate('SignIn8');
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
       celebrating.length > 0 &&  <Pressable
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
        <Image
          source={require('../assets/icons/celebrating.png')}
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
            {'Tell us why you’re out &'}
          </Text>
          <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
            what are we celebrating!
          </Text>
        </View>

        <View style={{flex: 1, marginHorizontal: width(5)}}>
          <AppTextInput
            value={celebrating}
            onChangeText={setCelebrating}
            blurOnSubmit={false}
            isDescriptionValid={true}
            multiline={true}
          />
        </View>
      </View>
      <Loader visible={loader} />
    </BaseView>
  );
}
