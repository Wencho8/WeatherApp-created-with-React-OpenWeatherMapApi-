import WeatherView from "./Components/WeatherView";
import coldPhoto from "./assets/ColdPhoto.jpg";
import hotPhoto from "./assets/HotPhoto.jpg";
import rainPhoto from "./assets/rain.jpg";
import { useState } from "react";

function App() {

  const [photo, setPhoto] = useState(hotPhoto);

  const backgroundHandler = (weather) => {
    if (weather.main === 'Rain')
     setPhoto(rainPhoto);
     else if (weather.temp >=15)
      setPhoto(hotPhoto);
      else
       setPhoto(coldPhoto);
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${photo})`}}>
      <WeatherView onBackground={backgroundHandler}/>
    </div>
  );
}

export default App;
