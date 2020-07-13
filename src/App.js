import React, { useState, useEffect, Fragment } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import Error from './components/Error'

const App = () => {
  const [countries, saveCountries] = useState({})
  const [search, saveSearch] = useState({
    city: '',
    country: ''
  })
  const [fetchApiWeather, saveFetchApiWeather] = useState(false)
  const [error, saveError] = useState(false)

  const [result, saveResult] = useState({})

  const { city, country } = search
  // Cargar una frase
  useEffect(() => {
    const fecthWeather = async () => {
      if (fetchApiWeather) {
        const appId = '' //your api key open weather
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

        const res = await fetch(url)
        const result = await res.json()

        saveResult(result)
        saveFetchApiWeather(false)

        //Detecta si hubo resultados correctos en la consulta
        if (result.cod === '404') {
          saveError(true)
        } else {
          saveError(false)
        }
      }
    }
    fecthWeather()

    const fetchCountry = async () => {
      const api = await fetch('https://restcountries.eu/rest/v2/all')
      const countriesApi = await api.json()
      saveCountries(countriesApi)
    }
    fetchCountry()
    // eslint-disable-next-line
  }, [fetchApiWeather])

  let component
  if (error) {
    component = <Error message='No results' />
  } else {
    component = <Weather result={result} />
  }

  return (
    <Fragment>
      <Header title='Weather' />
      <div className='content-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                countries={countries}
                search={search}
                saveSearch={saveSearch}
                saveFetchApiWeather={saveFetchApiWeather}
              />
            </div>
            <div className='col m6 s12'>{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
