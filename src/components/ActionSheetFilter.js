import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeModal from 'react-native-modal';
import {COLORS, FONTS} from '../constants';
import {fontSize, height, width} from './Resizer';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MapView, {Marker} from 'react-native-maps';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export function ActionSheetFilter({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  const [multiSliderValue, setMultiSliderValue] = useState([20, 58]);
  const [SliderValue, setSliderValue] = useState(0);

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      style={styles.modalBox}
      useNativeDriver={true}>
      <View style={styles.optionsBox}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: height(2),
          }}>
          <Text
            style={
              ([styles.itemTitleText],
              {
                alignSelf: 'center',
                justifyContent: 'center',
                flex: 1,
                textAlign: 'center',
                marginStart: width(20),
                fontSize: height(2.8),
                fontFamily: FONTS.bold,
              })
            }>
            {'Filters'}
          </Text>
          <TouchableOpacity activeOpacity={1} onPress={() => onClose()}>
            <Text
              style={[
                styles.itemTitleText,
                {
                  color: COLORS.primary,
                  fontFamily: FONTS.bold,
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                  fontSize: height(2.2),
                },
              ]}>
              {'Clear'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: height(3), marginHorizontal: width(10)}}>
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
                Age range{' '}
              </Text>
              <Text
                style={{
                  fontSize: fontSize(4),
                  fontFamily: FONTS.bold,
                  color: 'gray',
                }}>
                20-28
              </Text>
            </View>
          </TouchableOpacity>

          <MultiSlider
            values={[multiSliderValue[0], multiSliderValue[1]]}
            sliderLength={320}
            min={0}
            max={100}
            step={2}
            allowOverlap
            snapped
          />

          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: height(1),
              }}>
              <Text style={{fontSize: fontSize(5), fontFamily: FONTS.bold}}>
                Distance preference
              </Text>
              <Text
                style={{
                  fontSize: fontSize(4),
                  fontFamily: FONTS.bold,
                  color: 'gray',
                }}>
                {SliderValue} Miles
              </Text>
            </View>
          </TouchableOpacity>

          <Slider
            step={1}
            minimumValue={30}
            maximumValue={100}
            minimumTrackTintColor="#0E2DCF"
            thumbTintColor="#0E2DCF"
            onValueChange={setSliderValue}
            style={{width: '100%'}}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonBox, {marginVertical: height(6)}]}
          onPress={() => onClose()}>
          <LinearGradient
            colors={['#0727CE', '#0727CE', '#052D8D']}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: height(1),
              width: width(80),
              height: height(7),
              marginTop: height(3),
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
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}

export function ActionSheetUnMatch({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      style={styles.modalBox1}
      useNativeDriver={true}>
      <View style={styles.optionsBox1}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: height(4),
          }}>
          <TouchableOpacity
            style={{marginTop: height(3)}}
            onPress={() => {
              onClose();
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: height(1),
                width: width(70),
                height: height(7),
                borderColor: 'black',
                backgroundColor: '#F3F4FC',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../assets/icons/unmatched.png')}
                  resizeMode={'contain'}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: width(4.5),
                    width: width(4.5),
                    marginHorizontal: width(1),
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: fontSize(4.5),
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontFamily: FONTS.bold,
                  }}>
                  {'Unmatch'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
}

