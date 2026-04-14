import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Colors } from '../constants/Color';
import Toast from 'react-native-toast-message';

const CartItem = ({ item, increaseQty, decreaseQty, removeFromCart }) => {

    console.log("Rendering:", item.title);

    return (
        <View style={styles.itemWrapper}>

            <Image
                source={{ uri: item.image }}
                style={styles.itemImg}
                cachePolicy="memory-disk"
            />

            <View style={styles.itemInfoWrapper}>
                <Text style={styles.itemtext}>{item.title}</Text>
                <Text style={styles.itemtext}>${item.price}</Text>

                <View style={styles.itemControlWrapper}>

                    {/* 🔹 Quantity Controls */}
                    <View style={styles.quantityControlWrapper}>

                        <TouchableOpacity
                            style={[
                                styles.quantityControl,
                                item.quantity === 1 && { opacity: 0.4 }
                            ]}
                            disabled={item.quantity === 1}
                            onPress={() => decreaseQty(item._id)}
                        >
                            <Ionicons name='remove-outline' size={20} color="black" />
                        </TouchableOpacity>

                        <Text>{item.quantity}</Text>

                        <TouchableOpacity
                            style={styles.quantityControl}
                            onPress={() => increaseQty(item._id)}
                        >
                            <Ionicons name='add-outline' size={20} color={Colors.black} />
                        </TouchableOpacity>

                    </View>

                    {/* 🔹 Delete Button */}
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                "Remove Item",
                                "Are you sure you want to remove this product from cart?",
                                [
                                    {
                                        text: "Cancel",
                                        style: "cancel"
                                    },
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            removeFromCart(item._id);
                                            Toast.show({
                                                type: 'success',
                                                text1: 'Item removed from cart',
                                                text2: `${item?.title} deleted successfully`,
                                                visibilityTime: 3000,
                                            });
                                        }
                                    }
                                ]
                            );
                        }}
                    >
                        <Ionicons name='trash-outline' size={20} color={'red'} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

// export default React.memo(CartItem, (prev, next) => {
//     return (
//         prev.item.quantity === next.item.quantity &&
//         prev.item._id === next.item._id
//     );
// });

// export default React.memo(CartItem, (prev, next) => {
//     return (
//         prev.item.quantity === next.item.quantity &&
//         prev.item._id === next.item._id
//     );
// });

export default CartItem

// ================= STYLES =================
const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.lightGray,
        borderRadius: 5
    },
    itemImg: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10
    },
    itemInfoWrapper: {
        flex: 1,
        gap: 10
    },
    itemtext: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.black
    },
    itemControlWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantityControlWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    quantityControl: {
        padding: 5,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 5
    }
});











{/* <View style={styles.itemWrapper}>
                <Image source={{ uri: item.image }} style={styles.itemImg} />

                <View style={styles.itemInfoWrapper}>
                  <Text style={styles.itemtext}>{item.title}</Text>
                  <Text style={styles.itemtext}>${item.price}</Text>

                  <View style={styles.itemControlWrapper}>
                    <View style={styles.quantityControlWrapper}>
                      <TouchableOpacity
                        style={[
                          styles.quantityControl,
                          item.quantity === 1 && { opacity: 0.4 } // 👈 fade effect
                        ]}
                        disabled={item.quantity === 1}
                        onPress={() => decreaseQty(item._id)}
                      >
                        <Ionicons name='remove-outline' size={20} color="black" />
                      </TouchableOpacity>

                      <Text>{item?.quantity}</Text>

                      <TouchableOpacity style={styles.quantityControl} onPress={() => increaseQty(item?._id)}>
                        <Ionicons name='add-outline' size={20} color={Colors.black} />
                      </TouchableOpacity>
                    </View>


                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(
                          "Remove Item",
                          "Are you sure you want to remove this product from cart?",
                          [
                            {
                              text: "Cancel",
                              style: "cancel"
                            },
                            {
                              text: "Yes",
                              onPress: () => {
                                removeFromCart(item._id);
                                Toast.show({
                                  type: 'success',
                                  text1: 'Item removed from cart',
                                  text2: `${item?.title} deleted successfully`,
                                  visibilityTime: 3000,
                                });
                              }
                            }
                          ]
                        );
                      }}
                    >
                      <Ionicons name='trash-outline' size={20} color={'red'} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Ionicons name='heart-outline' size={20} color={Colors.black} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View> */}