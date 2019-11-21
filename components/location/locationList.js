import React, { Component } from 'react'
import locationManager from '../../modules/locationManager'
import LocationCard from './locationCard'


class locationList extends Component {

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

    deleteLocation = id => {
        locationManager.delete(id)
        .then(() => {
          locationManager.getAll()
          .then((newLocation) => {
            this.setState({
                locations: newLocation
            })
          })
        })
      }

    render() {
        return(
            <div className="location-cards">
            {this.state.locations.map(location =>
            <LocationCard
             key={location.id}
            location={location} 
            deleteLocation={this.deleteLocation}
            />
            )}
        </div>
        )
    }
}
export default locationList