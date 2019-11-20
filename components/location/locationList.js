import React, { Component } from 'react'
import locationManager from '../../modules/locationManager'
import LocationCard from './locationCard'


class LocationList extends Component {

    state = {
        locations: [],
    }


    componentDidMount() {
        locationManager.getAll()
        .then((locationValue) => {
            console.log(locationValue)
            this.setState({
                locations: locationValue
            })
        })
    }

    render() {
        return(
            <div className="location-cards">
            {this.state.locations.map(location =>
            <LocationCard key={location.id} location={location} />
            )}
        </div>
        )
    }
}
export default LocationList