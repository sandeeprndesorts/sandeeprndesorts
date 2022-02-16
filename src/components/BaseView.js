import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default BaseView = ({
  children,
  header,
  scrollEnabled,
  footer,
  props,
  blur,
}) => {
  return (
    <View
      style={{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: blur == true ? '#000000' : null,
        opacity: blur == true ? 0.1 : null,
      }}>
      <View
        style={{backgroundColor: props == true ? '#E5E5E5' : 'white', flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        {header}
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={scrollEnabled == undefined ? true : scrollEnabled}>
          {children}
        </KeyboardAwareScrollView>
        <SafeAreaView>{footer}</SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlaycontainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
    opacity: 0.67,
  },
});
