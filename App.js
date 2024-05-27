import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './screens/LaunchScreen';

export default function App() {
const Stack = createStackNavigator();

  return (

    <NavigationContainer>
       <Stack.Navigator initialRouteName="LaunchScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="HomeScreen" component={AppNavigation} />
      </Stack.Navigator>
       {/* <LaunchScreen/>
      <AppNavigation />   */}
    </NavigationContainer>
  )
   
}



