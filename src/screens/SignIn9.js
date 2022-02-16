import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import Loader from '../components/Loader';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {SignUpStep9} from '../services/CreateAccount.services';
import {GetHobbiesService} from '../services/Hobbies.service';
export default function SignIn9() {
  const [hobbies, setHobbies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [addLoader, setAddLoader] = useState(false);
  const getHobbies = async () => {
    setLoader(true);
    const hobbiesResponse = await GetHobbiesService();
    if (hobbiesResponse.status === 200) {
      const newHobbies = hobbiesResponse?.data?.hobbies.map((x, i) => {
        const object = {...x, icon: require('../assets/icons/traveling.png')};
        return object;
      });
      setHobbies(newHobbies);
    }
    setLoader(false);
  };
  useEffect(() => {
    getHobbies();
  }, []);
  //Hooks
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);
  const next = async () => {
    setAddLoader(true);
    const responseAddhobbies = await SignUpStep9(selected);
    if (responseAddhobbies.status === 200) {
      navigation.navigate('SignIn10');
    }
    setAddLoader(false);
  };

  function onBack() {
    navigation.goBack();
  }

  function pushArray(item) {
    if (!selected.includes(item)) {
      // temp.push(item)
      setSelected(arr => arr.concat(item));
    } else {
      //    temp.splice(temp.indexOf(item))
      setSelected(arr => arr.filter(i => i != item));
    }
    console.log('selectedvalue', selected);
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
        selected.length > 4 && (
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
        )
      }>
      {!loader && (
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/icons/interest.png')}
            resizeMode={'contain'}
            style={{width: width(100), height: height(15)}}
            resizeMode={'contain'}
          />

          <View
            style={{flex: 1, alignItems: 'center', marginVertical: height(1)}}>
            <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
              Ask me about some of my
            </Text>
            <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
              favorite interests!
            </Text>
            <Text
              style={{
                fontSize: fontSize(3.5),
                marginVertical: height(1.5),
                fontFamily: FONTS.bold,
              }}>
              Pick up to 4
            </Text>
          </View>

          <View>
            <FlatList
              data={hobbies}
              numColumns={2}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    onPress={() => pushArray(item.id)}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      height: height(6),
                      marginVertical: height(1),
                      borderRadius: width(3),
                      backgroundColor: selected.includes(item.id)
                        ? '#0E2DCF'
                        : '#FFFFFF',
                      marginHorizontal: width(5),
                      paddingHorizontal: width(2),
                      borderColor: selected.includes(item.id)
                        ? COLORS.primary
                        : '#C1C1C1',
                      borderWidth: 0.5,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      {/* <Image source={item.icon} style={{ marginTop: height(0.4), marginStart: width(2), width: width(6.5), height: width(5.0), tintColor: selected.includes(item.name) ? 'white' : '#0727CE', resizeMode:'contain' }} /> */}

                      <Image
                        source={item.icon}
                        style={{
                          width: width(2.0),
                          height: width(2.0),
                          tintColor: selected.includes(item.id)
                            ? 'white'
                            : '#0727CE',
                          resizeMode: 'contain',
                          padding: width(3),
                          marginStart: width(2),
                        }}
                      />

                      <Text
                        style={{
                          fontFamily: FONTS.bold,
                          fontSize: fontSize(4),
                          color: selected.includes(item.id) ? 'white' : 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                          alignSelf: 'center',
                          marginHorizontal: width(2),
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      )}
      {loader &&<Loader />}
    </BaseView>
  );
}
