import { View, Text, TouchableOpacity, Dimensions, Switch } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme/constants.js";
import Card from "../components/Card.js";
import Lock from "../assets/svgs/lock.js";
import Api from "../utils/Api.js";

export default function HomeScreen() {
	const navigation = useNavigation();

	const WIDTH = Dimensions.get("window").width;

	const navigateToChangePasswordScreen = () => {
		navigation.navigate("ChangePasswordScreen");
	};

	const [LightState, setLightState] = useState(0);
	const [GarageDoorState, setGarageDoorState] = useState(0);

	useEffect(() => {
		const fetchLedStates = async () => {
			console.log("GET state");
			await Api.get(`state`).then((response) => {
				const { Light, GarageDoor } = response.data;
				setLightState(Light?1:0);
				setGarageDoorState(GarageDoor?1:0);
				
			}).catch((error) => {
				console.error("Error fetching states:", error);
			});
		};

		fetchLedStates();
		const intervalId = setInterval(fetchLedStates, 5000);
		return () => clearInterval(intervalId);
	}, []);

	const handleControlLed = async (device, action) => {
		await Api.post(`control/${device}/${action}`).then((response) => {
			if (device === "Light") {
				setLightState(action === "on"?1:0);
			} else if (device === "GarageDoor") {
				setGarageDoorState(action === "on"?1:0);
			}
		}).catch((error) => {
			console.error(`Error controlling LED ${device}:`, error);
		});
	};

	return (
		<ScreenWrapper style={[tw`flex-1`, { width: WIDTH }]}>
			<View style={tw`mx-5 flex flex-col `}>
				<View style={[tw`flex-row justify-between items-center mt-5`,]}>
					<Text style={{ fontFamily: "Inter-SemiBold", fontSize: 50 }} >
						Home
					</Text>
					<TouchableOpacity style={tw` flex justify-center items-center relative bg-black w-40px h-40px  bg-gray-100 rounded-full`} onPress={navigateToChangePasswordScreen} >
						<Lock />
					</TouchableOpacity>
				</View>
				<Card />
				<View style={{display:"flex",flexDirection:"column",gap:12}}>
					<Text style={[
							tw`ml-7 mr-50 text-18px border-b `,
							{
								fontFamily: "Inter-Regular",
								color: colors.maingrey,
								borderBottomColor: colors.maingrey,
							},
						]}>
						All scenes
					</Text>
					<View style={tw`flex flex-row justify-between gap-2`}>
						{/* Start Light card */}	
						<View
							style={[
								tw`w-[150px]  mr-1 h-164px border-0 p-3 flex-col justify-between rounded-7 `,
								{
									backgroundColor: LightState
										? colors.maingreen
										: "#fff",
								},
							]}
						>
							<View>
								<Text style={[ tw` text-18px`, {
									fontFamily: "Inter-Medium",
									color: LightState
										? "#fff"
										: colors.maingrey,
								},
								]}>
									Light
								</Text>
								<Text
									style={[
										tw`pl-1 pt-2 text-14px`,
										{
											fontFamily: "Inter-Regular",
											color: LightState
												? "#fff"
												: colors.maingrey,
										},
									]}
								>
									1 Device
								</Text>
							</View>
							<View
								style={tw`flex-row justify-between items-center`}
							>
								<Text
									style={[
										{
											color: LightState
												? "#fff"
												: "rgba(60, 60, 67, 0.30)",
											fontFamily: "Inter-Regular",
										},
										tw`text-18px mx-2`,
									]}
								>
									{LightState ? "ON" : "OFF"}
								</Text>
								<Switch
									trackColor={{
										false: "#767577",
										true: "#767577",
									}}
									thumbColor="#f4f3f4"
									onValueChange={() =>
										handleControlLed(
											"Light",
											LightState ? "off" : "on"
										)
									}
									value={LightState?true:false}
									style={{
										transform: [
											{ scaleX: 1.2 },
											{ scaleY: 1.2 },
										],
									}}
								/>
							</View>
						</View>			
						{/* End Light card */}
						{/* Start Garage card */}
						<View
							style={[
								tw`w-[150px]  mr-1 h-164px border-0 p-3 flex-col justify-between rounded-7 `,
								{
									backgroundColor: GarageDoorState
										? colors.maingreen
										: "#fff",
								},
							]}
						>
							<View>
								<Text
									style={[
										tw` text-18px`,
										{
											fontFamily: "Inter-Medium",
											color: GarageDoorState
												? "#fff"
												: colors.maingrey,
										},
									]}
								>
									Garage Door
								</Text>
								<Text
									style={[
										tw`pl-1 pt-2 text-14px`,
										{
											fontFamily: "Inter-Regular",
											color: GarageDoorState
												? "#fff"
												: colors.maingrey,
										},
									]}
								>
									1 Device
								</Text>
							</View>
							<View>
								<View
									style={tw`flex-row justify-between items-center`}
								>
									<Text
										style={[
											{
												color: GarageDoorState
													? "#fff"
													: "rgba(60, 60, 67, 0.30)",
												fontFamily: "Inter-Regular",
											},
											tw`text-18px mx-2`,
										]}
									>
										{GarageDoorState ? "ON" : "OFF"}
									</Text>
									<Switch
										trackColor={{
											false: "#767577",
											true: "#767577",
										}}
										thumbColor="#f4f3f4"
										onValueChange={() =>
											handleControlLed(
												"GarageDoor",
												GarageDoorState ? "off" : "on"
											)
										}
										value={GarageDoorState?true:false}
										style={{
											transform: [
												{ scaleX: 1.2 },
												{ scaleY: 1.2 },
											],
										}}
									/>
								</View>
							</View>
						</View>
						{/* End Garage card */}
					</View>
				</View>
				<Text
					style={[
						tw` w-full absolute -bottom-30 text-18px text-center`,
						{
							fontFamily: "Inter-Regular",
							color: colors.maingrey,
							borderBottomColor: colors.maingrey,
						},
					]}
				>
					Make sure that you are connected to Domov's network
				</Text>
			</View>
		</ScreenWrapper>
	);
}
