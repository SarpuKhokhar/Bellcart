import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/Splash';
import Intro1 from '../Screens/Intro1';
import Signup from '../components/Signup';
import Login from '../components/Login';
import DrawerNavigator from './DrawerNavigator'; // Wraps the tabs now
import FilterDrawer from './FilterDrawer';
import Notification from '../components/Notification';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DrawerNavigator'>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro1" component={Intro1} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="FilterDrawer" component={FilterDrawer} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
