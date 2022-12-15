import React, {useState} from "react";
import WeatherData from "./WeatherData";
import classes from "./WeatherView.module.css";



const WeatherView = (props) => {

const [city, setCity] = useState({}); //objeto
const [symbol, setSymbol] =  useState('ºF');


const cityDataHandler = (city) => {
  setCity(city);

  const weather = {
    temp: city.cityTemp,
    main: city.cityMain,
  }
  console.log(weather);
  if (symbol==='ºF') //convierto a celcius para el background
   weather.temp= ((weather.temp - 32) * (5/9));

  console.log(weather);

  props.onBackground(weather);
}

const unitHandler = (symbolAct) => {
  if (symbolAct==='ºF')
    setSymbol('ºC');
    else
    setSymbol('ºF');
}

let content = <></>;
if (JSON.stringify(city) !== '{}')
 {
    content = <>
    <div className={classes.container}>
     <div className={classes.wrapper}>
      <h1>{city.cityName},{city.cityCountry}</h1>
      <h1 className={classes.temperature}>{`${city.cityTemp.toFixed()}`}{symbol}</h1>
     </div>
    </div>

    <div className={classes.dataContainer}>
      <div className={classes.dataWrapper}>
       <label>Feels like</label>
       <h1>{`${city.cityFell.toFixed()}`}{symbol}</h1>
      </div>
      <div className={classes.dataWrapper}>
       <label>Humidity</label>
       <h1>{city.cityHumidity} %</h1>
      </div>
      <div className={classes.dataWrapper}>
       <label>Status</label>
       <h1>{city.cityMain}</h1>
      </div>
    </div>
   </>
 }




    return (
       <>
        <WeatherData symbol={symbol} onUnits={unitHandler} onAddCity={cityDataHandler}/>
        {content}
       </>
      );

}

export default WeatherView;