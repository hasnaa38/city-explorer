import React, { Component } from 'react';


class Location extends Component {
    render() {
        return (
            <div>
                <h3>City: {this.props.display_place}</h3>
                <h3>Country: {this.props.address_country}</h3>
                <h3>Latitude: {this.props.lat}</h3>
                <h3>Longitude: {this.props.lon}</h3>
            </div>
        )
    }
}

export default Location
