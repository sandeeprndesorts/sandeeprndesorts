import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import {FlatList, Image, Pressable} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import BaseView from '../components/BaseView';
import React from 'react';
import {fontSize, height, width} from '../components/Resizer';
import {COLORS, FONTS} from '../constants';
import {useState} from 'react';
import {SignUpStep5} from '../services/CreateAccount.services';
import Loader from '../components/Loader';
let List = [];
export default function SignIn5() {
  const [showPicker, setShowPicker] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedImages, setSelectedImages] = useState(List);
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //Redux States
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  const next = async () => {
    setLoader(true);
    const newFormat = selectedImages.map((x, i) => {
      const object = {
        file: x,
      };
      return object;
    });
    const response = await SignUpStep5(newFormat);
    console.log(response, 'upload Images');
    if (response.status === 200) {
      navigation.navigate('SignIn6');
    }
    setLoader(false);
  };

  function onBack() {
    navigation.goBack();
  }

  const handlePhotoUpload = () => {
    setShowPicker(true);
  };
  const handleChoosePhoto = type => {
    const options = {
      noData: true,
      multiple: true,
    };
    if (type === 'camera') {
      ImagePicker.launchCamera(options, response => {
        const imageObj = {
          uri: response?.assets[0]?.uri,
          name: response?.assets[0]?.fileName,
          type: response?.assets[0]?.type,
        };
        setSelectedImages(prevState => {
          return [...prevState, imageObj];
        });
      });
    } else {
      ImagePicker.launchImageLibrary(options, response => {
        const imageObj = {
          uri: response?.assets[0]?.uri,
          name: response?.assets[0]?.fileName,
          type: response?.assets[0]?.type,
        };
        setSelectedImages(prevState => {
          return [...prevState, imageObj];
        });
      });
    }
    setShowPicker(false);
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
        selectedImages.length > 0 && (
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
      <View style={{flex: 1, paddingVertical: height(1)}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: fontSize(6), fontFamily: FONTS.bold}}>
            Add photos
          </Text>
          {/* <Text
            style={{
              fontSize: fontSize(3),
              marginVertical: height(1.5),
              fontFamily: FONTS.bold,
            }}>
            Minimum one required
          </Text> */}
        </View>
        <View
          style={{
            marginVertical: height(1),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => handlePhotoUpload()}>
            <Image
              source={require('../assets/icons/cameraBg.png')}
              style={{
                height: height(30),
                width: width(43),
                alignSelf: 'center',
                marginVertical: height(1),
                borderRadius: width(3),
                backgroundColor: '#F6F6F6',
              }}
            />
          </Pressable>
          <FlatList
            data={selectedImages}
            numColumns={2}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 8,
                  }}>
                  <Image
                    source={item}
                    style={{
                      height: height(30),
                      width: width(43),
                      alignSelf: 'center',
                      marginVertical: height(1),
                      borderRadius: width(3),
                      backgroundColor: '#F6F6F6',
                    }}
                  />
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      <ReactNativeModal
        isVisible={showPicker}
        onBackButtonPress={() => setShowPicker(false)}
        onBackdropPress={() => setShowPicker(false)}
        backdropOpacity={0.8}
        style={styles.modalBox}
        useNativeDriver={true}>
        <View style={styles.optionsBox}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>Send file from</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => handleChoosePhoto('camera')}>
            <Text style={[styles.itemTitleText]}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => handleChoosePhoto('Gallery')}>
            <Text style={[styles.itemTitleText]}>Select From Gallery</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setShowPicker(false)}
          style={styles.cancelBox}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </ReactNativeModal>

      {/* <PickerSheet
        showPicker={false}
        closePicker={() => setShowPicker(false)}
      /> */}
      <Loader visible={loader} />
    </BaseView>
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
  optionsBox: {backgroundColor: 'white', borderRadius: 8},
  modalBox: {margin: 10, justifyContent: 'flex-end'},
  titleText: {
    color: '#757575',
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
  itemTitleText: {padding: 15, fontSize: 16, alignSelf: 'center'},
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
