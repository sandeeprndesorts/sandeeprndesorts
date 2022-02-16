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
        name: "Female",
        icon: require('../assets/icons/female.png'),
    },
    {
        id: 2,
        name: "Male",
        icon: require('../assets/icons/male.png'),
    },
    {
        id: 3,
        name: "Everyone",
        icon: require('../assets/icons/other.png'),
    },

]


export default function EditWantSee() {
    //Hooks
    const dispatch = useDispatch()
    const navigation = useNavigation()

    //Redux States
    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)
    const [selected, setSelected] = useState("Female")


    function onBack() {
        navigation.goBack()
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
                        height: height(7), marginVertical: height(5),
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


            <View style={{ flex: 1, paddingVertical: height(2) }}>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: fontSize(6), fontFamily: FONTS.bold }}>Who do you want to see</Text>
                </View>

                <View style={{ marginVertical: height(3) }}>
                    <FlatList
                        data={List}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return <View style={{
                                flexDirection: 'row', flexDirection: 'row', alignItems: 'center',
                                borderColor: selected == item.name ? '#0E2DCF' : '#BFBAC3', borderWidth: 1, width: width(80),
                                borderRadius: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginVertical: height(2), height: height(12)
                            }}>

                                <Pressable onPress={() => setSelected(item.name)} style={{
                                    height: height(11.5), width: width(79), borderRadius: width(2),
                                    backgroundColor: selected == item.name ? '#EFF0FF' : '#ffffff', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
                                }}>

                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'
                                    }}>

                                        {index == 0 ?
                                            <Image source={item.icon} style={{ tintColor: selected == item.name ? '#0E2DCF' : 'black', height: height(7.2), width: width(9), resizeMode: 'contain' }} resizeMode='contain' />
                                            :
                                            <Image source={item.icon} style={{ tintColor: selected == item.name ? '#0E2DCF' : 'black', height: width(10), width: width(10) }} />}

                                        <Text style={{
                                            fontSize: fontSize(5),
                                            color: selected == item.name ? '#0E2DCF' : 'black', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', marginStart: width(1), fontFamily: FONTS.bold
                                        }}>{item.name}</Text>



                                    </View>

                                </Pressable>

                            </View>
                        }}
                    />

                </View>

            </View>




        </BaseView>
    )
}