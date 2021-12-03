import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';
import Members from './screens/Members';

const App = () => {
  return (
    <Router>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutUs} exact />
        <Route path='/members' component={Members} exact />
      </Container>
    </Router>
  )
}

export default App;
