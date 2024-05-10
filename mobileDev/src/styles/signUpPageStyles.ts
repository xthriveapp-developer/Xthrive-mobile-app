import { StyleSheet } from "react-native";
import { ProximaNova, ScreenEnum } from "../constants/ScreenEnum";
import Font from "../constants/Font";
import Colors from "../constants/Colors";

export const SignUpPageStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        // opacity : 100,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        // backgroundColor : 'red'
    },
    FormContainer: {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems : 'center',
        // backgroundColor : 'yellow'
    },
    fieldContainer1: {
        flex: 1.5,
        alignSelf: 'center',
        alignItems: 'center',
        width: ScreenEnum.WIDTH * 0.5,
        // backgroundColor :'red',
    },
    fieldContainer2: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fieldContainer3: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fieldContainer4: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fieldContainer5: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldContainer6: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        color: 'red',
    },
    titleBlock: {
        flex: 2,
    },
    title: {
        alignSelf: 'flex-start',
        color: Colors.accent,
        fontFamily: Font['poppins-semiBold'],
        fontSize : 12,
    },
    Logintitle:
    {
        fontFamily: Font['poppins-bold'],
        fontSize: 26,
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: '300',
        textAlign: 'center',
        marginTop : 60,
    },
    loginAccess: {
        color: Colors.text,
        fontFamily: ProximaNova.REGULAR,
        fontSize: 10,
        marginTop : 6,
    },
    loginAccessButton : {
        color: Colors.accent,
        fontFamily: ProximaNova.SEMIBOLD,
        fontWeight: 'bold',
        fontSize: 10
    },
    formContainer: {
        marginTop : 100,
        // alignItems: 'center',
        // backgroundColor : 'yellow',
        flex : 1,
        display : 'flex',
        flexDirection : 'column'
    },
    signUpTitle:
    {
        fontFamily: ProximaNova.EXTRABOLD,
        fontSize: 40,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});