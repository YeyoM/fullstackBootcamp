import {useState} from 'react'

const CountryList = ({countries, newFilter}) => {

    const [showOneCountry, setShowOneCountry] = useState('');

    // tenemos que evaluar si el estado de arriba es true, y en caso de que lo sea,ver el pais que nos marca, lo podemos recuperar del boton supongo

    return (
        <div>
            {
            countries 
            .filter((country) => {
              if (country.name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()) === true){
                return country
              }
            })
            .map((country) => {
              return (
                <div>
                    <h3 key={country.population + country.area}>{country.name.common}</h3>
                    <button>show</button>
                </div>
              )
            }) 
        }
        </div>
    )
}

export default CountryList