import React from "react";
import Titles from "./componets/Titles";
import Form from "./componets/Form";
import Weather from "./componets/Weather";

const API_KEY = "2bb3812299aed58929d6bdc32c454b96";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    wind: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    if (city === data.name && country === data.sys.country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        wind: undefined,
        error: "Podaj poprawne wartości!!!"
      });
    }
  }
  render() {

    const { temperature, city, country, humidity, pressure, wind, error} = this.state;

    return (
      <div>
        <div className="wrapper">
          <Titles/>
          <Form getWeather={this.getWeather}/>
          <Weather
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          pressure={pressure}
          wind={wind}
          error={error}
        />
        </div>
    </div>
  );
  }
};
export default App;
