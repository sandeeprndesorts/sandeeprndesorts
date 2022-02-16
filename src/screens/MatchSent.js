import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    Image, StatusBar, View
} from 'react-native';
import { height, width } from '../components/Resizer';
import TabBarBuyer from '../components/TabBarBuyer';
import { COLORS } from '../constants';
import { reset } from '../utils/NavigationService';

export default function MatchSent() {
    // global.base = '3'
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            //     navigation.navigate('MessageList', { base: 3 })
            navigation.navigate('BottomTabs1')
            // navigation.navigate('BottomTabs', { 'screen': 'MessageList', 'props': { 'base': 3 } })
            // navigation.navigate('BottomTabs', { 'screen': 'MessageList' })
        }, 3000);

        //             navigation.navigate('BottomTabs', { 'screen': 'Match', 'props': { 'base': 3 } })

        //         }, 1500); 
    }, [])

    return (
        <View style={{ flex: 1 }}>

            <StatusBar
                barStyle='light-content'
                backgroundColor={COLORS.primary}
                translucent={true} />

            <Image source={require('../assets/icons/background.png')}
                style={{ height: height(100), width: width(100) }}></Image>


            <View style={{ position: 'absolute', height: height(100), width: width(100), justifyContent: 'center', alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/icons/likeSent.png')}
                    style={{ height: width(90), width: width(90) }} resizeMode={'contain'}></Image>

            </View>

        </View>
    )
}