import React, { useState, useEffect } from 'react';
import { View, Text, Modal, ActivityIndicator , TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/constants';
export default function Modal2({ isVisible }) {
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
              <View style={ tw `flex justify-center items-center`}>
                
                <Text style={[tw `text-18px my-5 `, {fontFamily:'Inter-Regular' , color:colors.maingrey}]}>Change network’s Credentials ?</Text>
                <View style={[tw `flex flex-row justify-between`]}>
                <TouchableOpacity   onPress={onClose} style={[tw ` items-center m-2 h-10 w-[100px] rounded-3 shadow-lg  `,
                  {backgroundColor: colors.maingreen }]}>
                      <Text style={[tw `text-20px `,{fontFamily:'Inter-Regular', color:'#fff' }]}>
                        yes
                      </Text>
                 </TouchableOpacity>
                 <TouchableOpacity   onPress={onClose} style={[tw ` items-center m-2 h-10 w-[100px] rounded-3 shadow-lg  `,
                  {backgroundColor: colors.maingrey }]}>
                      <Text style={[tw `text-20px `,{fontFamily:'Inter-Regular', color:'#fff' }]}>
                        no
                      </Text>
                 </TouchableOpacity>
                </View>
               
              </View>
              
        
        </View>
      </View>
    </Modal>
  );
}
