import React, { Component } from 'react';

class CountryCard extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 duration-300">
        <img 
          src={country.flags.svg} 
          alt={country.name.common} 
          className="h-44 w-full object-cover"
        />
        <div className="p-6">
          <h2 className="font-bold text-lg mb-4 truncate">{country.name.common}</h2>
          <div className="text-sm space-y-1">
            <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
            <p><span className="font-semibold">Region:</span> {country.region}</p>
            <p><span className="font-semibold">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;