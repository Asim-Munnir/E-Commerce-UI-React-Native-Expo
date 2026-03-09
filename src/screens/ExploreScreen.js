import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Colors } from '../../constants/Color'

const ExploreScreen = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // get Categories
  const getCategories = async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
      const someCategory = res.data.slice(0, 6)
      setCategories(someCategory)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
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
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.itemWrapper}>
                <Text style={styles.itemTitle}>{item?.name}</Text>
                <Image source={{ uri: "https://images.pexels.com/photos/5405652/pexels-photo-5405652.jpeg" }} style={{ width: 100, height: 100, borderRadius: 10 }} />
              </View>
            )}
          />
        )
      }


    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.extraLightGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black
  }
})