import main from '../public/main.svg'
import pin from '../public/pin.svg'
import { useState } from 'react'
import './App.css'
import Input from './Input.jsx'
import Controller from './Controller.jsx'

function App() {

  const [isFetch, setIsFetch] = useState(true);
  const [location, setLocation] = useState("milwaukee");

  const [cityRegion, setCityRegion] = useState("");
  const [time, setTime] = useState("");
  const [condition, setCondition] = useState("");
  const [condIcon, setCondIcon] = useState("");
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [feelsLikeC, setFeelsLikeC] = useState(0);
  const [feelsLikeF, setFeelsLikeF] = useState(0);
  const [windKph, setWindKph] = useState(0);
  const [windMph, setWindMph] = useState(0);

  const[isMetric, setIsMetric] = useState(false);

  console.log(cityRegion);

  return (

    <div className="app">
      <Controller location={location} isFetch={isFetch} setCityRegion={setCityRegion} setTime={setTime} setCondition={setCondition} setTempC={setTempC} setCondIcon={setCondIcon}
        setTempF={setTempF} setFeelsLikeC={setFeelsLikeC} setFeelsLikeF={setFeelsLikeF} setWindKph={setWindKph} setWindMph={setWindMph} setIsFetch={setIsFetch} />
      <div className="display">
        <div className="header">
          <img src={main} id="main" />
          <h1>Weather</h1>
        </div>
        <div className="inputContainer">
          <img src={pin} id="pin" />
          <Input setLocation={setLocation} setIsFetch={setIsFetch} />
        </div>
        <h2>{cityRegion}</h2>
        <div className="condition">
          <h3>{condition}</h3>
          <img src={condIcon} id="condIcon" />
        </div>
      </div>
    </div>
  )
}

export default App