import {useFonts} from 'expo-font'

export const colors = {
    navigation : '#727B7A' , 
    mainbg :'#D9D9D9', 
    maingreen : '#58E3B0',
    maingrey : '#84908F',
    grdgreen: '#4AC296',
    grdgrey: '#C0C4C4',
    lightgrey: '#3C3C43',
    greybtn:' #606766',
    extralightgrey : '#EBEBF5'
    

}



export const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    'Roboto' : require('../assets/fonts/Roboto-Medium.ttf'),
    'Inter-Extralight' :  require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-thin' :  require('../assets/fonts/Inter-Thin.ttf'),
    'Inter-Regular' :  require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold' :  require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-light' : require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Black' : require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold' :require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold' : require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Medium' :  require('../assets/fonts/Inter-Medium.ttf'),
  });

  return fontsLoaded;
};


//the endpoint of the weather api 
export const apiKey = 'cece9adfa8ee480b832130219240703';