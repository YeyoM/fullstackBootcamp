import {useState} from 'react'
import OneCountry from './OneCountry'

const CountryList = ({countries, newFilter}) => {

    const [showOneCountry, setShowOneCountry] = useState(false);
    const [countryToShow, setCountryToShow] = useState('');

    // tenemos que evaluar si el estado de arriba es true, y en caso de que lo sea,ver el pais que nos marca, lo podemos recuperar del boton supongo

    const handleOneCountry = (event) => {
        const countryBtn = event.target.innerHTML.slice(5);
        setShowOneCountry(true);
        setCountryToShow(countryBtn);
    }

    return (
        <div>
            {
                showOneCountry 
                ? countries
                .filter((country) => {
                  if (country.name.common.toLowerCase() === countryToShow.toLowerCase()){
                    return country
                  }
                })
                .map((country) => {
                  return (
                    <div key={country.population + country.area}>
                      <h3>{country.name.common}</h3>
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
                    </div>
                  )
                })
                : countries 
                .filter((country) => {
                  if (country.name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()) === true){
                    return country
                  }
                })
                .map((country) => {
                  return (
                    <div>
                        <h3 key={country.population + country.area}>{country.name.common}</h3>
                        <button onClick={handleOneCountry} key={country.name.common}>show {country.name.common}</button>
                    </div>
                  )
                }) 
            }
        </div>
    )
}

export default CountryList