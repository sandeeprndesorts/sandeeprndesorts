import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View, TouchableOpacity, TextInput
} from 'react-native';
import AppHeader from '../components/AppHeader';
import BaseView from '../components/BaseView';
import { fontSize, height, width } from '../components/Resizer';
import { COLORS, FONTS } from '../constants';
import MapView, { Marker } from 'react-native-maps';
import { ActionSheetLocation } from '../components/ActionSheetLocation';

let hotSpotList = [
    {
        id: 1,
        img: 'https://i.pravatar.cc/300',
        title: "Statue of Liberty National Monument",
        address: "New York, NY 10004, United States",
        time: "Open 08:00 AM to 09:00 PM",
        description: 'The Statue of Liberty, officially known as Liberty Enlightening the World, is a colossal neoclassical sculpture on Liberty Island',
    },
    {
        id: 2,
        img: 'https://i.pravatar.cc/300',
        title: "Walt Disney World® Resort",
        address: "Theme park in Florida",
        time: "Open 08:00 AM to 09:00 PM",
        description: 'The Walt Disney World Resort, also called Walt Disney World and Disney World, is an entertainment resort complex in Bay Lake and Lake Buena Vista Florida, United States.',
    }
]

let eventList = [
    {
        id: 1,
        img: 'https://i.pravatar.cc/300',
        title: "New Year's Party 2022!",
        address: "New York, NY 10004, United States",
        time: "10:00 PM to 03:00 AM",
        date: "31-12-2021",
        description: 'We are going to watch the ball drop and have a great time, with our live DJ and open bar. Cannot wait to see you!',
    },
    {
        id: 2,
        img: 'https://i.pravatar.cc/300',
        title: "New Year's Party 2022!",
        address: "Halytska Street, 20, Lviv",
        time: "11:00 PM to 06:00 AM",
        date: "31-12-2021",
        description: 'The Party never stops here. Come out and celebrate the New Year!',
    }
]

let checkInList = [
    {
        id: 1,
        image: { uri: 'https://i.pravatar.cc/300' },
    },
    {
        id: 2,
        image: { uri: 'https://i.pravatar.cc/300' },
    },
    {
        id: 3,
        image: { uri: 'https://i.pravatar.cc/300' },
    },
    {
        id: 4,
        image: { uri: 'https://i.pravatar.cc/300' },
    },
    {
        id: 5,
        image: { uri: 'https://i.pravatar.cc/300' },
    },
    {
        id: 6,
        image: require('../assets/icons/checkIn.png'),
    },
]

