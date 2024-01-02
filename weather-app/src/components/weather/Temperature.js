import React, { useEffect, useState } from 'react'
import './style.css'
const Temperature = () => {
  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6db9ee1c6fe458d2bbcab1cd7a6e1cc4`
      
      let res = await fetch(url);
      let data = await res.json();    
      console.log(data);

      // const {temp} = data.main;
      // console.log(temp);

      const { temp, humidity, pressure } = data.main;
      console.log(temp);
      
      const { main:weathermood} = data.weather[0];
      const { name} = data;
      const { speed} = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp, humidity, pressure, weathermood, name, speed, country, sunset,
      };

      setTempInfo(myNewWeatherInfo);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {getWeatherInfo();}, []);
  

  return (
    <>
    <div className="wrap">
      <div className="search">
        <input type="search" 
        placeholder='search ... '
        autoFocus
        id="search"
        className="searchTerm" 
        value = {searchValue }
        onChange = {(e)=>setSearchValue(e.target.value)}/>
        
        <button className='searchButton' type="button" onClick={getWeatherInfo}>Search</button>
      </div>
    </div>

    <article className='widget'>
      <div className="weatherIcon">
        <i className={"wi wi-day-sunny"}></i>
      </div>

      <div className="weatherInfo">
        <div className="temperature">
          <span>25.5 &deg;</span>
        </div>

        <div className="description">
          <div className="weatherCondition">sunny</div>

          <div className="place">Delhi, India</div>
        </div>
      </div>

      <div className="date">{new Date().toLocaleString()}</div>

      <div className="extra-temp">
        <div className="temp-info-minmax">

          <div className="two-sided-section">
            <p><i className={'wi wi-sunset'}></i></p>
            <p className = "extra-info-leftside">19:19 PM<br/>Sunset</p>
          </div>
          
          <div className="two-sided-section">
            <p><i className={'wi wi-humidity'}></i></p>
            <p className = "extra-info-leftside">19:19 PM<br/>Humidity</p>
          </div>

          <div className="two-sided-section">
            <p><i className={'wi wi-rain'}></i></p>
            <p className = "extra-info-leftside">19:19 PM<br/>Pressure</p>
          </div>
        
{/* 
        <div className="weather-extra-info"> */}
          <div className="two-sided-section">
              <p><i className={'wi wi-strong-wind'}></i></p>
              <p className = "extra-info-leftside">19:19 PM<br/>Speed</p>
          </div>
          </div>{/* </div> */}
      </div>
    </article>
    </>
  )
}

export default Temperature