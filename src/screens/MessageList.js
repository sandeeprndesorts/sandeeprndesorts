import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View, Switch, TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import { fontSize, height, width } from '../components/Resizer';
import { COLORS, FONTS } from '../constants';
import { loginSuccess, requestError, requestInit } from '../reducers/authReducer';
import { Api } from '../utils/Api';
import { storeToken, storeUser } from '../utils/LocalStorage';
import { reset } from '../utils/NavigationService';
import Validator from '../utils/Validator';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Platform } from 'react-native';

import DatePicker from '../components/DatePicker';
import SwitchToggle from "react-native-switch-toggle";

let placeList = [
    {
        id: 1,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Ava',
    },
    {
        id: 2,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Sophia',
    },
    {
        id: 3,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Amelia',
    },
    {
        id: 4,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Ava',
    },
    {
        id: 5,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Ava',
    },
    {
        id: 6,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Sophia',
    },
    {
        id: 7,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Amelia',
    },
    {
        id: 8,
        img: { uri: 'https://i.pravatar.cc/300' },
        name: 'Ava',
    },
]

let chatList = [
    {
        id: 1,
        img: { uri: 'https://i.pravatar.cc/300' },
        title: 'Emelie',
        subTitle: 'Sticker 😍',
        time: '23 min',
        value: '1',
    },
    {
        id: 2,
        img: { uri: 'https://i.pravatar.cc/300' },
        title: 'Abigail',
        subTitle: 'Typing..',
        time: '27 min',
        value: '2',
    },
    {
        id: 3,
        img: { uri: 'https://i.pravatar.cc/300' },
        title: 'Elizabeth',
        subTitle: 'Ok, see you then.',
        time: '33 min',
        value: '0',
    },
    {
        id: 4,
        img: { uri: 'https://i.pravatar.cc/300' },
        title: 'Penelope',
        subTitle: 'You: Hey! What’s up, long time..',
        time: '50 min',
        value: '0',
    },
    {
        id: 5,
        img: { uri: 'https://i.pravatar.cc/300' },
        title: 'Chloe',
        subTitle: 'You: Hello how are you?',
        time: '55 min',
        value: '0',
    },
]


export default function MessageList() {

    const [text, onChangeText] = useState("")

    const navigation = useNavigation()
    global.base = '1'

    function chatDetail() {
        navigation.navigate('ChatDetail')
    }

    return (
        <BaseView
            header={
                <View style={{ paddingTop: height(4), marginHorizontal: width(3), marginTop: height(3), justifyContent: 'space-between', flexDirection: 'row' }}>

                    <Text style={{ fontSize: fontSize(7), fontFamily: FONTS.bold, justifyContent: 'center', marginHorizontal: width(2) }}>Messages</Text>

                    {/* <TouchableOpacity activeOpacity={1} >
                        <Image source={require('../assets/icons/inactive.png')} resizeMode={'contain'} style={{ marginHorizontal: width(2), width: width(10), height: width(10) }} resizeMode={'contain'} />
                    </TouchableOpacity> */}

                </View>
            }
        >

            <View style={{ margin: width(5) }}>

                <Text style={{ fontSize: fontSize(3.5), justifyContent: 'center' }}>People who have liked you</Text>

                <FlatList
                    data={placeList}
                    horizontal
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity activeOpacity={1} onPress={chatDetail}
                        >
                            <View style={{ flex: 1, flexDirection: 'column', marginVertical: height(1.5) }} >

                                <Image source={item.img} style={{ height: height(15), width: width(25) }} />
                                <View>
                                    <Text style={{
                                        fontWeight: '600', color: 'white',
                                        fontSize: fontSize(3.8), justifyContent: 'center', alignSelf: 'center', paddingVertical: height(0.5), backgroundColor: '#000000', opacity: 0.85, width: width(25), alignItems: 'center', textAlign: 'center'
                                    }}>{item.name}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    }}
                />

                <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', marginVertical: height(9) }}>
                    {/* <Image source={require('../assets/icons/chatBack.png')} style={{ height: width(12), width: width(12) }} /> */}
                </View>

                <View style={{
                    height: height(6.5), width: width(90), borderRadius: width(4), backgroundColor: 'white', flexDirection: 'row', borderColor: '#E8E6EA', borderWidth: width(0.2), marginVertical: height(2)

                }}>

                    <Image source={require('../assets/icons/searchChat.png')} style={{ width: width(6), height: width(6), justifyContent: 'center', alignSelf: 'center', marginHorizontal: width(5) }} resizeMode={'contain'} />

                    <TextInput
                        style={{ fontSize: fontSize(5), justifyContent: 'center', alignSelf: 'center' }}
                        onChangeText={onChangeText}
                        value={text}
                        multiline={true}
                        placeholder="Search"
                    />



                </View>

                <View style={{ marginBottom: height(2) }}>

                    <FlatList
                        data={chatList}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity activeOpacity={1} onPress={chatDetail}
                            >
                                <View
                                    style={{
                                        flex: 1, justifyContent: 'space-between',
                                        marginHorizontal: width(0.5), marginTop: height(1), borderRadius: 8, marginBottom: height(1), flexDirection: 'column', backgroundColor: '#6F95FF20'
                                    }}>


                                    <View style={{ flex: 1, flexDirection: 'row', paddingVertical: height(1) }}>

                                        <Image source={item.img} style={{ justifyContent: 'center', height: width(14), width: width(14), borderRadius: width(10), marginHorizontal: width(3) }} resizeMode={'contain'} />

                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'center', marginHorizontal: width(1) }}>

                                            <Text numberOfLines={1}
                                                style={{
                                                    fontFamily: FONTS.mediun, fontSize: fontSize(4),
                                                    color: 'black',
                                                }}>{item.title}</Text>

                                            <Text numberOfLines={1}
                                                style={{
                                                    fontFamily: FONTS.mediun, fontSize: fontSize(3.5), marginTop: 1,
                                                    color: 'gray',
                                                }}>{item.subTitle}</Text>

                                        </View>

                                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: width(3) }}>

                                            <Text numberOfLines={1}
                                                style={{
                                                    fontFamily: FONTS.mediun, fontSize: fontSize(3.5),
                                                    color: 'gray',
                                                }}>{item.time}</Text>

                                            {item.value != 0 ? <View style={{
                                                backgroundColor: COLORS.primary, borderRadius: width(10),
                                                width: width(5), justifyContent: 'center', alignSelf: 'center'
                                                , height: width(5), marginTop: height(1)
                                            }}>
                                                <Text numberOfLines={1}
                                                    style={{
                                                        fontSize: fontSize(3.5),
                                                        color: 'white', justifyContent: 'center', alignSelf: 'center',
                                                    }}>{item.value}</Text>
                                            </View> : null}

                                        </View>
                                    </View>



                                </View>
                            </TouchableOpacity>

                        }}
                    />
                </View>

            </View>

        </BaseView >
    )
}