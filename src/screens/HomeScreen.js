import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from '../../components/ProductList'
import Categories from '../../components/Categories'
import ProductItem from '../../components/ProductItem'


const HomeScreen = () => {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // https://api.escuelajs.co/api/v1/products
  // https://dummyjson.com/products/categories
  // https://api.escuelajs.co/api/v1/categories

  // get Products
  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://fakestoreapiserver.reactbd.org/api/products')
      setData(res.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // get Categories
  const getCategories = async () => {
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
      const someCategory = res.data.slice(0, 6)
      setCategories(someCategory)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={{ marginTop: 10 }}>Loading ...</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 20 }}
            keyExtractor={(item) => item._id.toString()}

            ListHeaderComponent={
              <>
                <Categories categories={categories} />

                <View style={{ marginBottom: 20 }}>
                  <Image
                    source={require('../../assets/images/sale-banner1.jpg')}
                    style={{ width: '100%', height: 150, borderRadius: 15 }}
                  />
                </View>

                <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
                  For You
                </Text>
              </>
            }

            renderItem={({ item }) => (
              <ProductItem item={item} />
            )}
          />
        )
      }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})


{/* <>
            <Categories categories={categories} />
            <View style={{ marginBottom: 10}}>
              <Image source={require('../../assets/images/sale-banner1.jpg')} style={{width: '100%', height: 150, borderRadius: 15}} />
            </View>
            <ProductList data={data} />
          </> */}