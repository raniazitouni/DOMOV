import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { loadFonts } from '../theme/constants.js';

const Select= () => {
  const [selected, setSelected] = useState("");
  
  const data = [
    {key:'1', value:'Domov', disabled:true},
    {key:'2', value:'Switch 1 '},
    {key:'3', value:'Switch 2 '},
    {key:'3', value:'Switch 3 '},
 
  ];

  return(
    <SelectList 
      setSelected={(val) => setSelected(val)} 
      data={data} 
      save="value"
      boxStyles={{
        width: 280,
        height: 47,
        alignItems :'center', 
        backgroundColor: "white",
        borderColor: 0,
        borderRadius: 15, // Set border radius to 15px
        paddingLeft:23, // Set padding to 23px
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
       
      }}
      inputStyles={{
        fontFamily:'Inter-Regular',
        fontSize:16,
        alignItems:'center'
      }}
       
      dropdownTextStyles={{
        fontFamily:'Inter-Regular',
        fontSize:16,
      }

      }
      dropdownStyles={{
        
        backgroundColor: "white",
        borderColor: 0,
        borderRadius: 15,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
       

      }}
      search={false}
      placeholder="Choose Device"  
    />
  );
};

export default Select;



 //ki diri les bouttons add the function tae 
//the placeholder y3wd ywli l choose device
//add the fade in transition and the color chnage to the border 
//and the icon turns up 