import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from './styles';
import { COLORS, FONTS } from '../constants';
import { height, width } from './Resizer';

export default function AppHeader(props) {

    const [name, setName] = useState('');
    const navigation = useNavigation()

    function onNotificationClick() {
        console.log('onNotificationClick')
        navigation.navigate('Notification')
    }

    function onSettingClick() {
        console.log('onSettingClick')
        navigation.navigate('Setting')
    }

    return (

        <View style={{ height: height(14), backgroundColor: props.isColorValid ? '#E5E5E5' : 'white' }}>
            <View style={{ flex: 1, flexDirection: 'row', }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <TouchableOpacity activeOpacity={1}  >
                        {props.isLogoValid ? null :
                            <Image source={require('../assets/icons/check.png')} style={{ marginTop: height(3), width: width(36), height: height(7.8), marginStart: width(5) }} resizeMode={'contain'} />}
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>


                    {props.isSettingValid ?
                        <TouchableOpacity activeOpacity={1} onPress={props.isPressValid ? onSettingClick : null}>
                            <Image source={require('../assets/icons/check.png')} resizeMode={'contain'} style={{ marginTop: height(5), width: width(6), height: height(6), marginEnd: width(3) }} />

                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={1} onPress={props.isPressValid ? onNotificationClick : null}>
                            <Image source={require('../assets/icons/check.png')} style={{ marginTop: height(5), width: width(5.5), height: height(3.5), marginEnd: width(3) }} resizeMode={'contain'} />

                        </TouchableOpacity>
                    }
                </View>

            </View>
        </View>
    );
}