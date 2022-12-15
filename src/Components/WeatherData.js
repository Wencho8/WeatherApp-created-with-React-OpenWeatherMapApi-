import React, { useRef } from 'react';
import classes from "./WeatherData.module.css"



const WeatherData =  (props) => {


const city = useRef('');    

const submitHandler = async (event) => {
 event.preventDefault();

 const ApiKey = '31793a9a51659128d6d3e027af3b0815';  
 let units='';

 if (props.symbol==='ºF')
   units='imperial';
   else
   units='metric';


 const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=${ApiKey}&units=${units}`;

 const data = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);


    const cityData =  {
        cityName: data.name,
        cityTemp: data.main.temp,
        cityFell: data.main.feels_like,
        cityCountry: data.sys.country,
        cityHumidity: data.main.humidity,
        cityMain: data.weather[0].main,   //era un array weather
      } ;

      props.onAddCity(cityData); 
  }

  const handleUnitsClick = (event) => {
    const button = event.currentTarget;
    const currentUnit = button.innerText;


    props.onUnits(currentUnit);
    };

   

   return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={classes.wrapper}>
         <div className={classes.labelInput}> 
          <label htmlFor='title'>Insert city</label>
          <button onClick={handleUnitsClick}>{props.symbol}</button>
         </div>
         <input type='text' id='title' ref={city} />
         <button>Search</button>
        </div>
      </div>
    </form>
  );  
}


export default WeatherData;