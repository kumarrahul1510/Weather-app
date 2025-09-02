import { useState } from 'react'
import './App.css'
import './SearchBox'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp: 25.01,
        tempMIn: 25.01, 
        tempMax: 25.01, 
        humidity: 90, 
        feelsLike: 25.92,
        weather:"overcast clouds"

    }
    )
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
    <>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </>
    )
    
}