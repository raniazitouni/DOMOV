import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import ToggleForDevice from './ToggleForDevice';
import { loadFonts } from '../theme/constants';
import { colors } from '../theme/constants';
import Togglecontainer from './Togglecontainer';
import { useState } from 'react';

const ToggleCard = ({ name, devices ,  switchState , switchFunction}) => {
  
  return (
    <Togglecontainer switchValue={switchState} name={name} devices={devices}>
        <ToggleForDevice switchValue={switchState} handleControlLed={switchFunction} name={name} />
    </Togglecontainer>
    
  );
};

export default ToggleCard;