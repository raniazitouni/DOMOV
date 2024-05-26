import { View, Text, Modal  } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Flat from '../components/Flat2'
import tw from 'twrnc';
import Logo from '../assets/svgs/logo';
import { colors } from '../theme/constants';
import ConnectModal from '../components/Modal'

//Smart switch screen 
export default function SmartSwitchScreen() {
  

  return (
    <ScreenWrapper>
    <View style={tw `mx-5 flex flex-col   `}>
      <View style={tw `flex items-center m-15`}>
      <Logo/>
      </View>
      <Flat/>
      
     
     
    

    </View>
    </ScreenWrapper>
  )
}