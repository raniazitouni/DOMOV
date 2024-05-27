import React, { useState , useEffect} from 'react';
import { View, Text, FlatList , StyleSheet , TouchableOpacity} from 'react-native';
import ToggleCard from './ToggleCard';
import tw from 'twrnc';
import EmptyList from './EmptyList';
import { colors } from '../theme/constants';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';


// this component changes depending on the list of scenes that the smart switch offers 
import { loadFonts } from '../theme/constants';
import { Switch } from 'react-native';

export default function Flat() {
  const [networkInfo, setNetworkInfo] = useState(null);

  

  // wifi check 
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetworkInfo(state);
    });

    return () => unsubscribe();
    
  }, []);
  
  const [LightState, setLightState] = useState(false);
  const [GarageDoorState, setGarageDoorState] = useState(false);
  
  const [dataList, setDataList] = useState([
    { name: 'Light', devices: 1, key: 1, connected: false },
    { name: 'GarageDoor', devices: 1, key: 2, connected: false}
  ]);

  useEffect(() => {
    const fetchLedStates = async () => {
      try {
        const response = await axios.get(`http://192.168.4.1/state`);
        const { Light, GarageDoor } = response.data;
      
        // Update Light and GarageDoor states
        setLightState(Light);
        setGarageDoorState(GarageDoor);
  
        // Update dataList with new connected values
     
        setDataList(prevDataList => [
          { ...prevDataList[0], connected: Light },
          { ...prevDataList[1], connected: GarageDoor }
        ]);
       
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };
  
    fetchLedStates();
  }, []);

  const handleControlLed = async (device, action) => {
    try {
      await axios.post(`http://192.168.4.1/control/${device}/${action}`);
      // Update local state after successful control command
      if (device === 'Light') {
        setLightState(action === 'on');
      } else if (device === 'GarageDoor') {
        setGarageDoorState(action === 'on');
      }
    } catch (error) {
      console.error(`Error controlling LED ${device}:`, error);
    }
  };
 

  //ch
  const fontsLoaded = loadFonts();
  
  if (!fontsLoaded) {
   return undefined;
  }
  
  const renderDeviceText = (devices) => {
    return devices === '1' ? ' devices' : ' device';
  };


  //..................................................


  return (
    <View > 
      {dataList.length > 0 && (
        <Text style={[tw`ml-7 mr-55 text-18px mb-5 border-b pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey, borderBottomColor: colors.maingrey }]}>  All scenes  </Text>
      ) }

      {/* <FlatList
        data={dataList}
        renderItem={({ item }) => (
          // <ToggleCard name={item.name} devices={item.devices} switchState={item.connected} switchFunction={handleControlLed}/>
          <View style={[tw`w-[180px]  mr-1 h-164px border-0 p-3 flex-col justify-between rounded-7 `,{ backgroundColor: item.connected ? colors.maingreen : '#fff' }]}>
           <View>
             <Text style={[tw` text-18px`, { fontFamily: 'Inter-Medium',color:item.connected ? '#fff' :colors.maingrey }]}>{item.name}</Text>
             <Text style={[tw`pl-1 pt-2 text-14px`, { fontFamily: 'Inter-Regular' , color: item.connected ? '#fff' :colors.maingrey }]}>
                {item.devices}
                {renderDeviceText(item.devices)}
            </Text>
           </View>
           <View>
             <View style={tw`flex-row justify-between items-center`}>
              <Text style={[{ color: item.connected ? '#fff' : 'rgba(60, 60, 67, 0.30)', fontFamily: 'Inter-Regular' }, tw`text-18px mx-2`]}>
                   {item.connected? 'ON' : 'OFF'}
              </Text>
              {/* <Switch
                 trackColor={{ false: "#767577", true: "#767577" }}
                 thumbColor="#f4f3f4"
                 onValueChange={ toggleSwitch(item)/*() => handleControld(item.name, !item.connected ? 'off' : 'on')}
                value={item.connected}
                 style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                /> }
                <View style={styles.container}>
                  <TouchableOpacity
                     style={getButtonStyle(item.connected)}
                     onPress={() => handleControlLed(item.name, item.connected ? 'off' : 'on')}
                   >
                 <Text style={styles.buttonText}> RED LED  {item.connected? 'Off' : 'On'}</Text>
                 </TouchableOpacity>
                 </View>
             </View>
           </View> 
         </View>
       
        )}
        numColumns={2}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      /> */}
    {networkInfo?.isConnected /*&& networkInfo?.details?.ipAddress === '192.168.4.4'*/ ? (
      <View style={tw `flex flex-row justify-between`}>
      <View style={[tw`w-[180px]  mr-1 h-164px border-0 p-3 flex-col justify-between rounded-7 `,{ backgroundColor: LightState ? colors.maingreen : '#fff' }]}>
           <View>
             <Text style={[tw` text-18px`, { fontFamily: 'Inter-Medium',color:LightState ? '#fff' :colors.maingrey }]}>Light</Text>
             <Text style={[tw`pl-1 pt-2 text-14px`, { fontFamily: 'Inter-Regular' , color: LightState ? '#fff' :colors.maingrey }]}>
                1 Device
             </Text>
           </View>
           <View>
             <View style={tw`flex-row justify-between items-center`}>
              <Text style={[{ color: LightState? '#fff' : 'rgba(60, 60, 67, 0.30)', fontFamily: 'Inter-Regular' }, tw`text-18px mx-2`]}>
                   {LightState? 'ON' : 'OFF'}
              </Text>
              <Switch
                 trackColor={{ false: "#767577", true: "#767577" }}
                 thumbColor="#f4f3f4"
                 onValueChange={ () => handleControlLed('Light', LightState ? 'off' : 'on')}
                 value={LightState}
                 style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
              />
               </View>
           </View> 
        </View>
        <View style={[tw`w-[180px]  mr-1 h-164px border-0 p-3 flex-col justify-between rounded-7 `,{ backgroundColor: GarageDoorState ? colors.maingreen : '#fff' }]}>
           <View>
             <Text style={[tw` text-18px`, { fontFamily: 'Inter-Medium',color:GarageDoorState ? '#fff' :colors.maingrey }]}>Garage Door</Text>
             <Text style={[tw`pl-1 pt-2 text-14px`, { fontFamily: 'Inter-Regular' , color: GarageDoorState? '#fff' :colors.maingrey }]}>
                1 Device
             </Text>
           </View>
           <View>
             <View style={tw`flex-row justify-between items-center`}>
              <Text style={[{ color: GarageDoorState? '#fff' : 'rgba(60, 60, 67, 0.30)', fontFamily: 'Inter-Regular' }, tw`text-18px mx-2`]}>
                   {GarageDoorState? 'ON' : 'OFF'}
              </Text>
              <Switch
                 trackColor={{ false: "#767577", true: "#767577" }}
                 thumbColor="#f4f3f4"
                 onValueChange={ () => handleControlLed('GarageDoor', GarageDoorState ? 'off' : 'on')}
                value={GarageDoorState}
                 style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
              />
               </View>
           </View> 
        </View>
      </View>) : (
        <EmptyList/>
      )}
       
    </View>
     
    
  );
}

