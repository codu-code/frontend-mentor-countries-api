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
                        {/* <li key={country.alpha3Code}>
                            {country.name} <br />/ native name:{' '}
                            {country.nativeName} <br />/ population:{' '}
                            {country.population} <br />/ region:{' '}
                            {country.region} <br />/ subregion:{' '}
                            {country.subregion} <br />/ capital:{' '}
                            {country.capital} <br />/ top level domain:{' '}
                            {country.topLevelDomain} <br />/ borders:{' '}
                            {getBorders(country.borders)} <br />/ currencies:{' '}
                            {getNestedData(country.currencies)} <br />/
                            languages: {getNestedData(country.languages)}
                        </li> */}
                    </div>
                ))}
            </ul>
        </div>
    )
};

export default CountryGrid;
