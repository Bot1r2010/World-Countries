import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onSearch, onFilter } = this.props;
    return (
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 mb-10 gap-4">
        <input
          type="text"
          placeholder="Search for a country..."
          className="p-4 shadow-sm border border-gray-100 rounded-lg w-full md:w-1/3 outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          className="p-4 shadow-sm border border-gray-100 rounded-lg outline-none bg-white"
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    );
  }
}

export default SearchBar;