import { View, Image, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image
        source={icon}
        tintColor={color}
        className="w-6 h-6"
        resizeMode='contain'
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View >
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false
      }}>
        <Tabs.Screen name='home' options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({
            color, icon
          }) => (

            <TabIcon
              icon={icons.home}
              color={color}
              name={"Home"} 
            />
          )
        }} />
        <Tabs.Screen name='Create' />
        <Tabs.Screen name='Bookmark' />
      </Tabs></>
  )
}

export default TabLayout