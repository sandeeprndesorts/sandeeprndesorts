import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import BaseView from '../components/BaseView';
let interestList = [
  {
    id: 1,
    name: 'Art',
    icon: require('../assets/icons/art.png'),
  },
  {
    id: 2,
    name: 'Sports',
    icon: require('../assets/icons/sport.png'),
  },
  {
    id: 3,
    name: 'Relaxing',
    icon: require('../assets/icons/relaxing.png'),
  },
];
const UserDetail = ({route}) => {
  const {userId} = route?.params;
  console.log(userId);
  return (
    <BaseView
      header={
        <View
          style={{
            paddingTop: height(3),
            marginHorizontal: width(3),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity activeOpacity={1}>
            <Image
              source={require('../assets/icons/homeLogo.png')}
              resizeMode={'contain'}
              style={{
                marginHorizontal: width(2),
                width: width(25),
                height: width(25),
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: height(4.3)}}>
            <TouchableOpacity activeOpacity={1} onPress={onMatch}>
              <Image
                source={require('../assets/icons/category.png')}
                resizeMode={'contain'}
                style={{
                  marginHorizontal: width(2),
                  width: width(7),
                  height: width(7),
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setShowPicker(true)}>
              <Image
                source={require('../assets/icons/filter.png')}
                resizeMode={'contain'}
                style={{
                  marginHorizontal: width(2),
                  width: width(7),
                  height: width(7),
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
      }>
      <View style={{flexDirection: 'column', marginTop: height(1)}}>
        <View
          style={{
            marginStart: width(1.5),
            marginEnd: width(3),
            marginBottom: height(5),
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Pressable>
              <Image
                source={{uri: 'https://i.pravatar.cc/300'}}
                style={{
                  width: width(100),
                  height: height(60),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </Pressable>

            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: height(55),
              }}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: fontSize(5),
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {'Jessica, 23'}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: fontSize(4.5),
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: width(5),
                marginTop: height(3),
              }}>
              {"Jessica's Status"}
            </Text>

            <Text
              style={{
                fontSize: fontSize(3.5),
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: width(5),
                marginVertical: height(1),
              }}>
              {
                'My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..'
              }
            </Text>

            <Pressable>
              <Image
                source={{uri: 'https://i.pravatar.cc/300'}}
                style={{
                  width: width(100),
                  height: height(60),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginVertical: height(2),
                }}
              />
            </Pressable>

            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: fontSize(4.5),
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: width(3),
                marginTop: height(1),
              }}>
              {"Jessica's Interests"}
            </Text>

            <TouchableOpacity activeOpacity={1}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {interestList.map((item, index) => {
                  return (
                    <Pressable
                      style={{
                        height: height(5),
                        paddingHorizontal: width(2),
                        alignSelf: 'center',
                        borderRadius: width(3),
                        backgroundColor: '#6F95FF50',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: width(3),
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={item.icon}
                          style={{
                            marginHorizontal: width(1),
                            width: width(5),
                            height: width(5),
                            tintColor: '#0727CE',
                          }}
                        />

                        <Text
                          style={{
                            fontSize: fontSize(4),
                            color: 'black',
                            marginEnd: width(1),
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </TouchableOpacity>

            <Pressable>
              <Image
                source={{uri: 'https://i.pravatar.cc/300'}}
                style={{
                  width: width(100),
                  height: height(60),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginVertical: height(2),
                }}
              />
            </Pressable>

            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: fontSize(4.5),
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: width(3),
                marginTop: height(1),
              }}>
              {"Jessica's Favorite Drinks"}
            </Text>

            <TouchableOpacity activeOpacity={1}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {['Whiskey', 'Vodka'].map((item, index) => {
                  return (
                    <Pressable
                      style={{
                        height: height(5),
                        paddingHorizontal: width(2),
                        alignSelf: 'center',
                        borderRadius: width(3),
                        backgroundColor: '#6F95FF50',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: width(3),
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/icons/drinkk.png')}
                          style={{
                            marginHorizontal: width(1),
                            width: width(5),
                            height: width(5),
                            tintColor: '#0727CE',
                          }}
                        />

                        <Text
                          style={{
                            fontSize: fontSize(4),
                            color: 'black',
                            marginEnd: width(1),
                          }}>
                          {item}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </TouchableOpacity>

            <Pressable>
              <Image
                source={{uri: 'https://i.pravatar.cc/300'}}
                style={{
                  width: width(100),
                  height: height(60),
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginVertical: height(2),
                }}
              />
            </Pressable>

            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: fontSize(4.5),
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: width(3),
                marginTop: height(1),
              }}>
              {"Jessica's Location"}
            </Text>

            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                margin: width(3),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/icons/addressLocation.png')}
                  style={{
                    marginHorizontal: width(1),
                    width: width(5),
                    height: width(5),
                    tintColor: '#0727CE',
                  }}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    color: 'black',
                    fontSize: fontSize(4),
                  }}>
                  Chicago, IL United States
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  color: 'black',
                  fontSize: fontSize(4),
                }}>
                200 ft away
              </Text>
            </View>
          </View>

          {test7 == 0 ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: height(4),
                marginBottom: height(10),
              }}>
              <Pressable
                onPress={() => clickButton(1)}
                style={{width: width(15), height: width(15)}}>
                <Image
                  source={require('../assets/icons/unlikeRed.png')}
                  style={{
                    marginHorizontal: width(8),
                    width: width(15),
                    height: width(15),
                  }}
                />
              </Pressable>

              <Pressable
                onPress={() => clickButton(2)}
                style={{
                  width: width(15),
                  height: width(15),
                  marginStart: width(5),
                }}>
                <Image
                  source={require('../assets/icons/showAgain.png')}
                  style={{
                    marginHorizontal: width(5),
                    width: width(15),
                    height: width(15),
                  }}
                />
              </Pressable>

              <Pressable
                onPress={() => clickButton(3)}
                style={{
                  width: width(15),
                  height: width(15),
                  marginEnd: width(15),
                }}>
                <Image
                  source={require('../assets/icons/likeGreen.png')}
                  style={{
                    marginHorizontal: width(8),
                    width: width(15),
                    height: width(15),
                  }}
                />
              </Pressable>
            </View>
          ) : test7 == 1 ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: height(4),
                marginBottom: height(10),
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/unlikeRed.png')}
                style={{width: width(15), height: width(15)}}
              />
            </View>
          ) : test7 == 2 ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: height(4),
                marginBottom: height(10),
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/showAgain.png')}
                style={{
                  marginHorizontal: width(5),
                  width: width(15),
                  height: width(15),
                }}
              />
            </View>
          ) : test7 == 3 ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: height(4),
                marginBottom: height(10),
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/likeGreen.png')}
                style={{
                  marginHorizontal: width(8),
                  width: width(15),
                  height: width(15),
                }}
              />
            </View>
          ) : null}
        </View>
      </View>

      {picker()}
    </BaseView>
  );
};

export default UserDetail;
