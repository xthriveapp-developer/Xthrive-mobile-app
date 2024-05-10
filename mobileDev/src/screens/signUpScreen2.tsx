// components/SignUpPage.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity, TextInput, Dimensions, Platform } from 'react-native';
import { IStackScreenProps } from '../library/StackScreenProps';
import { SignUpPageStyles } from '../styles/signUpPageStyles';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Colors from '../constants/Colors';
import { LayoutEnum, OrientationEnum, ScreenEnum } from '../constants/ScreenEnum';
import { getAndroidId, getIpAddress } from 'react-native-device-info';

type LoginFormProps = {
  username: string,
  password: string,
  deviceIdentifier: string,
  ipAddress: string
}

type ScaleProps = {
  width: number,
  height: number
}

const SignUpScreen2 : React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route } = props;
  const [currentOrientation, setCurrentOrientation] = useState(OrientationEnum.PORTRAIT)
  const [currentScale, setCurrentScale] = useState<ScaleProps>({
    width: ScreenEnum.WIDTH, height: ScreenEnum.HEIGHT
  });
  const scale = Dimensions.get('screen');
  console.log(props)

  const initialValues = {
    password : '',
    confirmPassword : ''
  };

  const orientCompute = (width: number, height: number) => {
    const orient = width > height ? OrientationEnum.LANDSCAPE : OrientationEnum.PORTRAIT;
    setCurrentOrientation(orient);
    setCurrentScale({
      width: width, height: height
    })
  }

  const getOrientation = () => {
    Dimensions.addEventListener('change', () => {
      const screen = Dimensions.get('screen');
      orientCompute(screen.width, screen.height)
    })
  }

  useEffect(() => {
    orientCompute(scale.width, scale.height)
    getOrientation()
    return () => {
      orientCompute(scale.width, scale.height)
    }
  }, [])

  const SignUpSchema2 = Yup.object().shape({
    password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'),], 'Passwords must match'),
  });

  const handleSubmitForm = (values: { userName: string; emailId: string; phoneNumber: string; password: string; }) => {
    console.log('clicked')
    console.log(values)
  }

  return (
    <View style={SignUpPageStyles.Container}>
      <ImageBackground
        source={require('../assets/images/signUpS2.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute'

        }}>
        <View style={[LoginPageStyles.Container]}>
          <ScrollView keyboardShouldPersistTaps='handled' style={{ flex: 1 }} showsVerticalScrollIndicator={false} scrollEnabled={(currentOrientation == OrientationEnum.LANDSCAPE) ? true : false}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                console.log('submit')
                console.log(values)
                // nav
              }}
            validationSchema={SignUpSchema2}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <View style={[SignUpPageStyles.formContainer, { height: currentScale.height, width: currentScale.width * 0.8, marginHorizontal: currentScale.width * 0.1 }]}>
                    <View style={LoginPageStyles.titleBlock}>
                      <Text style={[SignUpPageStyles.signUpTitle, { alignSelf: 'center' , marginTop : 10}]}>Set your</Text>
                      <Text style={[SignUpPageStyles.signUpTitle, { alignSelf: 'center', marginTop: -10 }]}>Password</Text>
                      <View style={{ alignSelf: 'center', marginTop : 20 }}>
                        <Text style={[LoginPageStyles.titleText]}>Already Registered? <Text style={[LoginPageStyles.requestAccessButtonText]}>Log In Here</Text></Text>
                      </View>
                    </View>
                    <View>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 100 }}>
                        <Text style={[LoginPageStyles.title]}>Password</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                        placeholder="Choose Your Account Password"
                        onChangeText={handleChange('password')}
                        onBlur={() => {
                          handleBlur('password');
                        }}
                        value={values.password}
                        placeholderTextColor={LayoutEnum.GREY}
                        secureTextEntry
                      />
                      <View style={{ marginTop: 6 }}>
                        {errors.password && touched.password && <Text style={[LoginPageStyles.errormessage]}>{errors.password}</Text>}
                      </View>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 10 }}>
                        <Text style={[LoginPageStyles.title]}>Confirm Password</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                        placeholder="Please re-enter your password"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={() => {
                          handleBlur('confirmPassword');
                        }}
                        value={values.confirmPassword}
                        placeholderTextColor={LayoutEnum.GREY}
                      />
                      <View style={{ marginTop: 6 }}>
                        {errors.confirmPassword && touched.confirmPassword && <Text style={[LoginPageStyles.errormessage]}>{errors.confirmPassword}</Text>}
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity style={LoginPageStyles.loginButton} onPress={handleSubmit as (values: any) => void} >
                        <Text style={[LoginPageStyles.loginButtonText]}>Continue</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </ScrollView>
        </View >
      </ImageBackground>

    </View>
  );
};

export default SignUpScreen2;