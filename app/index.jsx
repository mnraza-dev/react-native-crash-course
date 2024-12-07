import {  Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className='flex-1 justify-center items-center '>
      <StatusBar style='auto'/>
      <Text className='text-8xl font-pblack'>App</Text>

      <Link 
      className='text-green-500 py-4 text-2xl'
       href='/home'>
        Go To Home</Link>
    </View>
  )
}

export default App