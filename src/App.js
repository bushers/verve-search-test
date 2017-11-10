import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  state = {
    navData: [],
    content: 'Content goes here'
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

  updateContent = (content) => {
    if (content) {
      this.setState({ content: content })
    }
  }

  render() {
    return (
      <div className='container'>
        <header className='header'>
          <Navbar navData={this.state.navData}
                  updateContent={this.updateContent}/>
        </header>
        <main>
          <Content content={this.state.content} />
        </main>
      </div>
    );
  }
}

export default App;
