import React, { useState } from 'react'
import Proptypes from 'prop-types'
import Error from './Error'

const Form = ({ countries, search, saveSearch, saveFetchApiWeather }) => {

    const [error, saveError] = useState(false)
    const { country, city } = search;

    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if (city.trim() === '' || country.trim() === '') {
            saveError(true);
            return;
        }
        //pasar al componente principal
        saveFetchApiWeather(true)
        saveError(false);
    }

    let countriesList = countries.length > 0
        && countries.map((country, i) => (
            <option key={i} defaultValue={country.alpha2Code}>{country.name}</option>
        ))
    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error message="All fields are required" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    defaultValue={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    className="browser-default"
                    name="country"
                    id="country"
                    onChange={handleChange}
                >
                    <option defaultChecked>-- Select country--</option>
                    {countriesList}
                </select>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search weather"
                    className="waves-effect waves-light btn-large btn-block text-white"
                />
            </div>
        </form>
    );
};
Form.protTypes = {
    countries: Proptypes.object.isRequired,
    search: Proptypes.object.isRequired,
    saveSearch: Proptypes.func.isRequired,
    saveFetchApiWeather: Proptypes.func.isRequired
}
export default Form;
