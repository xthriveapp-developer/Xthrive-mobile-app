
import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, TextInput, Dimensions, } from 'react-native';
import { IStackScreenProps } from '../library/StackScreenProps';
import { SignUpPageStyles } from '../styles/signUpPageStyles';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LayoutEnum, OrientationEnum, ScreenEnum } from '../constants/ScreenEnum';
import { Menu, Divider, Provider } from 'react-native-paper';

type ScaleProps = {
    width: number,
    height: number
}

const SignUpScreen3: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation, route } = props;
    const [currentOrientation, setCurrentOrientation] = useState(OrientationEnum.PORTRAIT)
    const [currentScale, setCurrentScale] = useState<ScaleProps>({
        width: ScreenEnum.WIDTH, height: ScreenEnum.HEIGHT
    });
    const scale = Dimensions.get('screen');
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedUnit, setSelectedUnit] = useState<string>('cm');

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleUnitSelect = (unit: string) => {
        setSelectedUnit(unit);
        setVisible(false);
    };

    console.log(props)

    const initialValues = {
        password: '',
        confirmPassword: ''
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
                                            <Text style={[SignUpPageStyles.signUpTitle, { alignSelf: 'center', marginTop: 10 }]}>Set your</Text>
                                            <Text style={[SignUpPageStyles.signUpTitle, { alignSelf: 'center', marginTop: -10 }]}>Password</Text>
                                            <View style={{ alignSelf: 'center', marginTop: 20 }}>
                                                <Text style={[LoginPageStyles.titleText]}>Already Registered? <Text style={[LoginPageStyles.requestAccessButtonText]}>Log In Here</Text></Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Provider>
                                                <View >
                                                    <Menu
                                                        visible={visible}
                                                        onDismiss={closeMenu}
                                                        anchor={<Text onPress={openMenu} style={{
                                                            fontSize: 18,
                                                            marginBottom: 10,
                                                        }}>Select Unit</Text>}
                                                    >
                                                        <Menu.Item onPress={() => handleUnitSelect('cm')} title="cm" />
                                                        <Divider />
                                                        <Menu.Item onPress={() => handleUnitSelect('inch')} title="inch" />
                                                    </Menu>
                                                </View>
                                            </Provider>

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

export default SignUpScreen3;