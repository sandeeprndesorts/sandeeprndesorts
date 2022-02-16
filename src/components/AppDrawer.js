import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, getAssetPath} from '../constants';
import {logout} from '../reducers/authReducer';
import AppStyles from './AppStyles';
import {fontSize, height} from './Resizer';
export default function AppDrawer(props) {
  const navigation = props.props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [name, setName] = useState('John Doe');
  // const wasDrawerOpen = useIsDrawerOpen();
  function onChangeEmail() {
    navigation.navigate('ChangeEmail');
  }
  function onChangePassword() {
    navigation.navigate('ChangePassword');
  }
  // useEffect(() => {

  //     return () => {
  //         if (!wasDrawerOpen) {

  //         }
  //     }
  // }, [wasDrawerOpen])
  function onLogout() {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => initLogout(),
        },
      ],
      {cancelable: false},
    );
  }
  function initLogout() {
    dispatch(logout());
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{alignSelf: 'center', marginTop: height(4)}}>
          <Image
            style={{
              height: height(10),
              width: height(10),
              borderRadius: height(5),
            }}
            source={getAssetPath(user?.image)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={AppStyles.imageEditIcon}>
            <Image
              source={require('../assets/icons/check.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
          }}
          style={{position: 'absolute', padding: 10, right: 0, top: 0}}>
          <Image
            source={require('../assets/icons/check.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text
          style={{
            color: 'gray',
            fontFamily: FONTS.medium,
            marginTop: 20,
            marginBottom: 5,
          }}>
          {user?.name}
        </Text>

        <Text
          onPress={() => navigation.navigate('EditProfile')}
          style={{
            color: COLORS.secondary,
            fontFamily: FONTS.regular,
            fontSize: fontSize(3),
          }}>
          {'Edit Profile'}
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: '#E4E4E4',
        }}>
        <TouchableOpacity onPress={onChangePassword} style={styles.itemCount}>
          <Text style={styles.itemLabel}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onChangeEmail} style={styles.itemCount}>
          <Text style={styles.itemLabel}>Change Email Address</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout} style={styles.itemCount}>
          <Text style={styles.itemLabel}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemCount: {
    height: height(6),
    borderColor: '#E4E4E4',
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
  },
  itemLabel: {
    paddingHorizontal: 20,
    color: '#666666',
    fontFamily: FONTS.medium,
  },
});
