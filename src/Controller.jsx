// https://api.weatherapi.com/v1/current.json?key=14be6af200c2423789f164103240204&q=dfdfdf

export default function Controller(
  { location, isFetch, setCityRegion, setTime, setCondition, setTempC,
    setTempF, setFeelsLikeC, setFeelsLikeF, setWindKph, setWindMph, setIsFetch }
) {
  if (!isFetch) return;

  const call = "https://api.weatherapi.com/v1/current.json?key=14be6af200c2423789f164103240204&q=" + location;

  request();

  async function request() {
    try {
      const resp = await fetch(call, {mode: 'cors'});

      if (!resp.ok) throw new Error("bad request");
      
      const data = await resp.json();
      process(data);
    } catch (e) {
      console.log(e);
    }
  }

  function process(res) {
    
    setCityRegion(res.location.name + ", " + res.location.region);
    setTime(new Date(res.location.localtime).toLocaleTimeString());
    setCondition(res.current.condition);
    setTempC(res.current.temp_c);
    setTempF(res.current.temp_f);
    setFeelsLikeC(res.current.feelslike_c);
    setFeelsLikeF(res.current.feelslike_f);
    setWindKph(res.current.wind_kph);
    setWindMph(res.current.wind_mph);
    setIsFetch(false);
  }
}