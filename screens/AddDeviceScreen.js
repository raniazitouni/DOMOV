import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import tw from 'twrnc';
import { colors } from '../theme/constants';
import Logo from '../assets/svgs/logo';


//Change credentials screen 
const ChangeCredentialsScreen = () => {
  const [newSsid, setNewSsid] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateCredentials = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('http://192.168.4.1/update_credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ssid: newSsid,
          password: newPassword,
        }),
      });

      setIsLoading(false);

      if (response.ok) {
        Alert.alert('Credentials Updated', 'Credentials updated successfully');
      } else {
        const responseBody = await response.text();
        console.log('HTTP Error Status:', response.status);
        console.log('HTTP Error Body:', responseBody);

        // Check if the error is due to being disconnected from ESP32 network
        if (response.status === 404) {
          // Assume 404 means not found (e.g., disconnected from network)
          console.log('Disconnected from ESP32 network');
          Alert.alert('Credentials Updated', 'Credentials updated successfully');
          // Handle this scenario gracefully without showing an error to the user
          return;
        }

        Alert.alert('Error', `Failed to update credentials. Server response: ${responseBody}`);
      }
      
    } catch (error) {
      setIsLoading(false);

      // Ignore network errors without displaying an error message
      if (error.name === 'FetchError' || error instanceof TypeError) {
      
        console.log('Network error occurred:', error.message);
        return;
      }

      console.error('Error updating credentials:', error);

      // Display a generic error message for other types of errors
      Alert.alert('Error', 'An error occurred while updating credentials');
    }
  };

  // Function to check if the password is valid (more than 8 characters)
  const isPasswordValid = (password) => {
    return password.length > 8;
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={tw `mx-5 flex flex-col`}>
          <View style={tw `flex items-center m-15`}>
            <Logo/>
          </View>
          <Text style={[tw`ml-3 text-18px mb-5 mt-7 pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey }]}>Change network’s credentials : </Text>
          <View style={[tw`m-3`]}>
            <TextInput
              style={styles.input}
              placeholder="New network name"
              onChangeText={(text) => setNewSsid(text)}
              value={newSsid}
            />

            <TextInput
              style={styles.input}
              placeholder="New Password"
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
              secureTextEntry
            />

            {isLoading && <ActivityIndicator style={styles.loader} size="small" color="#58E3B0" />}
            
            <View style={styles.views}>
              <TouchableOpacity
                style={[styles.updateButton, !isPasswordValid(newPassword) && { backgroundColor: '#C0C0C0' }]}
                onPress={handleUpdateCredentials}
                disabled={isLoading || !isPasswordValid(newPassword)}
              >
                <Text style={styles.buttonText}>Apply Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}  

const styles = StyleSheet.create({
  input: {
    height: 55,
    width: '100%',
    borderRadius: 10,
    borderColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  updateButton: {
    height: 40,
    width: 150,
    backgroundColor: '#58E3B0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  loader: {
    marginTop: 20,
  },

  views: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChangeCredentialsScreen;
