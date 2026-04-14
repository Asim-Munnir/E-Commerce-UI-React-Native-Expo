import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'
// import React, { useCallback, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Color'
// import { CartContext } from '../context/CartContext'
import Toast from 'react-native-toast-message';
import { Image } from 'expo-image'
import { useCartStore } from '../store/cartStore';
import CartItem from '../../components/CartItem';
// import CartItem from '../../components/CartItem'

const CartScreen = () => {
  // const { cartItems, removeFromCart, setCartItems } = useContext(CartContext)
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  // Total price calculate
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const totalQty = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // const increaseQty = useCallback((productId) => {
  //   setCartItems(prev =>
  //     prev.map(item =>
  //       item._id === productId
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // }, []);


  // Decrease Quantity

  // const decreaseQty = useCallback((productId) => {
  //   setCartItems(prev =>
  //     prev.map(item =>
  //       item?._id === productId ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   )
  // }, [])

  // Decrease Quantity
  // const decreaseQty = (productId) => {
  //   setCartItems(prevCart =>
  //     prevCart.map(item =>
  //       item._id === productId
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };


  // const renderItem = useCallback(({ item }) => {
  //   return (
  //     <CartItem
  //       item={item}
  //       increaseQty={increaseQty}
  //       decreaseQty={decreaseQty}
  //       removeFromCart={removeFromCart}
  //     />
  //   );
  // }, [increaseQty, decreaseQty, removeFromCart]);


  return (
    <>
      <View style={styles.container}>
        {cartItems.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 50 }}>Your Cart is Empty</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item?._id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
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
              </View>
            )}

          />
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
          <Text style={styles.qtyTxt}>Total QTY: {totalQty}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CartScreen

// ========================= STYLES =========================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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
    alignSelf: 'flex-start',
    gap: 10
  },
  itemtext: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black
  },
  qtyTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black
  },
  itemControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
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
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: Colors.white
  },
  priceInfoWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white
  }
})