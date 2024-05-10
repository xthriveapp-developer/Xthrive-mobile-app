// NavigationStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/onBoardingScreen';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen1 from '../screens/signUpScreen1';
import SignUpScreen2 from '../screens/signUpScreen2';
import SignUpScreen3 from '../screens/signUpScreen3';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen1}  options={{ headerShown: false }} />
      <Stack.Screen name="SignUp2" component={SignUpScreen2} options={{headerShown : false}}/>
      <Stack.Screen name="SignUp3" component={SignUpScreen3} options={{headerShown : false}}/>
    </Stack.Navigator>
  );
};

export default NavigationStack;
