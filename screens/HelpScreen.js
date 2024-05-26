import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Visit from '../assets/svgs/visit';
import Manual from '../assets/svgs/manual';
import Device from '../components/Device';
import tw from 'twrnc';
import { colors } from '../theme/constants';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import Logo from '../assets/svgs/logo';



//Help screen
export default function HelpScreen() {

  const handleVisit = async () => {
    const url = 'https://domov-website.vercel.app/'; 
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  }

  
  return (
    <ScreenWrapper>
      <View style={tw `mx-3 flex flex-col   `}>
      <View style={tw `flex items-center m-15`}>
      <Logo/>
      </View>
      <Text style={[tw`ml-3 text-18px mb-2 mt-7 pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey }]}> For further information :  </Text>
      <View style={[tw`h-full my-3 mx-2 flex `]}>
        <TouchableOpacity onPress={handleVisit}>
        <View style={[tw` flex flex-row  items-center`,{ backgroundColor: '#fff',   height: 65,
         width: '100%',
         borderRadius: 10,
         borderColor: 'white',
         borderRadius: 8,
         marginBottom: 20,
         paddingHorizontal: 10,
         fontSize: 16, }]}>
          <Visit/>
         <Text style={[tw `text-18px pl-3 `,{fontFamily: 'Inter-Regular', color:colors.maingrey}]}>Visit our website </Text>
      
         </View>
        </TouchableOpacity>
      </View>
      </View>
    </ScreenWrapper>
  )
}



