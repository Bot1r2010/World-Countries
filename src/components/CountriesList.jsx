import React, { Component } from 'react';
import CountryCard from './CountryCard';

class CountriesList extends Component {
  render() {
    const { countries } = this.props;
    if (countries.length === 0) return <p className="text-center mt-10">No countries found.</p>;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 pb-12">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    );
  }
}

export default CountriesList;