export default function EventList() {

    const navigation = useNavigation()

    const [text, onChangeText] = useState("onHotSpotClick")
    const [text2, onChangeText2] = useState("onHotSpotTab")

    const [showPickerHotSpot, setShowPickerHotSpot] = useState(false)
    const [showPickerEvent, setShowPickerEvent] = useState(false)

    function pickerHotSpot() {
        return <ActionSheetLocation
            isVisible={showPickerHotSpot}
            options={[
                { title: "Closest Distance" },
                { title: "Most Popular" },

            ]}
            onClose={() => setShowPickerHotSpot(false)}
            title={'Explore Hot Spots'}
            onSelected={(index) => {

            }}
        />
    }

    function pickerEvent() {
        return <ActionSheetLocation
            isVisible={showPickerEvent}
            options={[
                { title: "Closest Distance" },
                { title: "Most Popular" },
                { title: "Happening Soonest" },
            ]}
            onClose={() => setShowPickerEvent(false)}
            title={'Explore Events'}
            onSelected={(index) => {

            }}
        />
    }


    function onFilterClick() {
        if (text2 == 'onHotSpotTab') {
            setShowPickerHotSpot(true)
        }
        if (text2 == 'onEventTab') {
            setShowPickerEvent(true)
        }
    }

    function onHotSpotTab() {
        onChangeText2('onHotSpotTab')
        onChangeText('onHotSpotClick')
    }

    function onEventTab() {
        onChangeText2('onEventTab')
        onChangeText('onEventClick')

    }

    function onHotSpotPage() {
        navigation.navigate('HotSpotPage')
    }

    function onEventPage() {
        navigation.navigate('EventPage')
    }

    return (
        <BaseView header={
            <View style={{ flexDirection: 'column' }}>
                <View style={{ marginTop: height(8), flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginEnd: width(6) }}>
                            <Pressable activeOpacity={1} onPress={onHotSpotTab}>
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: fontSize(4), marginHorizontal: width(0.5),
                                        color: text2 == 'onHotSpotTab' ? 'black' : '#A39CAA',
                                    }}>Hot Spots</Text>
                                <View style={{ height: height(0.5), backgroundColor: text2 == 'onHotSpotTab' ? COLORS.primary : 'white', width: width(20), marginVertical: height(1) }} />
                            </Pressable>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginStart: width(6) }}>
                            <Pressable activeOpacity={1} onPress={onEventTab}>
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: fontSize(4), marginHorizontal: width(0.8),
                                        color: text2 == 'onEventTab' ? 'black' : '#A39CAA',
                                    }}>Events</Text>
                                <View style={{ height: height(0.5), backgroundColor: text2 == 'onEventTab' ? COLORS.primary : 'white', width: width(15), marginVertical: height(1) }} />
                            </Pressable>
                        </View>

                    </View>

                    <View style={{ height: height(0.05), width: '100%', backgroundColor: '#A39CAA', marginTop: height(-1) }} />

                </View>

                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>

                    <Pressable activeOpacity={1} onPress={onFilterClick}>

                        <Image source={require('../assets/icons/inactive.png')} style={{ marginVertical: width(3), alignSelf: 'center', justifyContent: 'center', height: width(10), width: width(10), marginHorizontal: width(5) }}
                            resizeMode={'contain'} />

                    </Pressable>
                </View>

            </View>
        }>

            <View style={{ flex: 1, marginHorizontal: width(4.5) }}>

                {text == "onHotSpotClick" ?
                    <FlatList
                        data={hotSpotList}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return <Pressable onPress={onHotSpotPage}>
                                <View style={{ flexDirection: 'column', borderColor: '#6F95FF', borderWidth: width(0.2), borderRadius: width(2), marginBottom: height(2) }}>

                                    <View style={{ flexDirection: 'row' }}>

                                        <View style={{ flexDirection: 'column', flex: 2.5 }}>

                                            <View style={{
                                                flexDirection: 'column', margin: width(3),
                                            }}>
                                                <Text style={{
                                                    fontFamily: FONTS.bold, fontSize: fontSize(4.2),
                                                    color: 'black', marginTop: height(0.2)
                                                }}>{item.title}</Text>

                                                <View style={{ flexDirection: 'row', marginVertical: height(1) }}>
                                                    <Image source={require('../assets/icons/addressLocation.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 3, }} resizeMode={'contain'} />
                                                    <Text style={{
                                                        fontWeight: '600', color: 'black',
                                                        fontSize: fontSize(3), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                    }}>{item.address}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Image source={require('../assets/icons/watch.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 3, }} resizeMode={'contain'} />
                                                    <Text style={{
                                                        fontWeight: '600', color: 'black',
                                                        fontSize: fontSize(3), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                    }}>{item.time}</Text>
                                                </View>

                                                <Text style={{
                                                    fontSize: fontSize(2.6),
                                                    color: 'black', marginVertical: height(1), fontWeight: '400'
                                                }}>{item.description}</Text>

                                            </View>

                                            <View style={{
                                                height: height(0.06), backgroundColor: '#6F95FF75'
                                            }} />

                                            <View style={{
                                                flexDirection: 'column', marginHorizontal: width(3),
                                            }}>
                                                <Text style={{
                                                    fontSize: fontSize(3.2),
                                                    color: 'black', marginVertical: height(1), fontWeight: '400'
                                                }}>{'Checked in'}</Text>

                                                <FlatList
                                                    data={checkInList}
                                                    keyExtractor={(item, index) => index}
                                                    horizontal
                                                    renderItem={({ item, index }) => {
                                                        return <TouchableOpacity activeOpacity={1} style={{ marginBottom: height(1.5) }}
                                                        >
                                                            <View
                                                                style={{
                                                                    borderRadius: width(10), width: width(11), marginEnd: width(-2.5)
                                                                }}>

                                                                <Image source={item.image} style={{ justifyContent: 'center', height: width(11), width: width(11), borderRadius: width(10) }} resizeMode={'contain'} />

                                                            </View>

                                                        </TouchableOpacity>
                                                    }}
                                                />

                                            </View>

                                            <View style={{ flexDirection: 'row', backgroundColor: '#6F95FF50', padding: 8, borderBottomLeftRadius: width(2), }}>
                                                <Image source={require('../assets/icons/footPrint.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 3, }} resizeMode={'contain'} />
                                                <Text style={{
                                                    fontWeight: '600', color: 'black',
                                                    fontSize: fontSize(3), marginEnd: width(2), justifyContent: 'center', alignSelf: 'center'
                                                }}>Are you visiting today?</Text>

                                                <View style={{ flexDirection: 'row', paddingHorizontal: width(1.5), paddingVertical: width(1.5), backgroundColor: COLORS.primary, borderRadius: width(2) }}>
                                                    <Image source={require('../assets/icons/whiteHeart.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 1, }} resizeMode={'contain'} />
                                                    <Text style={{
                                                        fontWeight: '600', color: 'white',
                                                        fontSize: fontSize(3), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                    }}>Check in</Text>
                                                </View>

                                            </View>

                                        </View>

                                        <Image source={{ uri: item.img }} style={{ borderBottomRightRadius: width(2), borderTopRightRadius: width(2), flex: 1 }} />

                                    </View>

                                </View>
                            </Pressable>
                        }}
                    />
                    :
                    text == "onEventClick" ?
                        <FlatList
                            data={eventList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return <Pressable onPress={onEventPage}>
                                    <View style={{ flexDirection: 'column', borderColor: '#6F95FF', borderWidth: width(0.2), borderRadius: width(2), marginBottom: height(2) }}>

                                        <View style={{ flexDirection: 'row' }}>

                                            <View style={{ flexDirection: 'column', flex: 2.5 }}>

                                                <View style={{
                                                    flexDirection: 'column', margin: width(3),
                                                }}>
                                                    <Text style={{
                                                        fontFamily: FONTS.bold, fontSize: fontSize(4.2),
                                                        color: 'black', marginTop: height(0.2)
                                                    }}>{item.title}</Text>

                                                    <View style={{ flexDirection: 'row', marginVertical: height(1), justifyContent: 'space-between' }}>

                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Image source={require('../assets/icons/watch.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5) }} resizeMode={'contain'} />
                                                            <Text style={{
                                                                fontWeight: '600', color: 'black',
                                                                fontSize: fontSize(2.8), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                            }}>{item.time}</Text>
                                                        </View>

                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Image source={require('../assets/icons/calenderr.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5) }} resizeMode={'contain'} />
                                                            <Text style={{
                                                                fontWeight: '600', color: 'black',
                                                                fontSize: fontSize(2.8), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                            }}>{item.date}</Text>
                                                        </View>

                                                    </View>

                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image source={require('../assets/icons/addressLocation.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 3, }} resizeMode={'contain'} />
                                                        <Text style={{
                                                            fontWeight: '600', color: 'black',
                                                            fontSize: fontSize(3), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                        }}>{item.address}</Text>
                                                    </View>

                                                    <Text style={{
                                                        fontSize: fontSize(2.6),
                                                        color: 'black', marginVertical: height(1), fontWeight: '400'
                                                    }}>{item.description}</Text>

                                                </View>

                                                <View style={{
                                                    height: height(0.06), backgroundColor: '#6F95FF75'
                                                }} />

                                                <View style={{
                                                    flexDirection: 'column', marginHorizontal: width(3),
                                                }}>
                                                    <Text style={{
                                                        fontSize: fontSize(3.2),
                                                        color: 'black', marginVertical: height(1), fontWeight: '400'
                                                    }}>Attending</Text>

                                                    <FlatList
                                                        data={checkInList}
                                                        keyExtractor={(item, index) => index}
                                                        horizontal
                                                        renderItem={({ item, index }) => {
                                                            return <TouchableOpacity activeOpacity={1} style={{ marginBottom: height(1.5) }}
                                                            >
                                                                <View
                                                                    style={{
                                                                        borderRadius: width(10), width: width(11), marginEnd: width(-2.5)
                                                                    }}>

                                                                    <Image source={item.image} style={{ justifyContent: 'center', height: width(11), width: width(11), borderRadius: width(10) }} resizeMode={'contain'} />

                                                                </View>

                                                            </TouchableOpacity>
                                                        }}
                                                    />

                                                </View>

                                                <View style={{ flexDirection: 'row', backgroundColor: '#6F95FF50', padding: 8, borderBottomLeftRadius: width(2), }}>
                                                    <Image source={require('../assets/icons/footPrint.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 3, }} resizeMode={'contain'} />
                                                    <Text style={{
                                                        fontWeight: '600', color: 'black',
                                                        fontSize: fontSize(3), marginEnd: width(2), justifyContent: 'center', alignSelf: 'center'
                                                    }}>Are you attending?</Text>

                                                    <View style={{ flexDirection: 'row', paddingHorizontal: width(1), paddingVertical: width(1.5), backgroundColor: COLORS.primary, borderRadius: width(2) }}>
                                                        <Image source={require('../assets/icons/whiteHeart.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(3.5), width: width(3.5), marginRight: 1, }} resizeMode={'contain'} />
                                                        <Text style={{
                                                            fontWeight: '600', color: 'white',
                                                            fontSize: fontSize(3), marginTop: height(0.2), marginHorizontal: width(0.8)
                                                        }}>I am attending</Text>
                                                    </View>

                                                </View>

                                            </View>

                                            <Image source={{ uri: item.img }} style={{ borderBottomRightRadius: width(2), borderTopRightRadius: width(2), flex: 1 }} />

                                        </View>

                                    </View>
                                </Pressable>
                            }}
                        />
                        :
                        null
                }

            </View>
            {pickerHotSpot()}
            {pickerEvent()}
        </BaseView >
    )
}