import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Google from "../../assets/images/google-logo.svg"

const WelcomeScreen = () => {
    const navigation = useNavigation()

    return (
        <>
            <ImageBackground source={require('../../assets/images/welcomeScreen.jpg')} style={{ flex: 1 }} resizeMode='cover'>
                <View style={styles.container}>
                    <LinearGradient colors={["transparent", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)"]} style={styles.background}>
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>StyleHub</Text>
                            <Text style={styles.description}>One Stop Solution for All Your Needs.</Text>

                            <View style={styles.socialLoginWrapper}>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
                                    <Ionicons name="mail-outline" size={20} color={Colors.black} />
                                    <Text style={styles.btnTxt}>Continue with Email</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Google width={20} height={20} />
                                    <Text style={styles.btnTxt}>Continue with Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Ionicons name="logo-apple" size={20} color={Colors.black} />
                                    <Text style={styles.btnTxt}>Continue with Apple</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.loginTxt}>Already have an account?
                                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                                    <Text style={styles.loginTxtSpan}> Signin</Text>
                                </TouchableOpacity>
                            </Text>

                        </View>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end'
    },
    wrapper: {
        paddingBottom: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: Colors.primary,
        fontWeight: '700',
        letterSpacing: 2.4,
        marginBottom: 5
    },
    description: {
        fontSize: 14,
        color: Colors.gray,
        letterSpacing: 1.2,
        lineHeight: 30,
        marginBottom: 20
    },
    socialLoginWrapper: {
        alignSelf: 'stretch'
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
    btnTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
    loginTxt: {
        marginTop: 30,
        fontSize: 14,
        color: Colors.black,
        lineHeight: 24
    },
    loginTxtSpan: {
        color: Colors.primary,
        fontWeight: '600'
    }
});