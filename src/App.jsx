import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CountriesList from './components/CountriesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      filteredCountries: [],
      loading: true,
      error: null,
      searchTerm: '',
      region: ''
    };
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3')
      .then(res => {
        if (!res.ok) throw new Error('Status ' + res.status);
        return res.json();
      })
      .then(data => {
        this.setState({ allCountries: data, filteredCountries: data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err.message, loading: false });
      });
  }

  applyFilters = () => {
    const { allCountries, searchTerm, region } = this.state;
    let filtered = allCountries;

    if (searchTerm) {
      filtered = filtered.filter(c => 
        c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (region) {
      filtered = filtered.filter(c => c.region === region);
    }
    this.setState({ filteredCountries: filtered });
  }

  handleSearch = (term) => this.setState({ searchTerm: term }, this.applyFilters);
  handleFilter = (reg) => this.setState({ region: reg }, this.applyFilters);

  render() {
    const { filteredCountries, loading, error } = this.state;

    return (
      <div className="min-h-screen">
        <Navbar />
        <SearchBar onSearch={this.handleSearch} onFilter={this.handleFilter} />
        
        {error ? (
          <div className="text-center text-red-500 mt-20 font-bold">Error: {error}</div>
        ) : loading ? (
          <div className="text-center mt-20 text-xl font-medium animate-pulse">Yuklanmoqda...</div>
        ) : (
          <CountriesList countries={filteredCountries} />
        )}
      </div>
    );
  }
}

export default App;