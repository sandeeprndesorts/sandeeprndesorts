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
        name: "Going Out",
        icon: require('../assets/icons/going.png'),
    },
    {
        id: 4,
        name: "Relaxing",
        icon: require('../assets/icons/relaxing.png'),
    },
    {
        id: 5,
        name: "Music",
        icon: require('../assets/icons/music.png'),
    },
    {
        id: 6,
        name: "Reading",
        icon: require('../assets/icons/reading.png'),
    },
    {
        id: 7,
        name: "Food",
        icon: require('../assets/icons/noodles.png'),
    },
    {
        id: 8,
        name: "Drinks",
        icon: require('../assets/icons/drinkk.png'),
    },
    {
        id: 9,
        name: "Pets",
        icon: require('../assets/icons/pets.png'),
    },
    {
        id: 10,
        name: "Traveling",
        icon: require('../assets/icons/traveling.png'),
    },


]

export default function EditInterest() {
    //Hooks 
    const navigation = useNavigation()
    const [selected, setSelected] = useState(["Art", "Going Out"])
    const [temp, setTemp] = useState("")


    function onBack() {
        navigation.goBack()
    }

      
    function pushArray(item) { 

        if (!selected.includes(item)) {
            // temp.push(item)
            setSelected(arr => arr.concat(item))
        }else {
            //    temp.splice(temp.indexOf(item))
            setSelected(arr => arr.filter(i => i != item))
        } 

        console.log('selectedvalue', selected)

    }




    return (
        <BaseView
            header={
                <View style={{ paddingTop: height(6), marginHorizontal: width(5), marginTop: height(3) }}>
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
                        borderRadius: height(2), backgroundColor: COLORS.primary,
                        alignItems: 'center', justifyContent: 'center', marginHorizontal: width(10), marginBottom: 18
                    }} onPress={onBack}
                >

                    <LinearGradient colors={['#0727CE', '#0727CE', '#052D8D']} style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: height(1), width: width(80), height: height(7) }} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ color: COLORS.white, fontSize: fontSize(5), textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: FONTS.bold }}>Save</Text>
                    </LinearGradient>


                </Pressable>
            }>

            <View style={{ flex: 1 }}>

                <Image source={require('../assets/icons/interest.png')} resizeMode={'contain'} style={{ width: width(100), height: height(15) }} resizeMode={'contain'} />

                <View style={{ flex: 1, alignItems: 'center', marginVertical: height(1) }}>
                    <Text style={{ fontSize: fontSize(5), fontFamily: FONTS.bold }}>Edit Interests</Text>
                    <Text style={{ fontSize: fontSize(3.5), marginVertical: height(1.5), fontFamily: FONTS.bold }}>Pick up to 4</Text>

                </View>

                <View >
                    <FlatList
                        data={interestList}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return <Pressable onPress={() => pushArray(item.name)} style={{
                                flex: 1, justifyContent: 'center',
                                height: height(6), marginVertical: height(1), borderRadius: width(3),
                                backgroundColor: selected.includes(item.name) ? '#0E2DCF' : '#FFFFFF', marginHorizontal: width(5), paddingHorizontal: width(2), borderColor: selected.includes(item.name) ? '#0E2DCF' : '#C1C1C1', borderWidth: 0.5
                            }}>

                                <View style={{ flexDirection: 'row', }}>

                                    {/* <Image source={item.icon} style={{ marginTop: height(0.4), marginStart: width(2), width: width(6.5), height: width(5.5), tintColor: selected.includes(item.name) ? 'white' : '#0727CE' }} /> */}


                                    <Image source={item.icon} style={{   width: width(2.0), height: width(2.0), tintColor: selected.includes(item.name) ? 'white' : '#0727CE', resizeMode:'contain',padding:width(3), marginStart: width(2), }} />


                                    <Text style={{
                                        fontFamily: FONTS.bold, fontSize: fontSize(4),
                                        color: selected.includes(item.name) ? 'white' : 'black', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', marginHorizontal: width(2)
                                    }}>{item.name}</Text>



                                </View>

                            </Pressable>
                        }}
                    />
                </View>


            </View>




        </BaseView>
    )
}