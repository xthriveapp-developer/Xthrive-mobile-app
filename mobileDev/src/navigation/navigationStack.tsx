// NavigationStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/onBoardingScreen';
import LoginScreen from '../screens/loginScreen';


const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
