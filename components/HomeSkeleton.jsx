import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const HomeSkeleton = () => {
    return (
        // Fragment ki jagah ScrollView lagao taake agar content zyada ho to nazar aaye
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

            {/* 1. Header Shimmer (Categories Title) */}
            <View style={styles.titleWrapper}>
                <ShimmerPlaceholder
                    shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                    style={{ width: 120, height: 20, borderRadius: 4 }}
                />
                <ShimmerPlaceholder
                    shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                    style={{ width: 80, height: 20, borderRadius: 4 }}
                />
            </View>

            {/* 2. Categories Horizontal Shimmer */}
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={() => (
                    <View style={styles.item}>
                        <ShimmerPlaceholder
                            style={styles.itemImg}
                        // shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                        />
                        <ShimmerPlaceholder
                            style={{ width: 60, height: 12, borderRadius: 4, marginTop: 5 }}
                            shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                        />
                    </View>
                )}
            />

            {/* 3. Banner Skeleton (JO SHOW NAHI HO RAHA THA) */}
            <View style={{ marginTop: 10, marginBottom: 20 }}>
                <ShimmerPlaceholder
                    // Isko width '100%' rakho taake screen ke mutabiq adjust ho
                    style={{ width: '100%', height: 160, borderRadius: 15 }}
                // shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                />
            </View>

            {/* 4. Products Grid Skeleton (Taake neechay bhi khali na lagay) */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4].map((i) => (
                    <View key={i} style={{ width: '48%', marginBottom: 15 }}>
                        <ShimmerPlaceholder style={{ width: '100%', height: 180, borderRadius: 10 }} />
                        <ShimmerPlaceholder style={{ width: '80%', height: 15, borderRadius: 4, marginTop: 10 }} />
                    </View>
                ))}
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10,
    },
    itemImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    item: {
        marginVertical: 10,
        alignItems: 'center',
        marginRight: 15,
    }
});