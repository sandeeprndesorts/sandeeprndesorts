import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    Text,
    View, Switch
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
import LinearGradient from 'react-native-linear-gradient';

export default function Setting() {

    const navigation = useNavigation()

    function onBack() {
        navigation.goBack()
    }

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(true);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(true);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(true);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    return (
        <BaseView
            header={
                <View style={{ paddingTop: height(6), marginHorizontal: width(3), marginTop: height(3), justifyContent: 'flex-start', flexDirection: 'row' }}>

                    <TouchableOpacity activeOpacity={1} onPress={onBack} >
                        <Image source={require('../assets/icons/back.png')} resizeMode={'contain'} style={{ marginHorizontal: width(2), width: width(10), height: width(10) }} resizeMode={'contain'} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: fontSize(6), fontFamily: FONTS.bold, justifyContent: 'center', marginTop: height(0.5), marginHorizontal: width(2) }}>Settings</Text>

                </View>
            }
        >

            <View style={{ flex: 1, margin: width(7) }}>

                <Text style={{ fontSize: fontSize(5), fontFamily: FONTS.bold, marginTop: height(0.5), }}>Notifications</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: height(1) }}>

                    <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>Notifiy new matches</Text>

                    <View style={{ marginTop: -10 }}>
                        <SwitchToggle
                            switchOn={isEnabled}
                            onPress={toggleSwitch}
                            circleColorOff='#ffffff'
                            circleColorOn='#ffffff'
                            backgroundColorOn='#6AC24C'
                            backgroundColorOff='#FF2A2A'  
                            backTextLeft={!isEnabled ?"            OFF" : "  ON"} 
                            textLeftStyle={{color:'white', fontFamily: FONTS.bold,marginEnd:!isEnabled ? width(-100): width(-100),fontSize:fontSize(3) }}
                        />
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: height(1) }}>

                    <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>Notifiy new messages</Text>

                    <View style={{ marginTop: -10, }}>
                        <SwitchToggle
                            switchOn={isEnabled1}
                            onPress={toggleSwitch1}
                            circleColorOff='#ffffff'
                            circleColorOn='#ffffff'
                            backgroundColorOn='#6AC24C'
                            backgroundColorOff='#FF2A2A'
                            backTextLeft={!isEnabled1 ?"            OFF" : "  ON"} 
                            textLeftStyle={{color:'white', fontFamily: FONTS.bold,marginEnd:!isEnabled1 ? width(-100): width(-100),fontSize:fontSize(3) }}
                        />
                    </View>



                </View>

                <View style={{ height: 0.3, backgroundColor: '#F9A602', marginVertical: height(3), }}></View>

                <Text style={{ fontSize: fontSize(5), fontFamily: FONTS.bold, marginTop: height(0.5),marginBottom: height(2) }}>Privacy</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  }}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>Share my check ins with my</Text>
                        <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignContent: 'center' }}>matches</Text>
                    </View>

                    <View style={{ marginTop: -20 }}>
                        <SwitchToggle
                            switchOn={isEnabled3}
                            onPress={toggleSwitch3}
                            circleColorOff='#ffffff'
                            circleColorOn='#ffffff'
                            backgroundColorOn='#6AC24C'
                            backgroundColorOff='#FF2A2A'
                            backTextLeft={!isEnabled3 ?"            OFF" : "  ON"} 
                            textLeftStyle={{color:'white', fontFamily: FONTS.bold,marginEnd:!isEnabled3 ? width(-100): width(-100),fontSize:fontSize(3) }}
                        />
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  }}>

                    <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>Hide my profile</Text>

                    <View style={{ marginTop: -10, }}>
                        <SwitchToggle
                            switchOn={isEnabled2}
                            onPress={toggleSwitch2}
                            circleColorOff='#ffffff'
                            circleColorOn='#ffffff'
                            backgroundColorOn='#6AC24C'
                            backgroundColorOff='#FF2A2A'
                            backTextLeft={!isEnabled2 ?"            OFF" : "  ON"} 
                            textLeftStyle={{color:'white', fontFamily: FONTS.bold,marginEnd:!isEnabled2 ? width(-100): width(-100),fontSize:fontSize(3) }}
                        />
                    </View>



                </View>


<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: height(3.5) }}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>Turn off my location when</Text>
                        <Text style={{ fontSize: fontSize(4.5), fontWeight: 'normal', justifyContent: 'center', alignContent: 'center' }}>offline</Text>
                    </View>

                    <View style={{ marginTop: -20 }}>
                        <SwitchToggle
                            switchOn={isEnabled4}
                            onPress={toggleSwitch4}
                            circleColorOff='#ffffff'
                            circleColorOn='#ffffff'
                            backgroundColorOn='#6AC24C'
                            backgroundColorOff='#FF2A2A'
                            backTextLeft={!isEnabled4 ?"            OFF" : "  ON"} 
                            textLeftStyle={{color:'white', fontFamily: FONTS.bold,marginEnd:!isEnabled4 ? width(-100): width(-100),fontSize:fontSize(3) }}
                        />
                    </View>

                </View>


                <Pressable
                    style={{
                        height: height(7), marginVertical: height(3),
                        borderRadius: height(2),
                        alignItems: 'center', justifyContent: 'center', marginBottom: 10
                    }}
                >

                    {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}> */}

                    <LinearGradient colors={['#0727CE', '#0727CE', '#052D8D']} style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: height(1), width: width(90), height: height(7) }} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}>

                        <Image source={require('../assets/icons/invite.png')} style={{ height: height(6), marginHorizontal: 10, width: width(6), resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center' }} />
                        <Text style={{ color: COLORS.white, fontSize: fontSize(4.5), textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: FONTS.bold }}>Invite my friends</Text>
                    </LinearGradient>

                </Pressable>


                <Pressable
                    style={{
                        height: height(7), marginTop: height(5),
                        borderRadius: height(2), borderColor: '#E8E6EA', borderWidth: 2,
                        alignItems: 'center', justifyContent: 'center'
                    }}
                >

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>

                        <Text style={{ color: COLORS.primary, fontSize: fontSize(4), textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: FONTS.bold }}>Log out</Text>
                    </View>

                </Pressable>

                <Pressable
                    style={{
                        height: height(7), marginTop: height(3),
                        borderRadius: height(2), borderColor: '#E8E6EA', borderWidth: 2,
                        alignItems: 'center', justifyContent: 'center'
                    }}
                >

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>

                        <Text style={{ color: COLORS.primary, fontSize: fontSize(4), textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: FONTS.bold }}>Delete my account</Text>
                    </View>

                </Pressable>

            </View>

        </BaseView>
    )
}