export function ActionSheetCurrentLocation({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  const [searchText, onSearchText] = useState('');

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      style={styles.modalBox}
      useNativeDriver={true}>
      <View style={styles.optionsBox}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: height(5),
            marginBottom: height(4),
          }}>
          <Text
            style={
              ([styles.itemTitleText],
              {
                alignSelf: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: height(3),
                fontFamily: FONTS.bold,
              })
            }>
            {'My current location'}
          </Text>
        </View>

        <View style={{marginBottom: height(2)}}>
          <View style={{height: height(50), flexDirection: 'column'}}>
            <MapView
              style={{height: height(50)}}
              initialRegion={{
                latitude: 30.7046,
                longitude: 76.7179,
                latitudeDelta: 0.004745,
                longitudeDelta: 0.004757,
              }}>
              <Marker
                coordinate={{latitude: 30.7046, longitude: 76.7179}}
                image={require('../assets/icons/redLocation.png')}
              />
            </MapView>

            <View
              style={{
                height: height(10),
                alignSelf: 'center',
                justifyContent: 'center',
                width: width(100),
                position: 'absolute',
                top: height(40),
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

        <TouchableOpacity
          style={[styles.buttonBox, {marginVertical: height(6)}]}
          onPress={() => onClose()}>
          <LinearGradient
            colors={['#0727CE', '#0727CE', '#052D8D']}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: height(1),
              width: width(80),
              height: height(7),
              marginTop: height(3),
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
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}

export function ActionSheetShareLocation({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      style={styles.modalBox}
      useNativeDriver={true}>
      <View style={styles.optionsBox}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: height(4),
            marginBottom: height(2),
          }}>
          <Text
            style={
              ([styles.itemTitleText],
              {
                alignSelf: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: height(3),
                fontFamily: FONTS.bold,
              })
            }>
            {'Share Hot Spot'}
          </Text>
        </View>

        <View
          style={{
            marginVertical: height(2),
            marginHorizontal: width(5),
            height: height(50),
          }}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <Pressable>
                  <View
                    style={{
                      flexDirection: 'column',
                      borderColor: '#6F95FF',
                      borderWidth: width(0.2),
                      borderRadius: width(2),
                      marginBottom: height(2),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column', flex: 2.5}}>
                        <View
                          style={{
                            flexDirection: 'column',
                            margin: width(3),
                          }}>
                          <Text
                            style={{
                              fontFamily: FONTS.bold,
                              fontSize: fontSize(4.2),
                              color: 'black',
                              marginTop: height(0.2),
                            }}>
                            {item.title}
                          </Text>

                          <View
                            style={{
                              flexDirection: 'row',
                              marginVertical: height(1),
                            }}>
                            <Image
                              source={require('../assets/icons/addressLocation.png')}
                              style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                                height: width(3.5),
                                width: width(3.5),
                                marginRight: 3,
                              }}
                              resizeMode={'contain'}
                            />
                            <Text
                              style={{
                                fontWeight: '600',
                                color: 'black',
                                fontSize: fontSize(3),
                                marginTop: height(0.2),
                                marginHorizontal: width(0.8),
                              }}>
                              {item.address}
                            </Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <Image
                              source={require('../assets/icons/watch.png')}
                              style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                                height: width(3.5),
                                width: width(3.5),
                                marginRight: 3,
                              }}
                              resizeMode={'contain'}
                            />
                            <Text
                              style={{
                                fontWeight: '600',
                                color: 'black',
                                fontSize: fontSize(3),
                                marginTop: height(0.2),
                                marginHorizontal: width(0.8),
                              }}>
                              {item.time}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: fontSize(2.6),
                              color: 'black',
                              marginVertical: height(1),
                              fontWeight: '400',
                            }}>
                            {item.description}
                          </Text>
                        </View>

                        <View
                          style={{
                            height: height(0.06),
                            backgroundColor: '#6F95FF75',
                          }}
                        />

                        <View
                          style={{
                            flexDirection: 'row',
                            backgroundColor: '#6F95FF50',
                            padding: 8,
                            borderBottomLeftRadius: width(2),
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              paddingHorizontal: width(1.5),
                              paddingVertical: width(1.5),
                              backgroundColor: COLORS.primary,
                              borderRadius: width(2),
                              width: width(50),
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={require('../assets/icons/share.png')}
                              style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                                height: width(3.5),
                                width: width(3.5),
                                marginRight: 1,
                              }}
                              resizeMode={'contain'}
                            />
                            <Text
                              style={{
                                fontWeight: '600',
                                color: 'white',
                                fontSize: fontSize(3),
                                marginTop: height(0.2),
                                marginHorizontal: width(0.8),
                              }}>
                              Share this hot spot
                            </Text>
                          </View>
                        </View>
                      </View>

                      <Image
                        source={{uri: item.img}}
                        style={{
                          borderBottomRightRadius: width(2),
                          borderTopRightRadius: width(2),
                          flex: 1,
                        }}
                      />
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}

