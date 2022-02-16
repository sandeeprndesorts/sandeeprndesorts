import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image, Text, TextInput, View, Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActionSheetCurrentLocation, ActionSheetShareLocation, ActionSheetUnMatch } from '../components/ActionSheetFilter';
import BaseView from '../components/BaseView';
import { fontSize, height, width } from '../components/Resizer';
import { FONTS } from '../constants';

const shareHotSpot = [
    {
        id: 1,
        img: 'https://i.pravatar.cc/300',
        title: 'Statue of Liberty National Monument',
        address: 'New York, NY 10004, United States',
        time: 'Open 08:00 PM to 09:00 PM',
        description: 'The Statue of Liberty, officially known as Liberty Enlightening the World, is a colossal neoclassical sculpture on Liberty Island'
    },

    {
        id: 2,
        img: 'https://i.pravatar.cc/300',
        title: 'Walt Disney World® Resort',
        address: 'Theme park in Florida',
        time: 'Open 08:00 PM to 09:00 PM',
        description: 'The Walt Disney World Resort, also called Walt Disney World and Disney World, is an entertainment resort complex in Bay Lake and Lake Buena Vista Florida, United States.'
    },
    {
        id: 3,
        img: 'https://i.pravatar.cc/300',
        title: 'Statue of Liberty National Monument',
        address: 'New York, NY 10004, United States',
        time: 'Open 08:00 PM to 09:00 PM',
        description: 'The Statue of Liberty, officially known as Liberty Enlightening the World, is a colossal neoclassical sculpture on Liberty Island'
    },

]

export default function ChatDetail() {

    const navigation = useNavigation()

    const [showPicker, setShowPicker] = useState(false)
    const [showpickerCurrentLocation, setShowpickerCurrentLocation] = useState(false)
    const [showPickerShareLocation, setshowPickerShareLocation] = useState(false)

    function picker() {
        return <ActionSheetUnMatch
            isVisible={showPicker}
            options={[

            ]}
            onClose={() => setShowPicker(false)}
            title={'Continue'}
            onSelected={(index) => {

            }}
        />
    }

    function pickerCurrentLocation() {
        return <ActionSheetCurrentLocation
            isVisible={showpickerCurrentLocation}
            options={[
            ]}
            onClose={() => setShowpickerCurrentLocation(false)}
            title={'Share my current location'}
            onSelected={(index) => {

            }}
        />
    }

    function pickerShareLocation() {
        return <ActionSheetShareLocation
            isVisible={showPickerShareLocation}
            options={shareHotSpot}
            onClose={() => setshowPickerShareLocation(false)}
            title={'Continue'}
            onSelected={(index) => {

            }}
        />
    }

    function onBack() {
        navigation.goBack()
    }

    const [text, onChangeText] = useState("")

    return (
        <BaseView
            footer={
                <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 70, marginHorizontal: width(2), }}>

                    <View style={{
                        height: height(7), width: width(65), borderRadius: width(4), backgroundColor: 'white', flexDirection: 'row', borderColor: '#E8E6EA', borderWidth: width(0.2)

                    }}>

                        <TextInput
                            style={{ fontSize: fontSize(5), marginHorizontal: width(2), width: width(54), justifyContent: 'center', alignSelf: 'center' }}
                            onChangeText={onChangeText}
                            value={text}
                            multiline={true}
                            placeholder="Type a message..."
                        />
                        {text == "" ? <Image source={require('../assets/icons/mic.png')} style={{ width: width(4), height: height(3), justifyContent: 'center', alignSelf: 'center', marginEnd: width(2) }} resizeMode={'contain'} /> :
                            <Image source={require('../assets/icons/send.png')} style={{ width: width(6), height: width(6), justifyContent: 'center', alignSelf: 'center', marginEnd: width(3), marginStart: width(-2) }} resizeMode={'contain'} />
                        }

                    </View>

                    <Pressable onPress={() => setShowpickerCurrentLocation(true)}>
                        <Image source={require('../assets/icons/chatLocation.png')} style={{ width: width(15), height: width(15), marginStart: width(1) }} resizeMode={'contain'} />
                    </Pressable>

                    <Pressable activeOpacity={1} onPress={() => setshowPickerShareLocation(true)}>
                        <Image source={require('../assets/icons/chatRound.png')} style={{ width: width(15), height: width(15), marginStart: width(1) }} resizeMode={'contain'} />
                    </Pressable>


                </View>
            }
        >

            <View style={{ flexDirection: 'column' }}>

                <View style={{ paddingTop: height(3), marginHorizontal: width(3), marginTop: height(3), flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={1} onPress={onBack}>
                            <Image source={require('../assets/icons/back.png')} resizeMode={'contain'} style={{ marginHorizontal: width(2), width: width(10), height: width(10) }} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <View
                            style={{
                                borderRadius: width(10), width: width(11), marginHorizontal: width(2)
                            }}>

                            <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={{ justifyContent: 'center', height: width(11), width: width(11), borderRadius: width(10) }} resizeMode={'contain'} />

                        </View>

                        <Text style={{ fontSize: fontSize(6), fontFamily: FONTS.bold, justifyContent: 'center', marginHorizontal: width(2), alignSelf: 'center', marginBottom: height(1) }}>Grace</Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => setShowPicker(true)}>
                        <Image source={require('../assets/icons/menu.png')} resizeMode={'contain'} style={{ justifyContent: 'center', alignSelf: 'center', height: height(5), marginTop: 5, marginHorizontal: width(5) }} resizeMode={'contain'} />
                    </TouchableOpacity>

                </View>


                <View style={{ flex: 1, backgroundColor: 'white', marginVertical: height(1) }}>
                    <View style={{ flex: 1, marginHorizontal: width(3) }}>

                        <View style={{ flexDirection: 'row' }}>

                            <View style={{
                                height: height(0.1), backgroundColor: '#E8E6EA', flex: 1, justifyContent: 'center', alignSelf: 'center', marginStart: width(5)
                            }} />
                            <Text style={{ fontSize: fontSize(3), fontFamily: FONTS.bold, justifyContent: 'center', marginHorizontal: width(1), color: 'gray' }}>Today</Text>

                            <View style={{
                                height: height(0.1), backgroundColor: '#E8E6EA', flex: 1, justifyContent: 'center', alignSelf: 'center', marginEnd: width(5)
                            }} />

                        </View>

                        <Image source={require('../assets/icons/chat1.png')} resizeMode={'contain'} style={{ width: width(60), height: width(30), marginStart: width(1), justifyContent: 'center', alignSelf: 'flex-start' }} />

                        <Image source={require('../assets/icons/chat2.png')} resizeMode={'contain'} style={{ width: width(60), height: width(30), marginStart: width(1), justifyContent: 'center', alignSelf: 'flex-end' }} />

                        <Image source={require('../assets/icons/chat3.png')} resizeMode={'contain'} style={{ width: width(42), height: width(30), marginStart: width(1), justifyContent: 'center', alignSelf: 'flex-start' }} />

                    </View>
                </View>


            </View>

            {picker()}
            {pickerCurrentLocation()}
            {pickerShareLocation()}

        </BaseView>
    )
}