import React from "react";


class Weather extends React.Component {
  render() {

    const {city,country, temperature, humidity, pressure, wind, error} = this.props;

    return(
      <div>
        {city && country && <p><span className="blue-bold">Lokalizacja:</span> { city } { country }</p>}
        {temperature && <p><span className="blue-bold">Temperatura:</span> { temperature } °C</p>}
        {humidity && <p><span className="blue-bold">Wilgotność:</span> { humidity } %</p>}
        {pressure && <p><span className="blue-bold">Ciśnienie:</span> { pressure } hPA</p>}
        {wind && <p><span className="blue-bold">Wiatr:</span> { wind } m/s</p>}
        {error && <p><span className="blue-bold"> { error }</span></p>}
      </div>
    );
  }
}

export default Weather;
