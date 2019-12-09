import React, { Component } from 'react';
import './App.scss';
import SiteContainer from './components/SiteContainer/SiteContainer';
// import Navigation from './components/Navigation/Navigation';
import SideNav from './components/SideNav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <SiteContainer />
      </div>
    );
  }
}

export default App;
