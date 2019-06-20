import React, { Component } from 'react';
import {postToDatabase} from '../../../../apis/btaApi';

class Accommodation extends Component {
    state = {
        name: '',
        link: '',
        id_city: ''
    };

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    saveHandler = () => {
        (async () => {
            await postToDatabase('/accommodations', this.state);
        })();
    };

    render() {
        
        return(
            <div>
                <h2>Enter new accomodation for travel</h2>
                <input onBlur={this.inputHandler} type="text" name="link" placeholder="Enter link of accomodation here"/>
                <button>Get data</button>
                <div>

                </div>
                <button onClick={this.saveHandler}>Add to database</button>
            </div>
        )
    }
}

export default Accommodation;