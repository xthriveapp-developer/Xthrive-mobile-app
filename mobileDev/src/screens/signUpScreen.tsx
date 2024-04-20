// components/SignUpPage.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Page</Text>
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignUpScreen;
