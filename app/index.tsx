import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className='flex-1 justify-center items-center '>
      <StatusBar style='auto'/>
      <Text className='text-4xl text-orange-600'>App</Text>

      <Link className='text-blue-600 py-4 text-2xl' href='/profile'>Go To Profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})