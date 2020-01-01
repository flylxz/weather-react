export class WeatherService {
  _apiBase = 'https://api.openweathermap.org/data/2.5';
  _id = 'appid=80bf5476c9bea351e5b4fe6bad407d71';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}&${this._id}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch OpenWeather server, recived ${res.status}`
      );
    }
    return await res.json();
  };

  getCityWeather = async city => {
    const cityWeather = await this.getResource(`/weather?q=${city}`);
    console.log(cityWeather);
    return this._transformCityWeather(cityWeather);
  };

  _transformCityWeather = cityWeather => {
    return {
      name: cityWeather.name,
      mainTemp: cityWeather.main.temp,
      feelsTemp: cityWeather.main.feels_like,
      maxTemp: cityWeather.main.temp_max,
      minTemp: cityWeather.main.temp_min,
      pressure: cityWeather.main.pressure,
      humidity: cityWeather.main.humidity,
      description: cityWeather.weather['0'].main,
      icon: cityWeather.weather['0'].icon,
      windSpeed: cityWeather.wind.speed,
      windDirection: cityWeather.wind.deg,
      sunrise: cityWeather.sys.sunrise,
      sunset: cityWeather.sys.sunset,
      updateTime: cityWeather.dt
    };
  };
}
