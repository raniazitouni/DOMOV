import {View,StatusBar, Platform} from 'react-native'
import React from 'react'
import { colors } from '../theme/constants';


//this component adjusts the views accroding to the screen of the phone 
export default function ScreenWrapper ({children}){
    let statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight : Platform.OS=='ios'? 30 : 0;
    return (
        <View style={{paddingTop:statusBarHeight}}>
            {
            children
            }
        </View>
    )
}