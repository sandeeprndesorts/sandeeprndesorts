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


export default function EditOrientation() {
    //Hooks 
    const navigation = useNavigation()

    const [selected, setSelected] = useState("Straight")

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
                        alignItems: 'center', justifyContent: 'center', marginHorizontal: width(10), marginBottom: 18,
                    }} onPress={onBack}
                >

                    <LinearGradient colors={['#0727CE', '#0727CE', '#052D8D']} style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: height(1), width: width(80), height: height(7) }} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ color: COLORS.white, fontSize: fontSize(5), textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: FONTS.bold }}>Save</Text>

                    </LinearGradient>


                </Pressable>
            }>

            <View style={{ flex: 1, paddingVertical: height(1) }}>

                <Image source={require('../assets/icons/orientaial.png')} resizeMode={'contain'} style={{ width: width(100), height: height(20), marginVertical: height(2) }} resizeMode={'contain'} />

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: fontSize(5), fontFamily: FONTS.bold }}>Edit Sexual Orientation</Text>

                </View>

                <View style={{ marginVertical: height(3) }}>
                    <FlatList
                        data={["Straight", "Gay", "Bisexual", "Asexual", "Demisexual", "Queer", "Questioning"]}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return <Pressable onPress={() => setSelected(item)} style={{
                                flex: 1, justifyContent: 'center',
                                height: height(6), marginVertical: height(1), borderRadius: width(3),
                                backgroundColor: selected == item ? '#0E2DCF' : '#FFFFFF', marginHorizontal: width(12), paddingHorizontal: width(2), borderColor: selected == item ? '#0E2DCF' : '#C1C1C1', borderWidth: 0.5
                            }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>

                                    <Image source={require('../assets/icons/check.png')} style={{ marginTop: height(0.4), marginStart: width(2), width: width(5.5), height: width(5.5), tintColor: selected == item ? null : 'transparent' }} />

                                    <Text style={{
                                        fontFamily: FONTS.bold, fontSize: fontSize(4),
                                        color: selected == item ? 'white' : 'black', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', marginHorizontal: width(2),
                                    }}>{item}</Text>



                                </View>

                            </Pressable>


                            // <Pressable onPress={() => setSelected(item)} style={{
                            //     height: height(7), width: width(90), marginVertical: height(0.5), borderRadius: width(2),
                            //     backgroundColor: selected == item ? '#0727CE' : '#ffffff', alignSelf: 'center',justifyContent:'center', alignItems:'center',elevation:5
                            // }}>

                            //     <View style={{ flexDirection: 'row'}}>

                            //         <Text style={{
                            //             fontFamily: FONTS.bold, fontSize: fontSize(4),
                            //             color: selected == item ? 'white' : 'black', flex:1 ,textAlign:'center'  ,marginStart:width(10)
                            //         }}>{item}</Text>

                            //         <Image source={require('../assets/icons/check.png')} style={{  marginEnd:width(5),marginTop:height(0.3),tintColor:selected == item ?'white': 'transparent' }}  />

                            //     </View>

                            // </Pressable>
                        }}
                    />
                </View>

            </View>




        </BaseView>
    )
}