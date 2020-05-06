import React from 'react'
import Country from "../Country/Country";

const CountryGrid = props => {
    return (
        <div>
            <ul>
                {props.countries.map(country => (
                    <div key={country.alpha3Code} style={{ padding: 20 }}>
                        <Country
                            theme={props.theme}
                            flag={country.flag}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    </div>
                ))}
            </ul>
        </div>
    )
};

export default CountryGrid;
