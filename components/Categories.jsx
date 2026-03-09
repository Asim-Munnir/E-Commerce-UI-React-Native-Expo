import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Color'

const Categories = ({ categories }) => {
    return (
        <View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.titleBtn}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity>
                    <View style={styles.item}>
                        <Image source={{uri: item.image}} style={styles.itemImg} />
                        <Text>{item.name.slice(0,10)}...</Text>
                    </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
    },
    itemImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.lightGray
    },
    item: {
        marginVertical: 10,
        gap: 5,
        alignItems: 'center',
        marginRight: 10
    }
})