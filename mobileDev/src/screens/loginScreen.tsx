import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Dimensions, Platform, PermissionsAndroid, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getAndroidId, getIpAddress } from 'react-native-device-info';
import { IStackScreenProps } from '../library/StackScreenProps';
import { LayoutEnum, OrientationEnum, ScreenEnum } from '../constants/ScreenEnum';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import Colors from '../constants/Colors';

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

const LoginScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route } = props;
  //     const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [ipAddress, setIpAddress] = useState<string>('');
  const [deviceId, setDeviceId] = useState<string>('');
  const [currentOrientation, setCurrentOrientation] = useState(OrientationEnum.PORTRAIT)
  const [currentScale, setCurrentScale] = useState<ScaleProps>({
    width: ScreenEnum.WIDTH, height: ScreenEnum.HEIGHT
  });
  //     const appearanceInfo = useSelector((state: RootState) => state.appearance);
  const scale = Dimensions.get('screen');
  console.log(scale, 'scale')
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter your email id').email('Username must be a valid email id'),
    password: Yup.string().max(120).required('Please enter your password'),
  })

  const onForgotHandler = () => {
    navigation.navigate('Forgot Password')
  };

  const handleSingUp = () => {
    navigation.navigate('SignUp')
  }

  const initialValues: LoginFormProps = {
    username: '',
    password: '',
    deviceIdentifier: '',
    ipAddress: ''
  };
  const getInfo = async () => {
    let device = await getAndroidId();
    let ip = await getIpAddress();
    setDeviceId(device);
    setIpAddress(ip);
  }

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
  const getCameraPermissoin = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.CAMERA,
        ])
      } catch (error) {
      }
    }
  }

  useEffect(() => {
    getInfo();
    getCameraPermissoin()
    orientCompute(scale.width, scale.height)
    getOrientation()
    return () => {
      orientCompute(scale.width, scale.height)
    }
  }, [])

  return (
    <ImageBackground
      source={require('../assets/images/LoginPageBack.png')}
      style={{
        flex: 1,
        width: '100%',
        // resizeMode: 'cover', // or 'contain' depending on your preference
        justifyContent: 'center',
        alignItems: 'center',

      }}>
      <View style={[LoginPageStyles.Container]}>
        <ScrollView keyboardShouldPersistTaps='handled' style={{ flex: 1 }} showsVerticalScrollIndicator={false} scrollEnabled={(currentOrientation == OrientationEnum.LANDSCAPE) ? true : false}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log('submit')
              console.log(values)
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={[LoginPageStyles.formContainer, { height: currentScale.height, width: currentScale.width * 0.8, marginHorizontal: currentScale.width * 0.1 }]}>
                  <View style={LoginPageStyles.titleBlock}>
                    <Text style={[LoginPageStyles.Logintitle, { marginBottom: -25 }]}>Hi !</Text>
                    <Text style={[LoginPageStyles.Logintitle,]}>Welcome</Text>
                    <View style={{ alignSelf: 'flex-start', marginBottom: 35, marginHorizontal: 5 }}>
                      <Text style={[LoginPageStyles.titleText]}>Please Enter Your Login Credentials!</Text>
                    </View>
                  </View>
                  <View>
                    <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5 }}>
                      <Text style={[LoginPageStyles.title]}>Email</Text>
                    </View>
                    <TextInput
                      style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                      placeholder="Enter Your Email"
                      onChangeText={handleChange('username')}
                      onBlur={() => {
                        handleBlur('username');
                      }}
                      value={values.username}
                      placeholderTextColor={LayoutEnum.GREY}
                      keyboardType="email-address"
                    />
                    <View style={{ marginTop: 6 }}>
                      {errors.username && touched.username && <Text style={[LoginPageStyles.errormessage]}>{errors.username}</Text>}
                    </View>
                    <View style={{ alignSelf: 'flex-start', marginBottom: 5, marginHorizontal: 5, marginTop: 10 }}>
                      <Text style={[LoginPageStyles.title]}>Password</Text>
                    </View>
                    <TextInput
                      style={[LoginPageStyles.input, { width: currentScale.width * 0.8 }]}
                      placeholder="Enter Your Password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholderTextColor={LayoutEnum.GREY}
                      secureTextEntry={true}
                    />
                    <View style={{ marginTop: 6, }}>
                      {errors.password && touched.password && <Text style={[LoginPageStyles.errormessage]}>{errors.password}</Text>}
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10, }} onPress={onForgotHandler}>
                      <Text style={[LoginPageStyles.forgotPasswordButton]} >Forgot password?</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={LoginPageStyles.loginButton} onPress={handleSubmit as (values: any) => void} >
                      <Text style={[LoginPageStyles.loginButtonText]}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[LoginPageStyles.requestAccessContainer, { height: currentScale.height * 0.1 }]}>
                    <Text style={[LoginPageStyles.requestAccessText,]}>New to Xthrive? <Text style={[LoginPageStyles.requestAccessButtonText]} onPress={handleSingUp}>Register Here</Text></Text>
                    <Text style={[LoginPageStyles.needHelpText, (currentOrientation == OrientationEnum.LANDSCAPE) ? { paddingTop: 0 } : { paddingTop: 10 }]}>Need help? Contact us at</Text>
                    <Text style={[LoginPageStyles.needHelpTextNumber]}>
                      +91-8951049082
                    </Text>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View >
    </ImageBackground>
  );
};
export default LoginScreen;