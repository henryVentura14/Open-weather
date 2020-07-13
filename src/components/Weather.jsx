import React from 'react';
import Proptypes from 'prop-types'

const Weather = ({ result }) => {
    const { name, main } = result;
    if (!name) return null;
    const kelvin = 273.15;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather in {name} is: </h2>
                <p className="temp">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)}<span>&#x2103;</span>
                </p>
                <p>Maximum Temperature :
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}<span>&#x2103;</span>
                </p>
                <p>Minimum Temperature :
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}<span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
};
Weather.protTypes = {
    result: Proptypes.object.isRequired
}
export default Weather;