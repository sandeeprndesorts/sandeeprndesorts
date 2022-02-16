import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BaseView from '../components/BaseView';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import Swiper from 'react-native-deck-swiper';
import {
  ActionSheetFilter,
  ActionSheetTutorial1,
  ActionSheetTutorial2,
} from '../components/ActionSheetFilter';
import {useContext} from 'react';
import {UserSignUpContext} from '../contextAPI/UserSignUpData';
import {getStoredData} from '../utils/LocalStorage';
import {
  GetDashboardUsers,
  LikeUserService,
  UserDetailService,
} from '../services/dashboard.service';
import {mediaBaseUrl} from '../utils/axios';
import Loader from '../components/Loader';
import Messager from '../utils/Messager';
let placeList = [
  {
    id: 1,
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 2,
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 3,
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 4,
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 5,
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 6,
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
];

let topRank = [
  {
    id: 1,
    name: 'Kate, 32',
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 2,
    name: 'Bob, 34',
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
  {
    id: 3,
    name: 'Anastasia, 26',
    img: {uri: 'https://i.pravatar.cc/300'},
    redImage: require('../assets/icons/unlikeRed.png'),
    yellowImage: require('../assets/icons/showAgain.png'),
    greenImage: require('../assets/icons/likeGreen.png'),
  },
];

let flipperList = [];

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

export default function Match({route}) {
  const {userSignUpData} = useContext(UserSignUpContext);
  const [usersData, setUsersData] = useState([]);
  const navigation = useNavigation();
  const [clickImage, setClickImage] = useState(0);
  const [loader, setLoader] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [base, setBase] = useState(1);
  const [temp, setTemp] = useState('0');
  const [showTutorial2, setshowTutorial2] = useState(true);
  const [showTutorial1, setshowTutorial1] = useState(true);
  const [detailLoader, setDetailLoader] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selected, setSelected] = useState([]);
  const [swipeCards, setSwipeCards] = useState([]);
  const [test1, setTest1] = useState(0);
  const [test2, setTest2] = useState(0);
  const [test3, setTest3] = useState(0);
  const [test4, setTest4] = useState(0);
  const [test5, setTest5] = useState(0);
  const [test6, setTest6] = useState(0);
  const imageValue1 = require('../assets/icons/Mask.png');
  const imageValue2 = require('../assets/icons/orientaial.png');
  const [selected1, setSelected1] = useState([]);
  const [userData, setUserData] = useState({});
  const [test7, setTest7] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      // console.log(global.base)
      // setSelected1([])
      if (global.base != undefined) {
        setBase(global.base);
      } else {
        global.base = '1';
      }
    }),
  );
  const getDashboardUsers = async () => {
    setLoader(true);
    const responseDashboardUsers = await GetDashboardUsers({
      want_to_see_id: userData.want_to_see_id,
      relationship_status_id: userData.relationship_status_id,
      hobby_ids: userData.hobbies,
      goal_ids: userData.goals,
      frequent_location_ids: userData.frequent_locations,
      from_age: 18,
      to_age: 25,
    });
    if (responseDashboardUsers.status === 200) {
      const modifyData = responseDashboardUsers?.data?.users?.map((x, i) => {
        const data = {
          id: x.id,
          name: `${x.first_name}${x.last_name}`,
          img: x.images,
        };
        return data;
      });
      setSwipeCards(modifyData);
      setUsersData(responseDashboardUsers?.data?.users);
    }
    setLoader(false);
  };

  useEffect(() => {
    getStoredData('userSignUpEndData')
      .then(data => {
        setUserData(data);
      })
      .catch(err => console.log(err));
    // setSelected1([])
    if (global.base != undefined) {
      setBase(global.base);
    } else {
      global.base = '1';
    }
    getDashboardUsers();
  }, []);

  const picker = () => {
    return (
      <ActionSheetFilter
        isVisible={showPicker}
        options={[]}
        onClose={() => setShowPicker(false)}
        title={'Continue'}
        onSelected={index => {}}
      />
    );
  };

  function onTopRank() {
    setBase(2);
    global.base = '2';
  }

  function onMatch() {
    setBase(1);

    global.base = '1';
  }
  const onDetail = async userId => {
    setDetailLoader(true);
    setBase(4);
    global.base = '4';
    const responseDetailUser = await UserDetailService(userId);
    if (responseDetailUser.status === 200) {
      setUserDetail(responseDetailUser?.data?.user);
    }
    setDetailLoader(false);
    console.log(responseDetailUser, 'userdetail');
  };

  function onFlip() {
    setBase(3);

    global.base = '3';
  }
  function onDone() {
    navigation.navigate('MatchSent');
  }
  function onClick(value, index) {
    setValue(index);
    setTemp(temp + 1);
    if (value == 1) {
      setClickImage(value);
    } else if (value == 2) {
      setClickImage(value);
    } else if (value == 3) {
      setClickImage(value);
    }
  }

  const tutorial1 = () => {
    return (
      <ActionSheetTutorial1
        isVisible={showTutorial1}
        options={[]}
        onClose={() => setshowTutorial1(false)}
        title={'I am ready!'}
        onSelected={index => {}}
      />
    );
  };

  const tutorial2 = () => {
    setTimeout(() => {
      setshowTutorial2(false);
    }, 3000);
    return (
      <ActionSheetTutorial2
        isVisible={showTutorial2}
        options={[]}
        onClose={() => setshowTutorial2(false)}
        title={'See More'}
        onSelected={index => {}}
      />
    );
  };

  function emptyList(index) {
    setTimeout(() => {
      setTest1(0);
      setTest2(0);
      setTest3(0);
      setTest4(0);
      setTest5(0);
      setTest6(0);
      setSelected([]);
    }, 2000);
  }

  const pushArray = (item, value) => {
    setSelected1(arr => arr.concat(item));
    if (!selected.includes(item)) {
      setSelected(arr => arr.concat(item));
      if (item == 1) {
        setTest1(value);
      } else if (item == 2) {
        setTest2(value);
      } else if (item == 3) {
        setTest3(value);
      } else if (item == 4) {
        setTest4(value);
      } else if (item == 5) {
        setTest5(value);
      } else if (item == 6) {
        setTest6(value);
      }
    } else {
      setSelected(arr => arr.filter(i => i != item));
    }
  };
  const clickButton = value => {
    setTest7(value);
    setTimeout(() => {
      if (value == 1) {
        onFlip();
      }
      if (value == 2) {
      }
      if (value == 3) {
        navigation.navigate('MatchDone');
      }
    }, 1000);

    setTimeout(() => {
      setTest7(0);
    }, 1500);
  };
  const handleLikeUser = async data => {
    const responseLikeUser = await LikeUserService(data?.id);
    if (responseLikeUser.status === 200) {
      Messager.toast(responseLikeUser.data.message);
    }
  };
  return base == '1' ? (
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
          <View style={{flexDirection: 'row', marginTop: height(4)}}>
            <TouchableOpacity activeOpacity={1} onPress={onFlip}>
              <Image
                source={require('../assets/icons/activeCards.png')}
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
      {loader && <Loader visible={true} />}
      {!loader &&
        usersData?.map((user, index) => {
          console.log(user);
          return (
            <View
              style={{marginStart: width(1.5), marginEnd: width(3)}}
              key={index}>
              <View>
                <FlatList
                  data={user.images}
                  numColumns={2}
                  keyExtractor={(item, index) => index}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        style={{
                          marginHorizontal: width(1),
                          marginVertical: height(1),
                        }}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => onDetail(user.id)}>
                          {selected.includes(item.id) ? (
                            <Image
                              source={{
                                uri: ``,
                              }}
                              style={{
                                height: width(57),
                                width: width(45),
                                marginHorizontal: width(1),
                                marginTop: height(0.1),
                              }}
                            />
                          ) : (
                            <Image
                              source={{
                                uri:
                                  user.images[0]?.file.url === null ||
                                  user.images[0]?.file.url === undefined ||
                                  user.images[0]?.file.url === ''
                                    ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                                    : `${mediaBaseUrl}${user?.images[0]?.file?.url}`,
                              }}
                              style={{
                                height: width(45),
                                width: width(45),
                                marginHorizontal: width(1),
                              }}
                            />
                          )}
                        </TouchableOpacity>
                        {selected.includes(user.id) && index == 0 ? (
                          <Pressable
                            style={{
                              height: height(35),
                              width: width(45),
                              position: 'absolute',
                              justifyContent: 'center',
                              alignSelf: 'center',
                            }}
                            onPress={emptyList(index)}>
                            <View>
                              <Image
                                source={
                                  test1 == 1
                                    ? require('../assets/icons/unlikeRed.png')
                                    : test1 == 2
                                    ? require('../assets/icons/showAgain.png')
                                    : test1 == 3
                                    ? require('../assets/icons/likeGreen.png')
                                    : null
                                }
                                style={{
                                  height: width(13),
                                  width: width(13),
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                  marginBottom: height(7),
                                }}
                              />
                            </View>
                          </Pressable>
                        ) : selected.includes(item.id) && index == 1 ? (
                          <Pressable
                            style={{
                              height: height(35),
                              width: width(45),
                              position: 'absolute',
                              justifyContent: 'center',
                              alignSelf: 'center',
                            }}
                            onPress={emptyList(index)}>
                            <View>
                              <Image
                                source={
                                  test2 == 1
                                    ? require('../assets/icons/unlikeRed.png')
                                    : test2 == 2
                                    ? require('../assets/icons/showAgain.png')
                                    : test2 == 3
                                    ? require('../assets/icons/likeGreen.png')
                                    : null
                                }
                                style={{
                                  height: width(13),
                                  width: width(13),
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                  marginBottom: height(7),
                                }}
                              />
                            </View>
                          </Pressable>
                        ) : selected.includes(item.id) && index == 2 ? (
                          <Pressable
                            style={{
                              height: height(35),
                              width: width(45),
                              position: 'absolute',
                              justifyContent: 'center',
                              alignSelf: 'center',
                            }}
                            onPress={emptyList(index)}>
                            <View>
                              <Image
                                source={
                                  test3 == 1
                                    ? require('../assets/icons/unlikeRed.png')
                                    : test3 == 2
                                    ? require('../assets/icons/showAgain.png')
                                    : test3 == 3
                                    ? require('../assets/icons/likeGreen.png')
                                    : null
                                }
                                style={{
                                  height: width(13),
                                  width: width(13),
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                  marginBottom: height(7),
                                }}
                              />
                            </View>
                          </Pressable>
                        ) : selected.includes(item.id) && index == 3 ? (
                          <Pressable
                            style={{
                              height: height(35),
                              width: width(45),
                              position: 'absolute',
                              justifyContent: 'center',
                              alignSelf: 'center',
                            }}
                            onPress={emptyList(index)}>
                            <View>
                              <Image
                                source={
                                  test4 == 1
                                    ? require('../assets/icons/unlikeRed.png')
                                    : test4 == 2
                                    ? require('../assets/icons/showAgain.png')
                                    : test4 == 3
                                    ? require('../assets/icons/likeGreen.png')
                                    : null
                                }
                                style={{
                                  height: width(13),
                                  width: width(13),
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                  marginBottom: height(7),
                                }}
                              />
                            </View>
                          </Pressable>
                        ) : selected.includes(item.id) && index == 4 ? (
                          <Pressable
                            style={{
                              height: height(35),
                              width: width(45),
                              position: 'absolute',
                              justifyContent: 'center',
                              alignSelf: 'center',
                            }}
                            onPress={emptyList(index)}>
                            <View>
                              <Image
                                source={
                                  test5 == 1
                                    ? require('../assets/icons/unlikeRed.png')
                                    : test5 == 2
                                    ? require('../assets/icons/showAgain.png')
                                    : test5 == 3
                                    ? require('../assets/icons/likeGreen.png')
                                    : null
                                }
                                style={{
                                  height: width(13),
                                  width: width(13),
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                  marginBottom: height(7),
                                }}
                              />
                            </View>
                          </Pressable>
                        ) : selected.includes(item.id) && index == 5 ? (
                          <Pressable
                            style={{
                              height: height(35),
                              width: width(45),
                              position: 'absolute',
                              justifyContent: 'center',
                              alignSelf: 'center',
                            }}
                            onPress={emptyList(index)}>
                            <View>
                              <Image
                                source={
                                  test6 == 1
                                    ? require('../assets/icons/unlikeRed.png')
                                    : test6 == 2
                                    ? require('../assets/icons/showAgain.png')
                                    : test6 == 3
                                    ? require('../assets/icons/likeGreen.png')
                                    : null
                                }
                                style={{
                                  height: width(13),
                                  width: width(13),
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                  marginBottom: height(7),
                                }}
                              />
                            </View>
                          </Pressable>
                        ) : null}

                        {selected.includes(item.id) ? null : (
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              height: height(8),
                              backgroundColor: '#000000',
                              opacity: 0.85,
                              marginTop: height(-2.1),
                              marginHorizontal: width(1),
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                                position: 'absolute',
                              }}>
                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => pushArray(item.id, 1)}>
                                <Image
                                  source={item.redImage}
                                  style={{
                                    height: width(10),
                                    width: width(10),
                                    marginHorizontal: width(1),
                                  }}
                                  resizeMode={'contain'}
                                />
                              </TouchableOpacity>

                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => pushArray(item.id, 2)}>
                                <Image
                                  source={item.yellowImage}
                                  style={{
                                    height: width(10),
                                    width: width(10),
                                    marginHorizontal: width(1),
                                  }}
                                  resizeMode={'contain'}
                                />
                              </TouchableOpacity>

                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => pushArray(item.id, 3)}>
                                <Image
                                  source={item.greenImage}
                                  style={{
                                    height: width(10),
                                    width: width(10),
                                    marginHorizontal: width(1),
                                  }}
                                  resizeMode={'contain'}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        )}

                        {/* 
                                  {clickImage == 0 ?
                                      <View style={{ flexDirection: 'row', justifyContent: 'center', height: height(8), backgroundColor: '#000000', opacity: 0.85, marginTop: height(-2.1), marginHorizontal: width(1) }}>
  
                                          <View style={{ flexDirection: 'row', alignSelf: 'center', position: 'absolute' }}>
  
                                              <TouchableOpacity activeOpacity={1} onPress={() => onClick(1, index)}>
                                                  <Image source={item.redImage} style={{ height: width(10), width: width(10), marginHorizontal: width(1) }} resizeMode={'contain'} />
                                              </TouchableOpacity>
  
                                              <TouchableOpacity activeOpacity={1} onPress={() => onClick(2, index)}>
                                                  <Image source={item.yellowImage} style={{ height: width(10), width: width(10), marginHorizontal: width(1) }} resizeMode={'contain'} />
                                              </TouchableOpacity>
  
                                              <TouchableOpacity activeOpacity={1} onPress={() => onClick(3, index)}>
                                                  <Image source={item.greenImage} style={{ height: width(10), width: width(10), marginHorizontal: width(1) }} resizeMode={'contain'} />
                                              </TouchableOpacity>
  
                                          </View>
  
                                      </View>
                                      : value != index & clickImage != 0 ?
                                          <View style={{ flexDirection: 'row', justifyContent: 'center', height: height(8), backgroundColor: '#000000', opacity: 0.85, marginTop: height(-2.1), marginHorizontal: width(1) }}>
  
                                              <View style={{ flexDirection: 'row', alignSelf: 'center', position: 'absolute' }}>
  
                                                  <TouchableOpacity activeOpacity={1} onPress={() => onClick(1, index)}>
                                                      <Image source={item.redImage} style={{ height: width(10), width: width(10), marginHorizontal: width(1) }} resizeMode={'contain'} />
                                                  </TouchableOpacity>
  
                                                  <TouchableOpacity activeOpacity={1} onPress={() => onClick(2, index)}>
                                                      <Image source={item.yellowImage} style={{ height: width(10), width: width(10), marginHorizontal: width(1) }} resizeMode={'contain'} />
                                                  </TouchableOpacity>
  
                                                  <TouchableOpacity activeOpacity={1} onPress={() => onClick(3, index)}>
                                                      <Image source={item.greenImage} style={{ height: width(10), width: width(10), marginHorizontal: width(1) }} resizeMode={'contain'} />
                                                  </TouchableOpacity>
  
                                              </View>
  
                                          </View> : null
                                  } */}
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          );
        })}
      {!loader && (
        <View>
          <Text
            style={{
              fontSize: fontSize(4),
              justifyContent: 'center',
              alignSelf: 'center',
              margin: width(5),
            }}>
            Liked{' '}
            <Text
              style={{
                fontSize: fontSize(5),
                justifyContent: 'center',
                alignSelf: 'center',
                margin: width(5),
                fontFamily: FONTS.bold,
              }}>
              {selected1.length > 0 ? selected1.length : '0'}
            </Text>
          </Text>
          {selected1.length > 5 ? (
            <Text
              style={{
                fontSize: fontSize(5),
                justifyContent: 'center',
                alignSelf: 'center',
                margin: width(2),
                fontFamily: FONTS.bold,
                color: '#B69A06',
              }}>
              {'You reached your max likes'}
            </Text>
          ) : null}

          <Pressable
            onPress={onTopRank}
            style={{
              height: height(7),
              marginVertical: height(1),
              borderRadius: height(1),
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: width(10),
              marginBottom: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/rank.png')}
                style={{
                  height: height(6),
                  marginHorizontal: width(3),
                  width: width(6),
                  resizeMode: 'contain',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: fontSize(4.5),
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontFamily: FONTS.bold,
                }}>
                Rank my liked matches
              </Text>
            </View>
          </Pressable>
        </View>
      )}
      {picker()}

      {tutorial1()}
    </BaseView>
  ) : base == '2' ? (
    <BaseView
      header={
        <View
          style={{
            paddingTop: height(3),
            marginHorizontal: width(3),
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: height(15),
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

          <View style={{flexDirection: 'row', marginVertical: height(4)}}>
            <TouchableOpacity activeOpacity={1} onPress={onFlip}>
              <Image
                source={require('../assets/icons/activeCards.png')}
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
      <View
        style={{
          marginStart: width(1.5),
          marginEnd: width(3),
          marginBottom: height(2),
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/icons/likeGreen.png')}
            resizeMode={'contain'}
            style={{
              marginHorizontal: width(2),
              width: width(7),
              height: width(7),
            }}
            resizeMode={'contain'}
          />

          <Text
            style={{
              fontSize: fontSize(4),
              fontFamily: FONTS.bold,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Rank your top 3 likes
          </Text>
        </View>

        <FlatList
          data={topRank}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <View style={{marginHorizontal: width(6), marginTop: width(5)}}>
                <Pressable onPress={onDetail}>
                  <Image source={item.img} style={{height: height(25)}} />
                </Pressable>
                <View
                  style={{
                    flexDirection: 'row',
                    height: height(7),
                    backgroundColor: '#000000',
                    opacity: 0.85,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: fontSize(4.5),
                      fontFamily: FONTS.bold,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      color: 'white',
                      marginHorizontal: width(4),
                    }}>
                    {item.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginHorizontal: width(2),
                    }}>
                    <View
                      style={{
                        borderRadius: width(50),
                        backgroundColor: index == 0 ? '#06C900' : 'white',
                        height: width(9.5),
                        width: width(9.5),
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: fontSize(5),
                          fontFamily: FONTS.bold,
                          justifyContent: 'center',
                          alignSelf: 'center',
                          color: index == 0 ? 'white' : 'black',
                        }}>
                        {'1'}
                      </Text>
                    </View>

                    <View
                      style={{
                        borderRadius: width(50),
                        backgroundColor: index == 1 ? '#06C900' : 'white',
                        height: width(9.5),
                        width: width(9.5),
                        justifyContent: 'center',
                        marginHorizontal: width(2),
                      }}>
                      <Text
                        style={{
                          fontSize: fontSize(5),
                          fontFamily: FONTS.bold,
                          justifyContent: 'center',
                          alignSelf: 'center',
                          color: index == 1 ? 'white' : 'black',
                        }}>
                        {'2'}
                      </Text>
                    </View>

                    <View
                      style={{
                        borderRadius: width(50),
                        backgroundColor: index == 2 ? '#06C900' : 'white',
                        height: width(9.5),
                        width: width(9.5),
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: fontSize(5),
                          fontFamily: FONTS.bold,
                          justifyContent: 'center',
                          alignSelf: 'center',
                          color: index == 2 ? 'white' : 'black',
                        }}>
                        {'3'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <Pressable
          onPress={onDone}
          style={{
            height: height(7),
            marginVertical: height(1),
            borderRadius: height(1),
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 18,
            width: width(80),
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: height(6),
                marginHorizontal: width(3),
                width: width(5),
                resizeMode: 'contain',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: fontSize(5),
                textAlign: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                fontFamily: FONTS.bold,
              }}>
              Done!
            </Text>
          </View>
        </Pressable>
      </View>
    </BaseView>
  ) : base == '3' ? (
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
      <View>
        <Swiper
          cards={swipeCards}
          renderCard={card => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#F6F6F6',
                  alignItems: 'center',
                  marginTop: height(-10),
                }}>
                <Pressable onPress={onDetail}>
                  <Image
                    source={{
                      uri: `${mediaBaseUrl}${card?.img[0]?.file?.url}`,
                    }}
                    style={{
                      width: width(100),
                      height: height(72),
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
                    bottom: height(7),
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: fontSize(5),
                      color: 'black',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {card?.name}
                  </Text>
                </View>
              </View>
            );
          }}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          onSwipedLeft={() => console.log('jhjh')}
          onSwipedRight={(index, data) => handleLikeUser(data)}
          backgroundColor={COLORS.white}
          useViewOverflow={Platform.OS === 'ios'}
          infinite={true}>
          {/* navigation.navigate('MatchDone') */}
        </Swiper>

        <View style={{flexDirection: 'column', marginTop: height(65)}}>
          <View
            style={{
              flexDirection: 'row',
              height: height(4),
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
              marginTop: height(3),
            }}>
            <TouchableOpacity activeOpacity={1} onPress={onDetail}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  marginTop: height(0.5),
                }}>
                <Image
                  source={require('../assets/icons/seeMore.png')}
                  style={{
                    width: width(3),
                    height: height(3),
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginHorizontal: width(2),
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    fontFamily: FONTS.bold,
                    fontSize: fontSize(4),
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  {'See More'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {picker()}
      {tutorial2()}
    </BaseView>
  ) : base == '4' ? (
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
                source={{uri: userDetail?.images[0]?.file?.url}}
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
              {`${userDetail.first_name} ${userDetail.last_name}'s Status`}
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
              {`${userDetail.first_name} ${userDetail.last_name}'s Interest`}
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
              {`${userDetail.first_name} ${userDetail.last_name}'s Favourite Drinks`}
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
              {`${userDetail.first_name} ${userDetail.last_name}'s Location`}
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
  ) : null;
}

const styles = StyleSheet.create({
  overlaycontainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
    opacity: 0.67,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
