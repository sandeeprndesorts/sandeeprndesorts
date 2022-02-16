import React, {Component} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {COLORS} from '../constants';

const Loader = ({visible}) => {
  return (
    <Modal
      visible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      transparent
      useNativeDriver={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    </Modal>
  );
};

export default Loader;
