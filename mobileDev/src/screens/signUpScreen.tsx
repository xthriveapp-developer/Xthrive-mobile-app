// components/SignUpPage.tsx

import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { IStackScreenProps } from '../library/StackScreenProps';
import { SignUpPageStyles } from '../styles/signUpPageStyles';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Colors from '../constants/Colors';
import { LayoutEnum } from '../constants/ScreenEnum';

type LoginFormProps = {
  username: string,
  password: string,
  deviceIdentifier: string,
  ipAddress: string
}

const SignUpScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route } = props;
  console.log(props)

  const initialValues: LoginFormProps = {
    username: '',
    password: '',
    deviceIdentifier: '',
    ipAddress: ''
  };

  const SignUpSchema = Yup.object().shape({
    // userName: Yup.string().max(20, 'Name must be at most 20 characters').required('Name is required'),
    // email: Yup.string().email('Invalid email').required('Email is required'),
    // phoneNumber: Yup
    //   .string()
    //   .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    //   .required('Phone number is required'),
    // password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    // height: yup.number().required('Height is required'),
    // weight: yup.number().required('Weight is required'),
    // activity: yup.string().required('Activity is required'),
  });

  const handleSubmitForm = (values: { userName: string; emailId: string; phoneNumber: string; password: string; }) => {
    console.log('clicked')
    console.log(values)
  } 

  return (
    <View style={SignUpPageStyles.Container}>
      <ImageBackground
        source={require('../assets/images/signUpBg.jpeg')}
        style={SignUpPageStyles.backgroundImage}>
        <Formik
          initialValues={{
            userName: '',
            emailId: '',
            phoneNumber: '',
            password: '',
            // height: '',
            // weight: '',
            // activity: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => handleSubmitForm(values)
            // Handle form submission
          }>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View style={SignUpPageStyles.titleBlock}>

              </View>
              <View style={SignUpPageStyles.FormContainer}>
                <View style={SignUpPageStyles.fieldContainer1}>
                  <Text style={SignUpPageStyles.Logintitle}>Create new Account</Text>
                  <Text style={SignUpPageStyles.loginAccess}>Already registered? <Text style={SignUpPageStyles.loginAccessButton}>Log in here.</Text></Text>
                </View>
                <View style={SignUpPageStyles.fieldContainer2}>
                  <View style={{ alignSelf: 'flex-start', marginBottom: 5, }}>
                    <Text style={[SignUpPageStyles.title]}>NAME</Text>
                  </View>
                  <TextInput
                    style={LoginPageStyles.input}
                    placeholder="Enter your name"
                    onChangeText={handleChange('userName')}
                    onBlur={() => {
                      handleBlur('userName');
                    }}
                    value={values.userName}
                    placeholderTextColor={LayoutEnum.GREY}
                    maxLength={25}
                  />
                  {touched.userName && errors.userName && <Text style={SignUpPageStyles.error}>{errors.userName}</Text>}
                </View>
                <View style={SignUpPageStyles.fieldContainer3}>
                  <View style={{ alignSelf: 'flex-start', marginBottom: 5, }}>
                    <Text style={[SignUpPageStyles.title]}>EMAIL ID</Text>
                  </View>
                  <TextInput
                    style={LoginPageStyles.input}
                    placeholder="Enter your email Id"
                    onChangeText={handleChange('emailId')}
                    onBlur={() => {
                      handleBlur('emailId');
                    }}
                    value={values.emailId}
                    placeholderTextColor={LayoutEnum.GREY}
                    keyboardType='email-address'
                  />
                  {touched.emailId && errors.emailId && <Text style={SignUpPageStyles.error}>{errors.emailId}</Text>}
                </View>
                <View style={SignUpPageStyles.fieldContainer4}>
                  <View style={{ alignSelf: 'flex-start', marginBottom: 5, }}>
                    <Text style={[SignUpPageStyles.title]}>PHONE NUMBER</Text>
                  </View>
                  <TextInput
                    style={LoginPageStyles.input}
                    placeholder="Phone Number"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    placeholderTextColor={LayoutEnum.GREY}
                    value={values.phoneNumber}
                    keyboardType="phone-pad" // Set keyboardType to 'phone-pad' for numeric keyboard
                  />
                  {touched.phoneNumber && errors.phoneNumber && <Text style={SignUpPageStyles.error}>{errors.phoneNumber}</Text>}
                </View>
                <View style={SignUpPageStyles.fieldContainer5}>
                  <View style={{ alignSelf: 'flex-start', marginBottom: 5, }}>
                    <Text style={[SignUpPageStyles.title]}>PASSWORD</Text>
                  </View>
                  <TextInput
                    style={LoginPageStyles.input}
                    placeholder="Enter new password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholderTextColor={LayoutEnum.GREY}
                    secureTextEntry // Hide the text input for password
                  />
                  {touched.password && errors.password && <Text style={SignUpPageStyles.error}>{errors.password}</Text>}
                </View>
                <View style={SignUpPageStyles.fieldContainer6}>
                  <TouchableOpacity style={LoginPageStyles.loginButton} onPress={handleSubmit as (values: any) => void} >
                    <Text style={[LoginPageStyles.loginButtonText]}>Proceed</Text>
                  </TouchableOpacity>
                </View>
                {/* <Button onPress={handleSubmit as (values: any) => void} title="Submit" /> */}
              </View>
            </>
          )}
        </Formik>
      </ImageBackground >
    </View >
  );
};

export default SignUpScreen;