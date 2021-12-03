import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutUs} exact />
      </Container>
    </Router>
  )
=======
    <div className="App">
      <AboutUs /> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
>>>>>>> e0603fb51ff9c6f7eccea85744e0759095bdc25e
}

export default App;