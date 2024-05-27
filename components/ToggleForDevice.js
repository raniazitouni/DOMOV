import React from 'react';
import { Switch, View, Text } from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/constants';

const ToggleForDevice = ({ switchValue, handleControlLed, device, connected }) => {
  const toggleSwitch = async (value) => {
    const action = value ? 'on' : 'off';
    try {
      await handleControlLed(device, action);
    } catch (error) {
      console.error(`Error controlling LED ${device}:`, error);
    }
  };

  return (
    <View style={tw`flex-row justify-between items-center`}>
      <Text style={[{ color: switchValue ? '#fff' : 'rgba(60, 60, 67, 0.30)', fontFamily: 'Inter-Regular' }, tw`text-18px mx-2`]}>
        {switchValue ? 'ON' : 'OFF'}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={switchValue}
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
      />
    </View>
  );
};

export default ToggleForDevice;
