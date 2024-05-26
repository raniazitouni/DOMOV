import React from 'react';
import tw from 'twrnc';
import { Text, View } from 'react-native';
import { loadFonts} from '../theme/constants';
import { colors } from '../theme/constants';


//this component represents the container of the card that turns on and off the scenes of a smart switch
const Togglecontainer = ({ switchValue, toggleSwitch, children ,name, devices }) => {
   
  
  
  const fontsLoaded = loadFonts();
  
  if (!fontsLoaded) {
   return undefined;
  }
    
  
    const renderDeviceText = () => {
      return devices === '1' ? ' device' : ' devices';
    };
    
  return (
    <View style={[tw`w-[180px]  mr-1 h-164px border-0 p-3 flex-col justify-between rounded-7 `,{ backgroundColor: switchValue ? colors.maingreen : '#fff' }]}>
    <View>
        <Text style={[tw` text-18px`, { fontFamily: 'Inter-Medium',color:switchValue ? '#fff' :colors.maingrey }]}>{name}</Text>
        <Text style={[tw`pl-1 pt-2 text-14px`, { fontFamily: 'Inter-Regular' , color: switchValue ? '#fff' :colors.maingrey }]}>
          {devices}
          {renderDeviceText()}
        </Text>
    </View>
    <View>
       {children}
    </View> 
    </View>
  );
};

export default Togglecontainer;