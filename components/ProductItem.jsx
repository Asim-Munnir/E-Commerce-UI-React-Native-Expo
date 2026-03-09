import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/Color'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width - 40

const ProductItem = ({ item }) => {
    const navigation = useNavigation()
    const [loadingImage, setLoadingImage] = useState(true);
    const [wishlist, setWishlist] = useState([])

    const toggleWishlist = (id) => {
        if (wishlist.includes(id)) {
            // remove from wishlist
            setWishlist(wishlist.filter(productId => productId !== id))
        } else {
            // add to wishlist
            setWishlist([...wishlist, id])
        }
    }

    const isWishlisted = wishlist.includes(item._id)

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { id: item._id })} style={styles.container}>

            <View style={{ position: 'relative' }}>
                {loadingImage && (
                    <View style={{
                        position: 'absolute',
                        width: '100%',
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#eee',
                        borderRadius: 15
                    }}>
                        <ActivityIndicator size="small" color="#007AFF" />
                    </View>
                )}

                <Image
                    source={{ uri: item.image }}
                    style={styles.productImg}
                    onLoadEnd={() => setLoadingImage(false)}
                />
            </View>

            <TouchableOpacity
                style={styles.bookmarkBtn}
                onPress={() => toggleWishlist(item._id)}
            >
                <Ionicons
                    name={isWishlisted ? 'heart' : 'heart-outline'}
                    size={22}
                    color={isWishlisted ? 'red' : Colors.black}
                />
            </TouchableOpacity>

            <View style={styles.productInfo}>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.ratingWrapper}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <Ionicons
                            key={index}
                            name={index < item.rating ? 'star' : 'star-outline'}
                            size={12}
                            color={index < item.rating ? '#D4AF37' : '#ccc'}
                        />
                    ))}
                </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 10
    },
    productImg: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 10,
    },
    bookmarkBtn: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 5,
        borderRadius: 30
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        letterSpacing: 1.1
    },
    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.primary
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    rating: {
        fontSize: 14,
        color: Colors.gray
    }
})