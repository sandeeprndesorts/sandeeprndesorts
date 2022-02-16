import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import { fontSize, height, width } from '../components/Resizer';
import { COLORS, FONTS } from '../constants';
import { loginSuccess, requestError, requestInit } from '../reducers/authReducer';
import { Api } from '../utils/Api';
import { storeToken, storeUser } from '../utils/LocalStorage';
import { reset } from '../utils/NavigationService';
import Validator from '../utils/Validator';


let List = [
    {
        id: 1,
        icon: require('../assets/icons/image.png'),
    },
    {
        id: 2,
        icon: require('../assets/icons/cameraBg.png'),
    },
    {
        id: 3,
        icon: require('../assets/icons/cameraBg.png'),
    },
    {
        id: 4,
        icon: require('../assets/icons/cameraBg.png'),
    },

]
let interestList = [
    {
        id: 1,
        name: "Art",
        icon: require('../assets/icons/art.png'),
    },
    {
        id: 2,
        name: "Sports",
        icon: require('../assets/icons/sport.png'),
    },
    {
        id: 3,
        name: "Relaxing",
        icon: require('../assets/icons/relaxing.png'),
    },
]


export default function EditProfile() {
    //Hooks
    const dispatch = useDispatch()
    const navigation = useNavigation()

    //Redux States
    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)

    function onBack() {
        navigation.goBack()
    }

    function EditInterest() {
        navigation.navigate('EditInterest')
    }

    function EditDrink() {
        navigation.navigate('EditDrink')
    }

    function EditCelebrated() {
        navigation.navigate('EditCelebrated')
    }

    function EditLocation() {
        navigation.navigate('EditLocation')
    }

    function EditGender() {
        navigation.navigate('EditGender')
    }

    function EditWantSee() {
        navigation.navigate('EditWantSee')
    }

    function EditOrientation() {
        navigation.navigate('EditOrientation')
    }

    function EditEmail() {
        navigation.navigate('EditEmail')
    }


    return (
        <BaseView
            header={
                <View style={{ paddingTop: height(6), marginHorizontal: width(3), marginTop: height(3) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity activeOpacity={1} onPress={onBack}>
                            <Image source={require('../assets/icons/back.png')} resizeMode={'contain'} style={{ marginHorizontal: width(2), width: width(10), height: width(10) }} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>

                </View>
            }

            footer={
                <Pressable
                    style={{
                        height: height(7), marginVertical: height(4),
                        borderRadius: height(2),
                        alignItems: 'center', justifyContent: 'center', marginHorizontal: width(10), marginBottom: 18
                    }} onPress={onBack}
                >

                    <LinearGradient colors={['#0727CE', '#0727CE', '#052D8D']} style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: height(1), width: width(80), height: height(7) }} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ color: COLORS.white, fontSize: fontSize(5), textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: FONTS.bold }}>Save</Text>

                    </LinearGradient>


                </Pressable>
            }>

            <View style={{ flex: 1, paddingVertical: height(1) }}>

                <View style={{ flex: 1, marginVertical: width(3), marginHorizontal: width(6) }}>
                    <Text style={{ fontSize: fontSize(6), fontFamily: FONTS.bold }}>Edit Profile</Text>

                </View>

                <View style={{ marginVertical: height(1), justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={List}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return <View style={{
                                flexDirection: "row", marginHorizontal: 8,
                            }}
                            >
                                <Image source={item.icon}
                                    style={{
                                        height: height(25), width: width(43), alignSelf: 'center', marginVertical: height(1), borderRadius: width(3),
                                        backgroundColor: '#F6F6F6'
                                    }} />

                            </View>
                        }}
                    />

                </View>

                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(2), marginHorizontal: width(6) }}></View>

                <View style={{ flexDirection: 'column', marginVertical: height(1), marginHorizontal: width(6) }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontWeight: '600', color: 'black',
                            fontSize: fontSize(4.5), marginVertical: height(1),
                        }}>My Status</Text>

                        <TouchableOpacity activeOpacity={1} onPress={EditCelebrated} style={{ marginVertical: height(1) }}>
                            <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>



                    <Text style={{
                        fontWeight: '400', color: 'black',
                        fontSize: fontSize(4)
                    }}>My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..</Text>



                    <Text style={{
                        fontWeight: '600', color: COLORS.primary,
                        fontSize: fontSize(4.5), marginVertical: height(1),
                    }}>Read more</Text>

                </View>


                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(1), marginHorizontal: width(6) }}></View>

                <View style={{ flexDirection: 'column', marginHorizontal: width(6) }}>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: height(2) }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{
                                fontWeight: '600', color: 'black',
                                fontSize: fontSize(4.5), marginVertical: height(2),
                            }}>My Interests</Text>

                            <TouchableOpacity activeOpacity={1} onPress={EditInterest} style={{ marginVertical: height(2) }}>
                                <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity activeOpacity={1}>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                                {interestList.map((item, index) => {
                                    return <Pressable style={{
                                        height: height(5), paddingHorizontal: width(2), alignSelf: 'center', borderRadius: width(3),
                                        backgroundColor: '#6F95FF50', alignItems: 'center', justifyContent: 'center', marginEnd: 10
                                    }}>

                                        <View style={{ flexDirection: 'row' }}>

                                            <Image source={item.icon} style={{ marginHorizontal: width(1), width: width(5), height: width(5), tintColor: '#0727CE' }} />

                                            <Text style={{
                                                fontSize: fontSize(4),
                                                color: 'black', marginEnd: width(1)
                                            }}>{item.name}</Text>

                                        </View>
                                    </Pressable>
                                })}
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(1), marginHorizontal: width(6) }}></View>


                <View style={{ flexDirection: 'column', marginHorizontal: width(6), marginBottom: height(2) }}>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{
                                fontWeight: '600', color: 'black',
                                fontSize: fontSize(4.5), marginVertical: height(2),
                            }}>My Favorite Drinks</Text>

                            <TouchableOpacity activeOpacity={1} onPress={EditDrink} style={{ marginVertical: height(2) }}>
                                <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity activeOpacity={1}>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                                {["Whiskey", "Vodka"].map((item, index) => {
                                    return <Pressable style={{
                                        height: height(5), paddingHorizontal: width(2), alignSelf: 'center', borderRadius: width(3),
                                        backgroundColor: '#6F95FF50', alignItems: 'center', justifyContent: 'center', marginEnd: 10
                                    }}>

                                        <View style={{ flexDirection: 'row' }}>

                                            <Image source={require('../assets/icons/drinkk.png')} style={{ marginHorizontal: width(1), width: width(5), height: width(5), tintColor: '#0727CE' }} />

                                            <Text style={{
                                                fontSize: fontSize(4),
                                                color: 'black', marginEnd: width(1)
                                            }}>{item}</Text>

                                        </View>
                                    </Pressable>
                                })}
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>


                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(2), marginHorizontal: width(6) }}></View>

                <View style={{ flexDirection: 'column', marginHorizontal: width(6) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontWeight: '600', color: 'black',
                            fontSize: fontSize(4.5), marginVertical: height(1),
                        }}>City</Text>

                        <TouchableOpacity activeOpacity={1} onPress={EditLocation} style={{ marginVertical: height(1) }}>
                            <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                        </TouchableOpacity>

                    </View>

                    <Text style={{
                        fontWeight: '400', color: 'black',
                        fontSize: fontSize(4)
                    }}>Chicago, IL United States</Text>


                </View>

                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(2), marginHorizontal: width(6) }}></View>

                <View style={{ flexDirection: 'column', marginHorizontal: width(6) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontWeight: '600', color: 'black',
                            fontSize: fontSize(4.5), marginVertical: height(1),
                        }}>Gender</Text>

                        <TouchableOpacity activeOpacity={1} onPress={EditGender} style={{ marginVertical: height(1) }}>
                            <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                        </TouchableOpacity>

                    </View>

                    <Text style={{
                        fontWeight: '400', color: 'black',
                        fontSize: fontSize(4)
                    }}>Male</Text>


                </View>

                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(2), marginHorizontal: width(6) }}></View>

                <View style={{ flexDirection: 'column', marginHorizontal: width(6) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontWeight: '600', color: 'black',
                            fontSize: fontSize(4.5), marginVertical: height(1),
                        }}>Want to see</Text>
                        <TouchableOpacity activeOpacity={1} onPress={EditWantSee} style={{ marginVertical: height(1) }}>
                            <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                        </TouchableOpacity>

                    </View>

                    <Text style={{
                        fontWeight: '400', color: 'black',
                        fontSize: fontSize(4)
                    }}>Female</Text>


                </View>

                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(2), marginHorizontal: width(6) }}></View>

                <View style={{ flexDirection: 'column', marginHorizontal: width(6) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontWeight: '600', color: 'black',
                            fontSize: fontSize(4.5), marginVertical: height(1),
                        }}>Sexual Orientation</Text>

                        <TouchableOpacity activeOpacity={1} onPress={EditOrientation} style={{ marginVertical: height(1) }}>
                            <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                        </TouchableOpacity>

                    </View>

                    <Text style={{
                        fontWeight: '400', color: 'black',
                        fontSize: fontSize(4)
                    }}>Straight</Text>


                </View>

                <View style={{ height: height(0.07), backgroundColor: '#F9A602', marginVertical: height(2), marginHorizontal: width(6) }}></View>


                <View style={{ flexDirection: 'column', marginVertical: height(1), marginHorizontal: width(6) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{
                            fontWeight: '600', color: 'black',
                            fontSize: fontSize(4.5), marginVertical: height(1),
                        }}>Email</Text>

                        <TouchableOpacity activeOpacity={1} onPress={EditEmail} style={{ marginVertical: height(1) }}>
                            <Image source={require('../assets/icons/pen.png')} style={{ alignSelf: 'center', justifyContent: 'center', height: width(4.5), width: width(4.5), marginRight: 3, }} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{
                        fontWeight: '400', color: 'black',
                        fontSize: fontSize(4)
                    }}>jessica@gmail.com</Text>


                </View>


            </View>




        </BaseView >
    )
}