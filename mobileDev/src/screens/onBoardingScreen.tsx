import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontSize from '../constants/FontSize';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import Button from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const OnBoardingScreen: React.FC<Props> = ({ navigation }) => {
  const { height } = Dimensions.get('window');

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
                fontFamily: Font['poppins-semiBold'],
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

const styles = StyleSheet.create({});
