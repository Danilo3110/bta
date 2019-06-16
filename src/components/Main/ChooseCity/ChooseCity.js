import React, { Component } from 'react';
//import { getFromDatabase } from '../../../apis/btaApi';
import classes from './ChooseCity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


class ChooseCity extends Component {
    state = {
        cities: [],
        dropdownVisible: false,
        placeholderMessage: "Select city..."
    };

    componentDidMount() {
        const citiesArray = [];
        axios.get('http://localhost:3001/locations')
        .then(res => {
            const cities = res.data.data;
            cities.map((city) => {
               return citiesArray.push({ id: city.id, city: city.city_name })
            })
            this.setState({ cities: citiesArray });
        });
        // (async () => {
        //     const data = await getFromDatabase(`/locations`);
        //     const citiesArray = [];
        //     data.data.map(city => (
        //         citiesArray.push({ id: city.id, city: city.city_name })
        //     ));
        //     this.setState({ cities: citiesArray });
        // })();
    };

    toggleDropdown = () => {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        })
    };

    getClickedCity = (item) => {
        this.setState({ placeholderMessage: item.city });
        this.props.getCity(item.city)
        return item.city
    };
    
    render() {
        const list = this.state.cities.map(city => {
            return (
                <li key={city.id} className={classes.dropdownItem}
                    onClick={this.getClickedCity.bind(this, city)}>{city.city}</li>
            )
        });
        return (
            <div className={classes.chooseCity}>
                <h2>I would like to get some info on the city: </h2>
                <div className={classes.dropdownWrapper} onClick={this.toggleDropdown}>
                    <div className={classes.dropdown} >
                        <div className={classes.dropdownTileWrapper}>
                            <input placeholder={this.state.placeholderMessage} readOnly />
                            <FontAwesomeIcon icon="chevron-down" />
                        </div>
                        {this.state.dropdownVisible &&
                            <ul className={classes.dropdownItemList}>
                                {list}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default ChooseCity;
