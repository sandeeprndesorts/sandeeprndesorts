import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeModal from 'react-native-modal';
import {COLORS, FONTS} from '../constants';
import {fontSize, height, width} from './Resizer';

export function ActionSheetLocation({
  isVisible,
  onClose,
  title,
  options,
  onSelected,
}) {
  const [selected, setSelected] = useState('');
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
            {'Sort By'}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setSelected('');
            }}>
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

        <View style={{marginVertical: height(3), backgroundColor: '#FFFFFF'}}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{marginTop: height(3)}}
              onPress={() => setSelected(item.title)}>
              {selected == item.title ? (
                <LinearGradient
                  colors={['#0727CE', '#0727CE', '#052D8D']}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: height(1),
                    width: width(75),
                    height: height(7),
                  }}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: fontSize(5),
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      fontFamily: FONTS.bold,
                    }}>
                    {item.title}
                  </Text>
                </LinearGradient>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: height(1),
                    width: width(75),
                    height: height(7.3),
                    borderColor: 'black',
                    borderWidth: width(0.1),
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: fontSize(5),
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      fontFamily: FONTS.bold,
                    }}>
                    {item.title}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={{marginBottom: height(6)}}
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
  modalBox: {margin: 0, justifyContent: 'flex-end', flex: 1},
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
