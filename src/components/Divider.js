import React from 'react';
import { View } from 'react-native';

export default function Divider(props) {
    return <View style={[{ backgroundColor: props.color, height: 1, width: '100%' }, props.style]} />
}