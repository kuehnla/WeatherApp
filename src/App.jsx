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
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [feelsLikeC, setFeelsLikeC] = useState(0);
  const [feelsLikeF, setFeelsLikeF] = useState(0);
  const [windKph, setWindKph] = useState(0);
  const [windMph, setWindMph] = useState(0);

  console.log(cityRegion);
 
  return (
    <div className="app">
      <div className="display">
        <h1>Weather</h1>
        <Input setLocation={setLocation} setIsFetch={setIsFetch} />
        <Controller location={location} isFetch={isFetch} setCityRegion={setCityRegion} setTime={setTime} setCondition={setCondition} setTempC={setTempC}
        setTempF={setTempF} setFeelsLikeC={setFeelsLikeC} setFeelsLikeF={setFeelsLikeF} setWindKph={setWindKph} setWindMph={setWindMph} setIsFetch={setIsFetch} />

      </div>
    </div>
  )
}

export default App