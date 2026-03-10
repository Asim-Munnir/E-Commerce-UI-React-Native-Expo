import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Color";

const CartHeaderIcon = () => {
    const { cartItems } = useContext(CartContext);
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("MainTabs", { screen: "Cart" })}
            style={{ marginRight: 15, padding: 5 }}
        >
            <View style={{ position: "relative" }}>

                <Ionicons name="cart-outline" size={24} color={Colors.black} />

                {cartItems.length > 0 && (
                    <View
                        style={{
                            position: "absolute",
                            right: -4,
                            top: -3-2,
                            backgroundColor: "red",
                            borderRadius: 10,
                            minWidth: 18,
                            height: 18,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingHorizontal: 4
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 10,
                                fontWeight: "bold"
                            }}
                        >
                            {cartItems.length > 9 ? "9+" : cartItems.length}
                        </Text>
                    </View>
                )}

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    badge: {
        position: "absolute",
        right: -6,
        top: -4,
        backgroundColor: "red",
        borderRadius: 9,
        minWidth: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 4,
    },
    text: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
});

export default CartHeaderIcon;