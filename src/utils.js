/*
    API Utility for fetching country data
    
    - Using npm package 'axios' to make requesting data easier
    - You may need to run 'yarn install' or 'npm install'
    - methods other than getCountries may need to be modified for the final result

*/
import axios from 'axios';

// fetch all countries from the endpoint
const getCountries = () =>{
    return axios.get(`https://restcountries.eu/rest/v2/all`);
}

// check if the user's search result is in the list of countries
const searchByName = (countries, search) => {
    const countryNames = countries.map(country => country.name);
    const found = countryNames.find(name => name === search);
    return (found ? `found ${search}!` : `No results for ${search} found :(`);

}

// get all borders for one country
const getBorders = (borders) => {
    if(borders.length === 0) return 'None';

    // if multiple borders, return them as a comma-separated list
    if(borders.length > 0){
        return borders.toString();
    }
    // if only one border, 'borders' will return the name of the border
    return borders;
}

// used for both languages and currencies, as their data structure is the same
const getNestedData = (response) => {
    let formattedResponse = '';

    // if there is only one language, currency, etc, return the name
    if (response.length === 1) return response[0].name;

    // if multiple, format them as a comma-separated list
    for (let i = 0; i < response.length; i++){
        formattedResponse += ` ${response[i].name}, `;
    }
    return formattedResponse; 
}

export default getCountries;
export {getBorders, getNestedData, searchByName};