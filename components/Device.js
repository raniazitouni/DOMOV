import { View, Text } from 'react-native'
import React, { Children } from 'react'
import tw from 'twrnc';
import { colors } from '../theme/constants';
import { loadFonts } from '../theme/constants';


//this component represents the content of the DeviceCard
export default function Device({ switchValue , name ,children}) {
    
  const fontsLoaded = loadFonts();
  
  if (!fontsLoaded) {
   return undefined;
  }
 
  return (
    <View style={[tw` flex flex-row justify-between items-center`,{ backgroundColor: switchValue ? colors.maingreen : '#fff',   height: 65,
    width: '100%',
    borderRadius: 10,
    borderColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16, }]}>
      <Text style={[tw `text-18px `,{fontFamily: 'Inter-Regular', color:switchValue ? '#fff' :colors.maingrey}]}>{name}</Text>
      <View>
        {children}
      </View>
    </View>
  
  )
}