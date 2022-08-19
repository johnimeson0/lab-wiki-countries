import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CountriesList(props) {

    const [countries, setCountries] = useState(props.countries);

    useEffect (() => {
        setCountries(props.countries);

    }, [props.countries]);

    return (
        <div>
        {countries.map((el) => {
            return (
                <div key={el.id} className="countriesList">
                    <h2>CountriesList</h2> 
                    <Link to={`/countries/${el._id}`}>
                        <h3>{el.name.common}</h3>
                            </Link>
                                 <p>{el.name.common.alpha3code}</p>
                </div>
            );
        })}
        </div>
      );
    }

export default CountriesList