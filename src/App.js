import React, { Component } from 'react';
import classes from './App.css';
import Login from './components/Login/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import {getHotel} from './apis/hotelScrapersApi.js'

library.add( faKey, faUser);

class App extends Component {
  state = {
    accomodations: []
  }

  

  componentDidMount() {
     (async () => {
      const data = await getHotel('https://www.booking.com/hotel/de/hotel-dortmund.html');
      const accomodations = data.page.meta_tags;
       this.setState({ accomodations });
   })();
  }
         

  render() {
    return (
      <div className={classes.App}>
        <Login /> 
        <h1>{this.state.accomodations['og:title']}</h1>
        <div>{this.state.accomodations['og:description']}</div>
        <div><img src={this.state.accomodations['og:image']} alt="Hotel"></img></div>
        <div>{this.state.accomodations['og:url']}</div>
      </div>
    );
  }
}

export default App;
