import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import PasswordScreen from '../screen/PasswordScreen2';
import HomeScreen from '../screen/HomeScreen2';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="passwordScreen" component={PasswordScreen} />
      <Stack.Screen name="homeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
