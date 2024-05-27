import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import HelpScreen from "../screens/HelpScreen";
import SmartSwitchScreen from "../screens/SmartSwitchScreen";
import tw from "twrnc";
import { colors } from "../theme/constants";
import HomeIcon from "../assets/svgs/homeIcon";
import Smartswitch from "../assets/svgs/smartswitch";
import Help from "../assets/svgs/help";
import AddDevice from "../assets/svgs/addDevice";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LaunchScreen from "../screens/LaunchScreen";
const Tab = createBottomTabNavigator();
const screenOptions = {
	headerShown: false,
	tabBarShowLabel: false,
	tabBarStyle: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 62,
		backgroundColor: "#fff",
		padding: 6,
	},
};
const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen
			name="HomeScreen"
			component={HomeScreen}
			options={{ headerShown: false }}
		/>
		<HomeStack.Screen
			name="AddDeviceScreen"
			component={ChangePasswordScreen}
			options={{ headerShown: false, tabBarVisible: false }} // Hide the tab bar for this screen
		/>
		<HomeStack.Screen
			name="SmartSwitchScreen"
			component={SmartSwitchScreen}
			options={{ headerShown: false, tabBarVisible: false }}
		/>
	</HomeStack.Navigator>
);

export default function AppNavigation() {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen name="Home"
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center"}}>
							<HomeIcon />
							<Text style={{ fontSize: 11, color: focused ? colors.maingreen : colors.maingrey, paddingBottom: 5}}>
								Home
							</Text>
						</View>
					),
					tabBarLabelStyle: { color: colors.navigation },
			}}/>
			<Tab.Screen name="Help"
				component={HelpScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center"}}>
							<Help />
							<Text style={{ fontSize: 11, color: focused ? colors.maingreen : colors.maingrey, paddingBottom: 10 }} >
								Help
							</Text>
						</View>
					),
					tabBarLabelStyle: { color: colors.navigation }, // Set text color
			}}/>
		</Tab.Navigator>
	);
}
