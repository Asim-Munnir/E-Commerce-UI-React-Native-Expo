import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import { Colors } from '../constants/Color'

const ProductList = ({ data }) => {
    return (
        <>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>For You</Text>
                <TouchableOpacity>
                    <Text style={styles.titleBtn}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 20 }}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item, index }) => (
                    <ProductItem item={item} index={index} />
                )}
            />
        </>
    )
}

export default ProductList

const styles = StyleSheet.create({
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.6,
        color: Colors.black
    },
    titleBtn: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.black
    }
})