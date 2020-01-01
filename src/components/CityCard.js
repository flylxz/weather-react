import React, { Component } from 'react';
import { WeatherService } from '../services/wether-service';

export class CityCard extends Component {
  weatherService = new WeatherService();

  state = {
    city: null
  };

  componentDidMount() {
    if (!this.state.city) {
      this.getCityWeather('kharkiv');
    }
  }

  getCityWeather = city => {
    this.weatherService
      .getCityWeather(city)
      .then(res => this.setState({ city: res }));
  };

  render() {
    const { city } = this.state;

    if (!city) {
      return <p className='center'>Fetching</p>;
    }

    const {
      name,
      description,
      mainTemp,
      minTemp,
      maxTemp,
      feelsTemp,
      humidity,
      pressure,
      sunrise,
      sunset,
      windDirection,
      windSpeed,
      updateTime,
      icon
    } = city;

    const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const temp = `${~~(mainTemp - 273.15)}\u00b0C`;
    const feelsLikeTemp = `${~~(feelsTemp - 273.15)}\u00b0C`;
    const minMaxTemp = `L ${~~(minTemp - 273.15)}\u00b0C / H ${~~(
      maxTemp - 273.15
    )}\u00b0C`;

    const addZero = i => {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    };

    const transformDate = time => {
      console.log(time);
      let lllll = time.getMinutes();
    };

    const degToCard = deg => {
      if (deg > 11.25 && deg < 33.75) {
        return 'NNE';
      } else if (deg > 33.75 && deg < 56.25) {
        return 'ENE';
      } else if (deg > 56.25 && deg < 78.75) {
        return 'E';
      } else if (deg > 78.75 && deg < 101.25) {
        return 'ESE';
      } else if (deg > 101.25 && deg < 123.75) {
        return 'ESE';
      } else if (deg > 123.75 && deg < 146.25) {
        return 'SE';
      } else if (deg > 146.25 && deg < 168.75) {
        return 'SSE';
      } else if (deg > 168.75 && deg < 191.25) {
        return 'S';
      } else if (deg > 191.25 && deg < 213.75) {
        return 'SSW';
      } else if (deg > 213.75 && deg < 236.25) {
        return 'SW';
      } else if (deg > 236.25 && deg < 258.75) {
        return 'WSW';
      } else if (deg > 258.75 && deg < 281.25) {
        return 'W';
      } else if (deg > 281.25 && deg < 303.75) {
        return 'WNW';
      } else if (deg > 303.75 && deg < 326.25) {
        return 'NW';
      } else if (deg > 326.25 && deg < 348.75) {
        return 'NNW';
      } else {
        return 'N';
      }
    };

    const wind = degToCard(windDirection);

    return (
      <div className='col s12 m7 '>
        <h3 className='header center'>{name}</h3>
        <div className='card horizontal'>
          <div className='center amber lighten-5'>
            <img src={weatherIcon} alt='weather icon' />
            <p>{description}</p>
            <p>{temp}</p>
            <p>{minMaxTemp}</p>
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              <p>Feels like temp: {feelsLikeTemp}</p>
              <p>Humidity: {humidity}%</p>
              <p>Pressure: {~~(pressure / 1.333)}mmHg</p>
              <p>Sunrise: {sunrise}</p>
              <p>Sunset: {sunset}</p>
              <p>
                Wind: {windSpeed}m/s {wind}
              </p>
              <p className='right'>Updated:{updateTime}</p>
            </div>
            <div className='card-action'>
              <a href='#'>Forecast</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
