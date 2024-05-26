import { useState, useEffect } from 'react';
import Device from './Device';
import ToggleSwitch from './ToggleSwitch';


//this component has the toggle that turns on and off the smart switch network 

export default function DeviceCard({ name, connect, sendVariableToFlat, switchValue }) {
  const [switchState, setSwitchState] = useState(false);

  // Update switchState when the switchValue prop changes
  useEffect(() => {
    setSwitchState(switchValue);
  }, [switchValue]);

  const toggleSwitch = (value) => {
    setSwitchState(value);
    sendVariableToFlat(value);
  };

  return (
    <Device switchValue={switchState} name={name}>
      <ToggleSwitch switchValue={switchState} toggleSwitch={toggleSwitch} connected={connect} />
    </Device>
  );
}