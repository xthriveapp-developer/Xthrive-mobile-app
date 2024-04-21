import { StyleSheet } from "react-native";
import { LayoutEnum, ScreenEnum, ProximaNova } from "../constants/ScreenEnum";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from '../constants/Colors'
import Font from "../constants/Font";

export const LoginPageStyles = StyleSheet.create({
    Container: {
        flex: 1,
        // marginTop : 400,
        alignItems: 'center',
        // backgroundColor: Colors.background,
    },
    imageConatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ScreenEnum.HEIGHT * 0.03,
        marginBottom: ScreenEnum.HEIGHT * 0.04
    },
    potraitImageStyles: {
        width: ScreenEnum.WIDTH * 0.6,
        height: ScreenEnum.WIDTH * .06,
    },
    landscapeImageStyles: {
        width: ScreenEnum.WIDTH * 0.4,
        height: ScreenEnum.WIDTH * .04,
    },
    titleBlock: {
        marginTop: 80 ,
    },
    Logintitle:
    {
        fontFamily: ProximaNova.EXTRABOLD,
        fontSize: 30,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '300',
        textAlign: 'center'
    },
    formContainer: {
        alignItems: 'center'
    },
    errormessage: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        alignSelf: 'flex-start',
        color: Colors.accent,
        fontFamily: Font['poppins-semiBold']
    },
    EmailFormContainer: {
        marginTop: 310
    },
    PasswordFormContainer: {
        marginTop: 50
    },
    input:
    {
        color: Colors.text,
        fontFamily: ProximaNova.REGULAR,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: 'white',
        height: 44,
    },
    inputDark:
    {
        fontFamily: ProximaNova.REGULAR,
        borderWidth: 1,
        borderColor: LayoutEnum.FONT_CLR,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        height: 44,
        color: '#000'
    },
    landscapeWidth: {
        width: ScreenEnum.WIDTH * 0.4,

    },
    potraitWidth: {
        width: ScreenEnum.WIDTH * 0.6,
        height: 44
    },
    forgotpasswordContainer: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: ScreenEnum.HEIGHT / 45,
    },
    forgotPasswordButton: {
        color: LayoutEnum.GREY,
        fontSize: 16,
        fontFamily: ProximaNova.REGULAR,
        textAlign: 'center',
        alignSelf: 'center'
    },
    loginButtonContainer: {
        marginBottom: ScreenEnum.HEIGHT / 105
    },
    loginButton:
    {
        backgroundColor: Colors.accent,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        width: ScreenEnum.WIDTH * 0.6,
         marginTop: ScreenEnum.HEIGHT * 0.02
    },
    reloadButton:
    {
        marginTop: ScreenEnum.HEIGHT / 20,
        backgroundColor: '#008000',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        width: 100,
        marginLeft: 700,
    },
    reloadButtonOffline:
    {
        marginTop: ScreenEnum.HEIGHT / 20,
        backgroundColor: '#FF0000',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        width: 100,
        marginLeft: 700,
    },
    dissabledButton: {
        marginTop: ScreenEnum.HEIGHT / 35,
        backgroundColor: LayoutEnum.BUTTON_CLR_DIS,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5
    },
    loginButtonText:
    {
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: ProximaNova.SEMIBOLD,
    },
    requestAccessContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ScreenEnum.HEIGHT * 0.31,
        marginBottom: ScreenEnum.HEIGHT * 0.06,
    },
    requestAccessText: {
        color: Colors.text,
        fontFamily: ProximaNova.REGULAR,
        fontSize: 16,
    },
    needHelpText: {
        color: Colors.text,
        fontFamily: ProximaNova.REGULAR,
        marginTop: 30,
        fontSize: 16
    },
    needHelpTextNumber: {
        color: Colors.text,
        fontFamily: ProximaNova.REGULAR,
        marginTop: 5,
        fontSize: 16
    },
    requestAccessButtonText: {
        color: Colors.accent,
        fontFamily: ProximaNova.SEMIBOLD,
        fontWeight: 'bold',
        fontSize: 16
    },
    error:
    {
        color: LayoutEnum.ERROR_CLR,
        marginBottom: 8,
    },
    required: {
        marginLeft: 2,
        color: LayoutEnum.ERROR_CLR
    }
});