import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {height, width} from '../components/Resizer';
import {COLORS} from '../constants';
import {reset} from '../utils/NavigationService';

export default function SignInStart() {
  //Local States
  const [selected, setSelected] = useState(false);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  //Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //Redux States
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    setTimeout(() => {
      reset('SignIn1');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
        translucent={true}
      />
      <Image
        source={require('../assets/icons/background.png')}
        style={{height: height(100), width: width(100)}}></Image>
      <View
        style={{
          position: 'absolute',
          height: height(100),
          width: width(100),
          justifyContent: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/icons/glass.png')}
          style={{height: width(40), width: width(50)}}
          resizeMode={'contain'}></Image>
        <Image
          source={require('../assets/icons/text.png')}
          style={{height: height(20), width: width(40)}}
          resizeMode={'contain'}></Image>
      </View>
    </View>
  );
}
