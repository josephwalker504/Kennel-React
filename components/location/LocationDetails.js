import React, { Component } from 'react';
import locationManager from '../../modules/locationManager';
import './LocationDetails.css'

class LocationDetails extends Component {

  state = {
    address: "",
    type: "",
  }

  componentDidMount(){
    console.log("LocationDetails: ComponentDidMount");
    //get(id) from locationManager and hang on to the data; put it into state
    locationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        address: location.address,
        type: location.type
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    locationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/location"))
}

  render() {
    return (
      <div className="location">
        <div className="location-content">
          <picture>
            <img src={require('./index.jpeg')} alt="Building" />
          </picture>
            <h3>Address: <span style={{ color: 'darkslategrey' }}>{this.state.address}</span></h3>
            <p> {this.state.type}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetails;