import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Loader from './components/Loader';
import TabBarBuyer from './components/TabBarBuyer';
import {alreadyAuthenticated} from './reducers/authReducer';
import {checkIfAuthenticated} from './utils/Api';
import {navigationRef} from './utils/NavigationService';
import Splash from './screens/Splash';
import SignUpCode from './screens/SignUpCode';
import SignInStart from './screens/SignInStart';
import SignIn1 from './screens/SignIn1';
import SignIn2 from './screens/SignIn2';
import SignIn3 from './screens/SignIn3';
import SignIn4 from './screens/SignIn4';
import SignIn5 from './screens/SignIn5';
import SignIn6 from './screens/SignIn6';
import SignIn7 from './screens/SignIn7';
import SignIn8 from './screens/SignIn8';
import SignIn9 from './screens/SignIn9';
import SignIn10 from './screens/SignIn10';
import SignIn11 from './screens/SignIn11';
import SignInEnd from './screens/SignInEnd';
import Setting from './screens/Setting';
import Profile from './screens/Profile';
import EventList from './screens/EventList';
import HotSpotPage from './screens/HotSpotPage';
import EventPage from './screens/EventPage';
import EditEmail from './screens/EditEmail';
import EditOrientation from './screens/EditOrientation';
import EditWantSee from './screens/EditWantSee';
import EditGender from './screens/EditGender';
import EditLocation from './screens/EditLocation';
import EditCelebrated from './screens/EditCelebrated';
import EditDrink from './screens/EditDrink';
import EditInterest from './screens/EditInterest';
import EditProfile from './screens/EditProfile';
import Match from './screens/Match';
import ChatDetail from './screens/ChatDetail';
import MessageList from './screens/MessageList';
import CreateAccount from './screens/CreateAccount';
import MatchSent from './screens/MatchSent';
import MatchDone from './screens/MatchDone';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

import AuthSignIn from './screens/Auth/SignIn';
import EnterOTPSignInScreen from './screens/Auth/EnterOTPSignIn';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const dispatch = useDispatch();
  LogBox.ignoreAllLogs(true);
  useEffect(() => {
    dispatch(checkIfAuthenticated(alreadyAuthenticated));
  }, []);

  return (
  
     
        <NavigationContainer ref={navigationRef}>
          {AuthStack()}
          {/* <Loader visible={isLoading || authLoading || propertiesLoading} /> */}
        </NavigationContainer>
     
   
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInEnd" component={SignInEnd} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="BottomTabs1" component={BottomTabs1} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="MatchSent" component={MatchSent} />
      <Stack.Screen name="MatchDone" component={MatchDone} />
      <Stack.Screen name="MessageList" component={MessageList} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditEmail" component={EditEmail} />
      <Stack.Screen name="EditOrientation" component={EditOrientation} />
      <Stack.Screen name="EditWantSee" component={EditWantSee} />
      <Stack.Screen name="EditGender" component={EditGender} />
      <Stack.Screen name="EditLocation" component={EditLocation} />
      <Stack.Screen name="EditCelebrated" component={EditCelebrated} />
      <Stack.Screen name="EditDrink" component={EditDrink} />
      <Stack.Screen name="EditInterest" component={EditInterest} />
      <Stack.Screen name="EventList" component={EventList} />
      <Stack.Screen name="HotSpotPage" component={HotSpotPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
    </Stack.Navigator>
  );
};
const AuthStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="AuthSignIn" component={AuthSignIn} />
      <Stack.Screen name="EnterOtpSignIn" component={EnterOTPSignInScreen} />
      <Stack.Screen name="SignUpCode" component={SignUpCode} />
      <Stack.Screen name="SignInStart" component={SignInStart} />
      <Stack.Screen name="SignIn1" component={SignIn1} />
      <Stack.Screen name="SignIn2" component={SignIn2} />
      <Stack.Screen name="SignIn3" component={SignIn3} />
      <Stack.Screen name="SignIn4" component={SignIn4} />
      <Stack.Screen name="SignIn5" component={SignIn5} />
      <Stack.Screen name="SignIn6" component={SignIn6} />
      <Stack.Screen name="SignIn7" component={SignIn7} />
      <Stack.Screen name="SignIn8" component={SignIn8} />
      <Stack.Screen name="SignIn9" component={SignIn9} />
      <Stack.Screen name="SignIn10" component={SignIn10} />
      <Stack.Screen name="SignIn11" component={SignIn11} />
      <Stack.Screen name="SignInEnd" component={SignInEnd} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="BottomTabs1" component={BottomTabs1} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="MatchSent" component={MatchSent} />
      <Stack.Screen name="MatchDone" component={MatchDone} />
      {/* <Stack.Screen name="UserDetail" component={UserDetail} /> */}
      <Stack.Screen name="MessageList" component={MessageList} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditEmail" component={EditEmail} />
      <Stack.Screen name="EditOrientation" component={EditOrientation} />
      <Stack.Screen name="EditWantSee" component={EditWantSee} />
      <Stack.Screen name="EditGender" component={EditGender} />
      <Stack.Screen name="EditLocation" component={EditLocation} />
      <Stack.Screen name="EditCelebrated" component={EditCelebrated} />
      <Stack.Screen name="EditDrink" component={EditDrink} />
      <Stack.Screen name="EditInterest" component={EditInterest} />
      <Stack.Screen name="EventList" component={EventList} />
      <Stack.Screen name="HotSpotPage" component={HotSpotPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
    </Stack.Navigator>
  );
};
const BottomTabs = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName={'Match'}
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBarBuyer {...props} />}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Match" component={Match} />
      <Tab.Screen name="Location" component={EventList} />
      <Tab.Screen name="Chat" component={MessageList} />
    </Tab.Navigator>
  );
};

const BottomTabs1 = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName={'Chat'}
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBarBuyer {...props} />}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Match" component={Match} />
      <Tab.Screen name="Location" component={EventList} />
      <Tab.Screen name="Chat" component={MessageList} />
    </Tab.Navigator>
  );
};
export default App;
