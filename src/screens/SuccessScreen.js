import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function SuccessScreen() {

    const navigation = useNavigation()

    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <View style={styles.container}>

            <LottieView
                source={require('../../assets/animations/Success.json')}
                autoPlay
                loop={true}
                style={{ width: 250, height: 250 }}
            />

            <Text style={styles.title}>Payment Successful 🎉</Text>
            <Text style={styles.text}>
                Your order has been placed successfully.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    clearCart();
                    navigation.navigate('MainTabs', { screen: 'Home' });
                }}
            >
                <Text style={styles.buttonText}>Continue Shopping</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    text: {
        fontSize: 14,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 30,
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3, // Android shadow
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});