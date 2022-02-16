import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants';
import AppStyles from './AppStyles';
import {height, width} from '../components/Resizer';
export default function TabBarBuyer({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [unreadCount, setUnreadCount] = useState(false);
  const [image, setImage] = useState('');

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  useEffect(() => {}, []);

  return (
    <View style={{backgroundColor: '#f8f8f8'}}>
      <SafeAreaView style={[{backgroundColor: 'white'}, AppStyles.shadow]}>
        <View style={[{flexDirection: 'row'}]}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            let icon;
            if (route.name == 'Profile') {
              icon = isFocused
                ? require('../assets/icons/activeProfile.png')
                : require('../assets/icons/profileTab.png');
            } else if (route.name == 'Match') {
              icon = isFocused
                ? require('../assets/icons/activeCards.png')
                : require('../assets/icons/cardsTab.png');
            } else if (route.name == 'Location') {
              icon = isFocused
                ? require('../assets/icons/activeLocation.png')
                : require('../assets/icons/tabLocation.png');
            } else if (route.name == 'Chat') {
              icon = isFocused
                ? require('../assets/icons/activeChat.png')
                : require('../assets/icons/chatTab.png');
            }
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                keyExtractor={() => route.key}
                onLongPress={onLongPress}
                style={[{flex: 1, height: 80}]}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                    paddingTop: 4,
                  }}>
                  <Image
                    source={icon}
                    style={{
                      height: 30,
                      width: 30,
                      resizeMode: 'contain',
                      marginBottom: 10,
                    }}
                  />
                  {isFocused ? (
                    <View
                      style={{
                        height: height(0.5),
                        width: width(12),
                        backgroundColor: COLORS.primary,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginStart: width(1),
                      }}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
