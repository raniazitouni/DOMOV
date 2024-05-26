import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { loadFonts } from '../theme/constants.js';
import { fetchWeatherForecast } from '../utils/Api/Weather.js';
import * as Location from 'expo-location';
import tw from 'twrnc';
import { colors } from '../theme/constants';

// this component represents the card that has the necessary information : location and weather
const Card = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      if (addressResponse.length > 0) {
        setAddress(addressResponse[0]);
      }
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = `${address.region}, ${address.country}`;
  }

  useEffect(() => {
    if (address) {
      fetchWeatherForecast({
        region: address.region,
        days: '7'
      }).then(data => {
        setWeather(data);
      });
    }
  }, [address]);

  const fontsLoaded = loadFonts();
  
  if (!fontsLoaded) {
   return undefined;
  }

  return (
    <LinearGradient
      colors={[colors.grdgreen, colors.grdgrey]}
      start={{ x: 0, y: 0 }} // Start from the left edge
      end={{ x: 1, y: 1 }}   // End at the right edge
      style={tw`flex flex-row flex-grow justify-between px-5 py-3 rounded-7 my-5 mt-7 h-32 border-0`}
    >
      <View style={tw`flex-col justify-between`}>
        <View>
          <Text style={{ fontFamily: 'Inter-Bold', fontSize: 25, color: '#fff' }}>My Location</Text>
          <Text style={[tw`text-13px`, { fontFamily: 'Inter-Regular', color: colors.extralightgrey }]}>{text}</Text>
        </View>
        <Text style={[tw`text-13px`, { fontFamily: 'Inter-Regular', color: colors.extralightgrey }]}>{weather?.current?.condition?.text}</Text>
      </View>
      <View style={tw`h-full`}>
        <Text style={{ fontFamily: 'Inter-Regular', color: '#fff', fontSize: 50, paddingTop: 15 }}>{weather?.current?.temp_c}°</Text>
      </View>
    </LinearGradient>
  );
};

export default Card;
