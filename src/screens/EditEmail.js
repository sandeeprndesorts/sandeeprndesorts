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
import TextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';

export default function EditEmail() {
    //Hooks
    const dispatch = useDispatch()
    const navigation = useNavigation()

    //Redux States 


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
                        height: height(7), marginVertical: height(4),
                        borderRadius: height(2), backgroundColor: COLORS.primary,
                        alignItems: 'center', justifyContent: 'center', marginHorizontal: width(10), marginBottom: 18
                    }} onPress={onBack}
                >

                    <LinearGradient colors={['#0727CE', '#0727CE', '#052D8D']} style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: height(1), width: width(80), height: height(7) }} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: fontSize(5), textAlign: 'center', justifyContent: 'center', alignSelf: 'center' }}>Save</Text>
                    </LinearGradient>


                </Pressable>
            }>

            <View style={{ flex: 1, paddingVertical: height(1) }}>

                <Image source={require('../assets/icons/email.png')} resizeMode={'contain'} style={{ width: width(100), height: height(10), marginVertical: height(2) }} resizeMode={'contain'} />


                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: fontSize(6), marginVertical: height(1), fontFamily: FONTS.bold }}>Edit Email</Text>
                    <Text style={{ fontSize: fontSize(3), fontWeight: '500' }}>If you ever lose access to your account,</Text>
                    <Text style={{ fontSize: fontSize(3), fontWeight: '500' }}> we can use your email to recover it.</Text>
                </View>


                <View style={{ flex: 1, marginVertical: height(3) }}>
                    <TextInput label="Email address"
                        value="jessica@gmail.com" />
                </View>

            </View>




        </BaseView >
    )
}