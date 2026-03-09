import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Text, Button, TextInput } from 'react-native-paper';


const ProfileScreen = () => {
  const [username, setUsername] = useState("John Doe")
  const [email, setEmail] = useState("abc@gmail.com")
  const [password, setPassword] = useState('')


  return (
    <View style={styles.container}>

      {/* Avatar */}
      <Avatar.Image
        size={120}
        source={{
          uri: 'https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.avatar}
      />

      {/* Name */}
      <Text style={styles.name}>{username}</Text>

      {/* Inputs */}

      <TextInput
        label="username"
        value={username}
        mode="flat"
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />

      <TextInput
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        mode="flat"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value="********"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        mode="flat"
        style={styles.input}
      />

      {/* Update Button */}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => alert('Profile updated Successfully')}
      >
        Update Profile
      </Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#e3e4f8',
  },
  avatar: {
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '85%',
    marginBottom: 14,
  },
  button: {
    width: '85%',
    marginTop: 10,
  },
});