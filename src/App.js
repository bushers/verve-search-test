import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  state = {
    navData: []
  }

  componentDidMount() {
    this.getMenuData()
  }

  getMenuData() {
    window.fetch('http://localhost:3000/test.json')
      .then(response => response.json())
      .then(data => this.setState({ navData: data }))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div className='container'>
        <header className='header'>
          <Navbar navData={ this.state.navData } />
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
