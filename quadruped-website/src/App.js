import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';

class App extends Component {
  render() {
  return (      
    <BrowserRouter>
     <div>
         <Routes>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/aboutus" component={AboutUs} exact/>
        </Routes>
     </div> 
   </BrowserRouter>
 );
}
}

export default App;