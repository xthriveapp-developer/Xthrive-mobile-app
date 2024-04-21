import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Dimensions, Platform, PermissionsAndroid, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getAndroidId, getIpAddress } from 'react-native-device-info';
import { IStackScreenProps } from '../library/StackScreenProps';
import { LayoutEnum, OrientationEnum, ScreenEnum } from '../constants/ScreenEnum';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

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
      source={require('../assets/images/loginPgaeBg.jpeg')}
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <View style={[LoginPageStyles.Container]}>
        <ScrollView keyboardShouldPersistTaps='handled' style={{ flex: 1 }} showsVerticalScrollIndicator={false} scrollEnabled={(currentOrientation == OrientationEnum.LANDSCAPE) ? true : false}>
          <View style={[LoginPageStyles.formContainer, (currentOrientation == OrientationEnum.LANDSCAPE) ? { height: currentScale.height * 0.5, width: currentScale.width * 0.4 } : { height: currentScale.height * 0.5, width: currentScale.width * 0.6, marginHorizontal: currentScale.width * 0.1 }]}>
            <Formik
              initialValues={initialValues}
              onSubmit={() => {
                console.log('submit')
              }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <View style={LoginPageStyles.titleBlock}>
                    <Text style={[LoginPageStyles.Logintitle]}>LOGIN <Text style={{ color: Colors.accent }}>HERE</Text></Text>
                  </View>
                  <View style={LoginPageStyles.EmailFormContainer}>
                    <View style={{ alignSelf: 'flex-start', marginBottom: 5, }}>
                      <Text style={[LoginPageStyles.title]}>Email Id</Text>
                    </View>
                    <TextInput
                      style={[LoginPageStyles.input, (currentOrientation == OrientationEnum.LANDSCAPE) ? { width: currentScale.width * 0.4 } : { width: currentScale.width * 0.6 }]}
                      placeholder="Enter your email Id"
                      onChangeText={handleChange('username')}
                      onBlur={() => {
                        handleBlur('username');
                      }}
                      value={values.username}
                      placeholderTextColor={LayoutEnum.GREY}
                      keyboardType="email-address"
                    />
                    {errors.username && touched.username && <Text style={[LoginPageStyles.errormessage]}>{errors.username}</Text>}
                    <View style={(currentOrientation == OrientationEnum.LANDSCAPE) ? { marginTop: 25 } : { marginTop: 20 }}>
                      <View style={{ alignSelf: 'flex-start', marginBottom: 5, }}>
                        <Text style={[LoginPageStyles.title]}>Password</Text>
                      </View>
                      <TextInput
                        style={[LoginPageStyles.input, (currentOrientation == OrientationEnum.LANDSCAPE) ? { width: currentScale.width * 0.4 } : { width: currentScale.width * 0.6 }]}
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholderTextColor={LayoutEnum.GREY}
                        secureTextEntry
                      />
                    </View>
                    {errors.password && touched.password && <Text style={[LoginPageStyles.errormessage]}>{errors.password}</Text>}
                  </View>
                  <View style={LoginPageStyles.forgotpasswordContainer}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={onForgotHandler}>
                      <Text style={[LoginPageStyles.forgotPasswordButton]} >Forgot password?</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={LoginPageStyles.loginButton} onPress={handleSubmit as (values: any) => void} >
                      <Text style={[LoginPageStyles.loginButtonText]}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          <View style={[LoginPageStyles.requestAccessContainer, (currentOrientation == OrientationEnum.LANDSCAPE) ? { height: currentScale.width * 0.05, marginTop: currentScale.width * 0.03 } : { height: currentScale.height * 0.1 }]}>
            <Text style={[LoginPageStyles.requestAccessText, (currentOrientation == OrientationEnum.LANDSCAPE) ? { marginTop: 0 } : { marginTop: -30 }]}>New to Xthrive? <Text style={[LoginPageStyles.requestAccessButtonText]} onPress={() => console.log('Request Access')}>Register Here</Text></Text>
            <Text style={[LoginPageStyles.needHelpText, (currentOrientation == OrientationEnum.LANDSCAPE) ? { paddingTop: 0 } : { paddingTop: 10 }]}>Need help? Contact us at</Text>
            <Text style={[LoginPageStyles.needHelpTextNumber]}>
              +91-8861817682
            </Text>
          </View>
        </ScrollView>
      </View >
    </ImageBackground>
  );
};
export default LoginScreen;