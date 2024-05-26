import React, { useState , useEffect} from 'react';
import { View, Text, FlatList ,Platform, Linking} from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/constants';
import DeviceCard from './DeviceCard';
import { TouchableOpacity } from 'react-native';
import ConnectModal from './Modal';
import Modal2 from './Modal2';

import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';

//this component gives the list of the smart switches that exist in the area
export default function Flat() {
  const [data, setData] = useState([
    { name: 'Domov', key: 1, connected: false },
    // { name: 'Device 2', key: 2, connected: false },
    // { name: 'Device 3', key: 3, connected: false },
    // { name: 'Device 4', key: 4, connected: false },
  ]);
  
  const [connectedDevices, setConnectedDevices] = useState([]);
  const [availableDevices, setAvailableDevices] = useState([]);

  //modals 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConnected,setModalConnnected] = useState(false);

  const [modalVisible2, setModalVisible2] = useState(false);
  
  //spliting the connected and none connected devices
  // const connectedDevices = data.filter(device => device.connected === true);
  // const availableDevices = data.filter(device => device.connected === false);


  const [switchValue , setSwitchValue] = useState(false);



  // Fetch current SSID
  const [isWifiConnected, setIsWifiConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsWifiConnected(state.type === 'wifi' && state.isConnected);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const getCurrentSSID = async () => {
    try {
      const state = await NetInfo.fetch();
      const currentSsid = state.details.ssid;
      if (isWifiConnected) {
        if (currentSsid === 'Domov') {
          setSwitchValue(true);
          const updatedData = data.map(item => {
            if (item.name === 'Domov' ) {
            return { ...item, connected: true };
            }
          return item;
           });
          setData(updatedData);
        } else{
          setSwitchValue(false);
          const updatedData = data.map(item => {
            if (item.name === 'Domov' ) {
            return { ...item, connected: false};
            }
          return item;
           });
          setData(updatedData);

        }
      } else {
        console.log("SSID is undefined, make sure permissions are granted and WiFi is connected");
        setSwitchValue(false);
        const updatedData = data.map(item => {
          return { ...item, connected: false};
         });
        setData(updatedData);

      }
    } catch (error) {
      console.error("Error fetching SSID: ", error);
      setSwitchValue(false);
        const updatedData = data.map(item => {
          return { ...item, connected: false};
         });
        setData(updatedData);
    }
    const connectedDevices = data.filter(device => device.connected === true);
    const availableDevices = data.filter(device => device.connected === false);
    setConnectedDevices(connectedDevices);
    setAvailableDevices(availableDevices);
    
  };

  


  useEffect(() => {
   
        getCurrentSSID(); // Initial fetch
        const intervalId = setInterval(getCurrentSSID, 1000); // Fetch every 5 seconds
       
        return () => clearInterval(intervalId); // Cleanup interval on unmount
      }

  , []);
  //------------------------------------------------------------------------------------------

  const toggleDevice = (deviceId) => {
    // Delayed toggle
    setTimeout(() => {
      setData(prevData => prevData.map(device => {
        if (device.key === deviceId) {
          setModalConnnected(true);
          return { ...device, connected: !device.connected };
        }
        return device;
      }));
    }, 2000); // Adjust the delay time as needed
  };

  const handleItemPress = (deviceId, connected) => {
    if (!connected) {
      openWifiSettings();
      // setModalVisible(true);

      toggleDevice(deviceId);
      
    }
  };

  const handleItemPress2 = (deviceId, connected) => {
    if (connected) {
      openWifiSettings(); 
    }
  };

  const receiveVariableFromDeviceCard = (variable) => {
    setSwitchValue(variable);
  }

  const handleItemLongPress = (deviceId, connected) => {
    if (connected && switchValue ) {
      setModalVisible2(true);
    }
  };

  
  // Function to handle closing of the second modal
  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

   //wifi alert function
  const openWifiSettings = async () => {
    try {
      if (Platform.OS === 'android') {
        // Provide instructions to open settings manually
        alert('To manage Wi-Fi settings, go to Settings > Network & Internet > Wi-Fi');
      } else if (Platform.OS === 'ios') {
        await Linking.openURL('App-Prefs:root=WIFI');
      }
    } catch (error) {
      console.error('Error opening Wi-Fi settings:', error);
    }
  };
  
 
  return (
    <View>

      {connectedDevices.length > 0 && (
        <View>
          <Text style={[tw`ml-3 text-18px mb-5 mt-7 pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey }]}> Connected </Text>
          <FlatList
            data={connectedDevices}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress2(item.key, item.connected)}>
              <DeviceCard
              name={item.name}
              connect={item.connected}
              sendVariableToFlat={receiveVariableFromDeviceCard}
              switchValue={switchValue}
              />
              </TouchableOpacity>
            )}
            numColumns={1}
            
          />
        </View>
      )}
      {availableDevices.length > 0 && (
        <View>
          <Text style={[tw`ml-3 text-18px mb-5 mt-7  pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey }]}> Devices available </Text>
          <FlatList
            data={availableDevices}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress(item.key, item.connected)}>
              <DeviceCard
               name={item.name}
               connect={item.connected}
               sendVariableToFlat={receiveVariableFromDeviceCard}
               switchValue={switchValue}
              />
                
              </TouchableOpacity>
            )}
            numColumns={1}
            
          />
        </View>
      )}

      {data.length === 0 && (
        <View style={tw `flex items-center`}>
          <Text style={[tw` text-18px mt-10 `, { fontFamily: 'Inter-Regular', color: colors.maingrey }]}> no device available ...</Text>
        </View>
      )}
       
      <Modal2 isVisible={modalVisible2} onClose={handleCloseModal2} />

      <ConnectModal isVisible={modalVisible} isConnected={modalConnected}/>

    </View>
  );
}
