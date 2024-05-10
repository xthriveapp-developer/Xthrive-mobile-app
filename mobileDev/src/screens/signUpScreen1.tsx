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

const SignUpScreen1 : React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route } = props;
  const [currentOrientation, setCurrentOrientation] = useState(OrientationEnum.PORTRAIT)
  const [currentScale, setCurrentScale] = useState<ScaleProps>({
    width: ScreenEnum.WIDTH, height: ScreenEnum.HEIGHT
  });
  const scale = Dimensions.get('screen');
  console.log(props)

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
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

  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone Number is required'),
  });

  return (
    <View style={SignUpPageStyles.Container}>
      <ImageBackground
        source={require('../assets/images/signUpS1.png')}
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
                navigation.navigate('SignUp2')
              }}
            validationSchema={SignUpSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <View style={[SignUpPageStyles.formContainer, { height: currentScale.height, width: currentScale.width * 0.8, marginHorizontal: currentScale.width * 0.1 }]}>
                    <View style={LoginPageStyles.titleBlock}>
                      <Text style={[SignUpPageStyles.signUpTitle, { alignSelf: 'center' }]}>Create new</Text>
                      <Text style={[SignUpPageStyles.signUpTitle, { alignSelf: 'center', marginTop: -10 }]}>Account</Text>
                      <View style={{ alignSelf: 'center', marginTop : 10 }}>
                        <Text style={[LoginPageStyles.titleText]}>Already Registered? <Text style={[LoginPageStyles.requestAccessButtonText]}>Log In Here</Text></Text>
                      </View>
                    </View>
                    <View>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 100 }}>
                        <Text style={[LoginPageStyles.title]}>First Name</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                        placeholder="Enter Your First Name"
                        onChangeText={handleChange('firstName')}
                        onBlur={() => {
                          handleBlur('firstName');
                        }}
                        value={values.firstName}
                        placeholderTextColor={LayoutEnum.GREY}
                      />
                      <View style={{ marginTop: 6 }}>
                        {errors.firstName && touched.firstName && <Text style={[LoginPageStyles.errormessage]}>{errors.firstName}</Text>}
                      </View>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 8 }}>
                        <Text style={[LoginPageStyles.title]}>Last Name</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                        placeholder="Enter Your Last Name"
                        onChangeText={handleChange('lastName')}
                        onBlur={() => {
                          handleBlur('lastName');
                        }}
                        value={values.lastName}
                        placeholderTextColor={LayoutEnum.GREY}
                      />
                      <View style={{ marginTop: 6 }}>
                        {errors.lastName && touched.lastName && <Text style={[LoginPageStyles.errormessage]}>{errors.lastName}</Text>}
                      </View>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 8 }}>
                        <Text style={[LoginPageStyles.title]}>Email</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                        placeholder="Enter Your Email"
                        onChangeText={handleChange('email')}
                        onBlur={() => {
                          handleBlur('email');
                        }}
                        value={values.email}
                        placeholderTextColor={LayoutEnum.GREY}
                        keyboardType="email-address"
                      />
                      <View style={{ marginTop: 6 }}>
                        {errors.email && touched.email && <Text style={[LoginPageStyles.errormessage]}>{errors.email}</Text>}
                      </View>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 8 }}>
                        <Text style={[LoginPageStyles.title]}>Phone Number</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                        placeholder="Enter Your Number"
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={() => {
                          handleBlur('phoneNumber');
                        }}
                        value={values.phoneNumber}
                        placeholderTextColor={LayoutEnum.GREY}
                        keyboardType='phone-pad'
                      />
                      <View style={{ marginTop: 6 }}>
                        {errors.phoneNumber && touched.phoneNumber && <Text style={[LoginPageStyles.errormessage]}>{errors.phoneNumber}</Text>}
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

export default SignUpScreen1;