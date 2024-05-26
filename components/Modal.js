import React, { useState, useEffect } from 'react';
import { View, Text, Modal, ActivityIndicator , TouchableOpacity} from 'react-native';
import Checked from '../assets/svgs/checked';
import tw from 'twrnc';

import { Button } from 'react-native';
import { colors } from '../theme/constants';


//this component represents a modal that shows up when the smart switch is connected 
export default function ConnectModal({ isVisible , isConnected }) {
  const [modalVisible, setModalVisible] = useState(isVisible);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  const onClose =()=>{
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={tw `bg-white p-10 rounded-7`}>
          {isConnected ? (
            
              <View style={ tw `flex justify-center items-center`}>
                <Checked/>
                <Text style={[tw `text-18px my-5 `, {fontFamily:'Inter-Regular' , color:colors.maingrey}]}>Connected successfully !</Text>
                <TouchableOpacity   onPress={onClose} style={[tw `flex justify-center items-center m-2 h-10 w-[150px] rounded-3 shadow-lg  `,
                  {backgroundColor: colors.maingreen }]}>
                      <Text style={[tw `text-20px `,{fontFamily:'Inter-Regular', color:'#fff' }]}>
                        Continue 
                      </Text>
                 </TouchableOpacity>
              </View>
              
            
          ) : (
            <View style={tw `pb-5 px-5`}>
              <Text style={[tw `text-18px m-5 `, {fontFamily:'Inter-Regular' , color:colors.maingrey}]}>Connecting...</Text>
              <ActivityIndicator size="large" color={colors.maingreen} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
