import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Color'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Toast from 'react-native-toast-message';


const ProductDetail = () => {
  const route = useRoute()
  const { id } = route.params

  const [product, setProduct] = useState(null)
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(false)

  const { addToCart } = useContext(CartContext);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(item => item !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  const isWishlisted = product ? wishlist.includes(id) : false

  const getProductDetails = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductDetails()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={{ marginTop: 10 }}>Loading ...</Text>
        </View>
      ) : (
        <>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}>
            {product && (
              <>
                {/* Product Image */}
                <Image
                  source={{ uri: product.image }}
                  style={{ width: '100%', height: 350, resizeMode: 'contain', marginBottom: 20 }}
                />

                {/* Rating & Wishlist */}
                <View style={styles.ratingWrapper}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Ionicons
                        key={index}
                        name={index < (product.rating || 0) ? 'star' : 'star-outline'}
                        size={18}
                        color={index < (product.rating || 0) ? '#D4AF37' : '#ccc'}
                      />
                    ))}
                    <Text style={styles.rating}>{product.rating || 0}.4</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => toggleWishlist(id)}
                  >
                    <Ionicons
                      name={isWishlisted ? 'heart' : 'heart-outline'}
                      size={22}
                      color={isWishlisted ? 'red' : Colors.black}
                    />
                  </TouchableOpacity>
                </View>

                {/* Title */}
                <Text style={styles.title}>{product.title}</Text>

                {/* Price */}
                <View style={styles.priceWrapper}>
                  <Text style={styles.price}>${product.price}</Text>
                  <View style={styles.priceDiscount}>
                    <Text style={styles.priceDiscountTxt}>6% Off</Text>
                  </View>
                  <Text style={styles.oldPrice}>${product.oldPrice}</Text>
                </View>

                {/* Description */}
                <Text style={styles.description}>{product.description}</Text>

                {/* Variations */}
                <View style={styles.productVariationWrapper}>
                  <View style={styles.productVariationType}>
                    <Text style={styles.productVariationtitle}>Color</Text>
                    <View style={styles.productVariationValueWrapper}>
                      <View style={{ borderColor: Colors.primary, borderWidth: 1, borderRadius: 100, padding: 2 }}>
                        <View style={[styles.productVariationColorValue, { backgroundColor: "#D4AF37" }]} />
                      </View>
                      <View style={[styles.productVariationColorValue, { backgroundColor: "#333" }]} />
                      <View style={[styles.productVariationColorValue, { backgroundColor: "#8bc34a" }]} />
                      <View style={[styles.productVariationColorValue, { backgroundColor: "#2196f3" }]} />
                      <View style={[styles.productVariationColorValue, { backgroundColor: "#f44336" }]} />
                    </View>
                  </View>

                  <View style={styles.productVariationType}>
                    <Text style={styles.productVariationtitle}>Size</Text>
                    <View style={styles.productVariationValueWrapper}>
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <View
                          key={size}
                          style={[
                            styles.productVariationSizeValue,
                            size === 'S' && { borderColor: Colors.primary, borderWidth: 1 }
                          ]}
                        >
                          <Text
                            style={[
                              styles.productVariationSizeValueText,
                              size === 'S' && { color: Colors.primary, fontWeight: 'bold' }
                            ]}
                          >
                            {size}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </>
            )}
          </ScrollView>

          {/* Bottom Buttons */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => {
                addToCart(product);
                Toast.show({
                  type: 'success',
                  text1: 'Added to Cart',
                  text2: `${product.title} added successfully`,
                  visibilityTime: 3000,
                });
              }} style={[styles.button, { backgroundColor: Colors.white, borderColor: Colors.primary, borderWidth: 1 }]}>
              <Ionicons name='cart-outline' size={20} color={Colors.primary} />
              <Text style={[styles.buttonText, { color: Colors.primary }]}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.gray
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 5
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black
  },
  priceDiscount: {
    backgroundColor: Colors.extraLightGray,
    padding: 5,
    borderRadius: 5
  },
  priceDiscountTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.primary
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    color: Colors.gray
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 24
  },
  productVariationWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap'
  },
  productVariationType: {
    width: '50%',
    gap: 5,
    marginBottom: 10
  },
  productVariationtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black
  },
  productVariationValueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap'
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray
  },
  productVariationSizeValue: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.lightGray,
    borderWidth: 1
  },
  productVariationSizeValueText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.black
  },
  buttonWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 20,
    backgroundColor: Colors.white,
    gap: 10
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    gap: 5,
    backgroundColor: Colors.primary,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white
  }
})