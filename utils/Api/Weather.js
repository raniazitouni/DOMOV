import axios from 'axios'
import { apiKey } from '../../theme/constants'
//fetching the weather api 
const forecastnfpoint = params =>`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.region}&${params.days}=1&aqi=no&alerts=no`

const apiCall = async (endpoint)=>{
    const options ={
        method : 'GET',
        url:endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error : ',err);
        return null;
    }

}

export const fetchWeatherForecast = params =>{
    return apiCall(forecastnfpoint(params));
}