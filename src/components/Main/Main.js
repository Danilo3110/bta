import React, { Component } from 'react';
//import classes from './Main.css';
import Welcome from './Welcome/Welcome';

class Main extends Component {
    state ={
        location:'Dortmund'
    }

    render() {
        return (
            <Welcome />
        );
    }
}

export default Main;