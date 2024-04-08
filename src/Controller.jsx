export default function Controller({ states, input }) {
  fetch('https://api.weatherapi.com/v1/current.json?key=14be6af200c2423789f164103240204&q=milwaukee', {mode : 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    process(response);
  })

  function process(res) {
    const cityRegion = res.location.name + ", " + res.location.region;
    const time = new Date(res.location.localtime);
    const condition = res.current.condition;
    console.log(time);
  }
}

/*
    console.log(response.location.name);
    console.log(response.location.region);
    console.log(response.location.localtime);
    console.log(response.current.condition);
    console.log(response.current.temp_c);
    console.log(response.current.temp_f);
    console.log(response.current.feelslike_c);
    console.log(response.current.feelslike_f);
    console.log(response.current.wind_mph);
    console.log(response.current.wind_kph);
*/