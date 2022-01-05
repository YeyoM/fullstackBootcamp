import axios from 'axios'
import { useState, useEffect } from 'react'

const OneCountry = ({countries, newFilter}) => {

  const [weather, setWeather] = useState([]);
  const [weatherLoad, setWeatherLoad] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  let country

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name.common.toLowerCase().includes(newFilter.toLowerCase()) === true) {
      country = countries[i].name.common
    }
  }

  console.log(weather)

  useEffect(() => {
    setWeatherLoad(true)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`)
    .then(response => {
      const {data} = response;
      setWeather(data);
      setWeatherLoad(false)
      console.log('listo');
    })
    .catch(err => console.error(err));
  }, [country, apiKey]);

  console.log(weather)

    return (
        <div>
            {
              weatherLoad
              ? 'Cargando...'
              :
                countries
                .filter((country) => {
                  if (country.name.common.toLowerCase().includes(newFilter.toLowerCase()) === true){
                    return country
                  }
                })
                .map((country) => {
                  return (
                    <div key={country.population + country.area}>
                      <p>Capital:    {country.capital}</p>
                      <p>Population: {country.population}</p>
                      <h4>Languages</h4>
                        {
                          Object.values(country.languages).map((lang) => {
                            return (
                                <p>{lang}</p>
                            )
                          })
                        }
                      <img src={country.flags.png} alt="Flag" />
                      <h4>Weather in {country.capital}</h4>
                      <p><strong>Weather-like:</strong> {weather.weather[0].description}</p>
                      <p><strong>Temperature: </strong> {Math.round(weather.main.temp - 273)}°C</p>
                      <p><strong>Wind: </strong> {weather.wind.speed}mph </p>
                    </div>
                  )
                })
            }
        </div>
    )
}

export default OneCountry