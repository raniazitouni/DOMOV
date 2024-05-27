import { View, Text ,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import tw from 'twrnc';
import Arrow from '../assets/svgs/arrow';
import Home from '../assets/svgs/Home'

export default function LaunchScreen() {
  const navigation = useNavigation();
  const navigateToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={tw `w-full h-full bg-[#DCE2ED]`}>
      <Home/>
      <Text style={[tw` m-10`,{ fontFamily: 'Inter-SemiBold', fontSize: 40 }]}>Domov</Text>
      <TouchableOpacity
            style={[tw`ml-50 bg-gray w-40 h-20 rounded-full shadow-lg p-10 `,{backgroundColor:'#DCE2ED'}]}
            onPress={navigateToHomeScreen}
          >
          <Arrow/>  
      </TouchableOpacity>
    </View>
  )
}