export function ActionSheetTutorial1({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      backdropOpacity={0.8}
      style={styles.modalBox}
      useNativeDriver={true}>
      <View
        style={{
          position: 'absolute',
          height: heightPercentageToDP(100),
          width: widthPercentageToDP(100),
          bottom: 0,
          left: 0,
          right: 0,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/icons/shortList.png')}
          style={{height: height(15), width: width(50), marginTop: height(8)}}
        />

        <Image
          source={require('../assets/icons/step1.png')}
          style={{height: height(20), width: width(65), marginTop: height(3)}}
        />
        <Image
          source={require('../assets/icons/step2.png')}
          style={{height: height(20), width: width(68), marginTop: height(3)}}
        />
        <Text
          style={{
            fontWeight: '700',
            color: 'white',
            fontSize: fontSize(6),
            marginTop: height(3),
          }}>
          Then interact with
        </Text>

        <Text
          style={{
            fontWeight: '700',
            color: 'white',
            fontSize: fontSize(6),
          }}>
          your matches!
        </Text>

        <Pressable
          style={{
            flexDirection: 'row',
            paddingHorizontal: width(2),
            paddingVertical: width(4),
            backgroundColor: COLORS.white,
            borderRadius: width(2),
            width: width(70),
            marginTop: height(3),
            justifyContent: 'center',
          }}
          onPress={onClose}>
          <Text
            style={{
              fontWeight: '600',
              color: 'black',
              fontSize: fontSize(6),
            }}>
            I'm ready!
          </Text>
        </Pressable>
      </View>
    </ReactNativeModal>
  );
}
export function ActionSheetTutorial2({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      backdropOpacity={0.8}
      style={styles.modalBox}
      useNativeDriver={true}>
      <View
        style={{
          position: 'absolute',
          height: heightPercentageToDP(100),
          width: widthPercentageToDP(100),
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Pressable activeOpacity={1} onPress={onClose}>
          <Image
            source={require('../assets/icons/seeStep.png')}
            style={{
              height: height(15),
              width: width(55),
              marginTop: height(15),
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />

          <Image
            source={require('../assets/icons/upArrow.png')}
            style={{
              height: height(4.5),
              width: width(10),
              marginTop: height(5),
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />

          <View style={{flexDirection: 'row', marginTop: height(2)}}>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={require('../assets/icons/unlikeRed.png')}
                style={{
                  height: height(8),
                  width: width(18),
                  padding: width(2),
                  marginHorizontal: width(4),
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontWeight: '600',
                  color: 'white',
                  fontSize: fontSize(4),
                  marginTop: height(1),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Swipe left
              </Text>

              <Text
                style={{
                  fontWeight: '600',
                  color: 'white',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontSize: fontSize(4),
                }}>
                Pass
              </Text>
            </View>

            <Image
              source={require('../assets/icons/leftArrow.png')}
              style={{
                height: height(6),
                width: width(12),
                marginHorizontal: width(2),
                marginTop: height(1),
              }}
              resizeMode="contain"
            />

            <Image
              source={require('../assets/icons/hand.png')}
              style={{
                height: height(7),
                width: width(10),
                padding: width(2),
                marginHorizontal: width(3),
                marginTop: height(1),
              }}
              resizeMode="contain"
            />

            <Image
              source={require('../assets/icons/rightArrow.png')}
              style={{
                height: height(6),
                width: width(12),
                marginHorizontal: width(2),
                marginTop: height(1),
              }}
              resizeMode="contain"
            />

            <View style={{flexDirection: 'column'}}>
              <Image
                source={require('../assets/icons/likeGreen.png')}
                style={{
                  height: height(8),
                  width: width(18),
                  padding: width(2),
                  marginHorizontal: width(4),
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontWeight: '600',
                  color: 'white',
                  fontSize: fontSize(4),
                  marginTop: height(1),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Swipe right
              </Text>

              <Text
                style={{
                  fontWeight: '600',
                  color: 'white',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontSize: fontSize(4),
                }}>
                Like
              </Text>
            </View>
          </View>

          <Image
            source={require('../assets/icons/downArrow.png')}
            style={{
              height: height(4.5),
              width: width(10),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: height(-3),
            }}
            resizeMode="contain"
          />

          <View style={{flexDirection: 'column', marginTop: height(2)}}>
            <Image
              source={require('../assets/icons/showAgain.png')}
              style={{
                height: height(8),
                width: width(18),
                padding: width(2),
                marginHorizontal: width(4),
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />

            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: fontSize(4),
                marginTop: height(1),
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Swipe Down
            </Text>

            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: fontSize(4),
              }}>
              Show again later
            </Text>
          </View>
        </Pressable>
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    height: 40,
    alignItems: 'center',
    borderRadius: 8,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  optionsBox: {
    backgroundColor: 'white',
    borderTopLeftRadius: width(10),
    borderTopRightRadius: width(10),
  },
  optionsBox1: {
    backgroundColor: 'white',
    borderBottomLeftRadius: width(7),
    borderBottomRightRadius: width(7),
  },
  modalBox: {margin: 0, justifyContent: 'flex-end', flex: 1},
  modalBox1: {margin: 0, justifyContent: 'flex-start', flex: 1},
  titleText: {
    color: '#757575',
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
  itemTitleText: {padding: 20, fontSize: 16, alignSelf: 'center'},
  cancelText: {padding: 15, fontSize: 16},
  cancelBox: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonBox: {
    height: 50,
    marginTop: 1,
    alignItems: 'center',
    borderRadius: 8,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
