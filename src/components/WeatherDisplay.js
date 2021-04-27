import React from "react"
const WeatherDisplay = ({weather}) => {

    const loaded = () => {
        if(weather.main.temp < 40) {
            return (
    <div className="container">
        <h1 className="city">Showing weather for <span className="result">{weather.name}</span></h1>
        <div className="info" id="coldTemp"><h2><span>Current</span><br/>{weather.main.temp}</h2></div> 
        <div className="info" id="description"><h2><span>Conditions</span><br/>{weather.weather[0].description}</h2></div>
        <div className="info" id="maxTemp"><h2><span>High</span><br/>{weather.main.temp_max}</h2></div>
        <div className="info" id="minTemp"><h2><span>Low</span><br/>{weather.main.temp_min}</h2></div>
    </div>
            )
        } else if(weather.main.temp > 90) {
        return (
        <div className="container">
            <h1 className="city">Showing weather for <span className="result">{weather.name}</span></h1>
            <div className="info" id="hotTemp"><h2><span>Current</span><br/>{weather.main.temp}</h2></div> 
            <div className="info" id="description"><h2><span>Conditions</span><br/>{weather.weather[0].description}</h2></div>
            <div className="info" id="maxTemp"><h2><span>High</span><br/>{weather.main.temp_max}</h2></div>
            <div className="info" id="minTemp"><h2><span>Low</span><br/>{weather.main.temp_min}</h2></div>
        </div>
        )
        } else {
            return (
            
    <div className="container">
        <h1 className="city">Showing weather for <span className="result">{weather.name}</span></h1>
        <div className="info" id="temp"><h2><span>Current</span><br/>{weather.main.temp}</h2></div> 
        <div className="info" id="description"><h2><span>Conditions</span><br/>{weather.weather[0].description}</h2></div>
        <div className="info" id="maxTemp"><h2><span>High</span><br/>{weather.main.temp_max}</h2></div>
        <div className="info" id="minTemp"><h2><span>Low</span><br/>{weather.main.temp_min}</h2></div>
    </div>
        )
            }
        }

    const loading = () => {
        return (
        <>
        <h1>No weather to display. Are you on the moon?</h1>
        <h3>Why not search for a zip code on Earth?</h3>
        <img src="https://cdn.mos.cms.futurecdn.net/veTxszeYVQRAAj2EPyRkJY-1200-80.jpg" alt="moon"/>
        </>
        )
    
    }

    return  weather ? loaded() : loading()
       
    
}
export default WeatherDisplay