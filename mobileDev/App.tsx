import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/navigationStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;