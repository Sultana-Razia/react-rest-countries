import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { area, region, population, flags, name } = props.country
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;