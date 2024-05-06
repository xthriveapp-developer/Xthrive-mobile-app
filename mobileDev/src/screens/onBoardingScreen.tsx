import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Font from '../constants/Font';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import { RootStackParamList } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const OnBoardingScreen: React.FC<Props> = ({ navigation }) => {
  const { height } = Dimensions.get('window');
  console.log(height , 'height')
  const scale = Dimensions.get('screen');
  console.log(scale, 'scale')
  const handlePress = () => {
    console.log('clicked')
    navigation.navigate('Login')
  }

  return (
    <ImageBackground
      source={require('../assets/images/onboarding.jpeg')}
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <LinearGradient
        style={{
          height: height / 2.5,
          paddingHorizontal: Spacing.padding.lg,
        }}
        colors={['rgba(0,0,0,0.1)', '#000']}>
        <Text
          style={{
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Font['poppins-semiBold'],
            textAlign: 'center',
          }}>
          Welcome to Xthrive
        </Text>
        <Text
          style={{
            fontSize: FontSize.base,
            color: Colors.text,
            fontFamily: Font['poppins-regular'],
            textAlign: 'center',
            marginTop: Spacing.margin.base,
            marginBottom: Spacing.margin.xxl,
          }}>
          Get started with your fitness journey and we at Xthrive are there to help you reach your dream body!
        </Text>
        <TouchableOpacity onPress={handlePress}>
          <View
            style={{
              backgroundColor: Colors.accent,
              paddingVertical: Spacing.padding.base,
              paddingHorizontal: Spacing.padding.lg,
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: FontSize.base,
                color: Colors.black,
                fontFamily: Font['poppins-bold'],
              }}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingScreen;