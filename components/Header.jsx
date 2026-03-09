import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Text style={styles.logo}>SX</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={styles.searchBar}>
                <Text style={styles.searchText}>Search</Text>
                <Ionicons name='search-outline' size={20} color={Colors.gray} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingBottom: 10,
        gap: 15
    },
    logo: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.primary
    },
    searchBar: {
        flex: 1,
        backgroundColor: Colors.background,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchText: {
        color: Colors.gray
    }
})