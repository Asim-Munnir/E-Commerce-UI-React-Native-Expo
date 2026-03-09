import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Color'
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import Google from "../../assets/images/google-logo.svg"
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <TextInput placeholder='abc@gmail.com' style={styles.input} mode='flat' autoCapitalize='none' keyboardType='email-address' />
            <TextInput placeholder='password' style={styles.input} mode='flat' secureTextEntry={true} />
            <TextInput placeholder='confirm password' style={styles.input} mode='flat' secureTextEntry={true} />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.btnTxt}>Create an Account</Text>
            </TouchableOpacity>

            <Text style={styles.loginTxt}>Already have an account?
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.loginTxtSpan}> Signin</Text>
                </TouchableOpacity>
            </Text>

            <View style={styles.divider} />

            <View style={styles.socialLoginWrapper}>
                <TouchableOpacity style={styles.button}>
                    <Google width={20} height={20} />
                    <Text style={styles.socialbtnTxt}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="logo-apple" size={20} color={Colors.black} />
                    <Text style={styles.socialbtnTxt}>Continue with Apple</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: 1.2,
        color: Colors.black,
        marginBottom: 50
    },
    input: {
        width: '85%',
        marginBottom: 14
    },
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 18,
        width: '85%',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 20
    },
    btnTxt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600'
    },
    socialLoginWrapper: {
        width: '85%',
        marginTop: 20
    },
    loginTxt: {
        marginBottom: 30,
        fontSize: 14,
        color: Colors.black,
        lineHeight: 24
    },
    loginTxtSpan: {
        color: Colors.primary,
        fontWeight: '600'
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        borderColor: Colors.gray,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 15
    },
    socialbtnTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
    divider: {
        borderTopColor: Colors.gray,
        borderTopWidth: StyleSheet.hairlineWidth,
        width: '30%',
        marginBottom: 20
    }
})