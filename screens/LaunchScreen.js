import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Home from '../assets/svgs/Home'

//Launch screen 
export default function LaunchScreen() {
  return (
    <View style={tw `w-full h-full`}>
      <Home/>
    </View>
  )
}