import React from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);


export const AboutSkeleton = () => {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

            <View>
                <ShimmerPlaceholder
                    // Isko width '100%' rakho taake screen ke mutabiq adjust ho
                    style={{ width: '100%', height: 350, borderRadius: 15 }}
                // shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                />
            </View>

            <View style={styles.rating}>
                <ShimmerPlaceholder
                    // shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                    style={{ width: 120, height: 20, borderRadius: 4 }}
                />
                <ShimmerPlaceholder
                    // shimmerColors={['#ebebeb', '#f5f5f5', '#ebebeb']}
                    style={{ width: 80, height: 20, borderRadius: 4 }}
                />
            </View>

            {/* title skeleton */}
            <View>
                <ShimmerPlaceholder
                    style={{ width: 250, height: 30, borderRadius: 4 }}
                />
            </View>

            <View style={styles.price}>
                {/* price skeleton */}
                <ShimmerPlaceholder
                    style={{ width: 80, height: 20, borderRadius: 4 }}
                />

                {/* discount skeleton */}
                <ShimmerPlaceholder
                    style={{ width: 80, height: 20, borderRadius: 4 }}
                />

                {/* full price skeleotn */}
                <ShimmerPlaceholder
                    style={{ width: 80, height: 20, borderRadius: 4 }}
                />
            </View>


            {/* Shimmer Skeleton */}
            <View style={styles.description}>
                <ShimmerPlaceholder
                    style={{ width: '100%', height: 110, borderRadius: 4 }}
                />
            </View>

            {/* Product Variations */}
            <View style={styles.productVariationWrapper}>

                <ShimmerPlaceholder
                    style={{ width: '50%', height: 30, borderRadius: 4 }}
                />

                <ShimmerPlaceholder
                    style={{ width: '50%', height: 30, borderRadius: 4 }}
                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10,
    },
    price: {
        flexDirection: "row",
        gap: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    description: {
        marginTop: 20
    },
    productVariationWrapper: {
        flexDirection: "row",
        marginTop: 20
    }
})