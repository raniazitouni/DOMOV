import { View, Text ,TouchableOpacity} from 'react-native'
import Box from '../assets/svgs/Box'
import tw from 'twrnc';
import { colors } from '../theme/constants';
import { useCustomFonts } from '../theme/constants.js';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function EmptyList({handleClick}) {
 
    const navigation = useNavigation();
    const navigateToAddDeviceScreen = () => {
      navigation.navigate('SmartSwitchScreen');
    };
    
  

return (
    <View style={tw `flex justify-center items-center mt-20`}>
      <Box/>
      <Text  style={[tw`text-20px m-5 `, { fontFamily: 'Inter-Regular', color: colors.maingrey}]}>No devices available ...</Text>
      <TouchableOpacity   onPress={navigateToAddDeviceScreen} style={[tw `flex justify-center items-center m-2 h-10 w-[150px] rounded-3 shadow-lg  `,
      {backgroundColor: colors.maingreen }]}>
        
            <Text style={[tw `text-20px `,{fontFamily:'Inter-Regular', color:'#fff' }]}>
               Add device
            </Text>
        

      </TouchableOpacity>
    </View>
  )
}