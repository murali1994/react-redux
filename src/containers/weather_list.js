import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps, "temps");
    const pressures = cityData.list.map(weather => weather.main.pressure);
    console.log(pressures, "pressures");
    const humidities = cityData.list.map(weather => weather.main.humidity);
    console.log(humidities, "humidities");
    const { lon, lat } = cityData.city.coord;
    console.log(lon, lat, "lon", "lat");
    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td> <Chart data={pressures} color="black" units="hPa" /> </td>
        <td> <Chart data={humidities} color="red" units="%" /> </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
