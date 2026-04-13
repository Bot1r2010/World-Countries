import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white shadow-sm mb-8">
        <h1 className="text-xl font-bold">Какая страна?
        </h1>
        <button className="text-sm font-semibold"> Dark Mode</button>
      </nav>
    );
  }
}

export default Navbar;