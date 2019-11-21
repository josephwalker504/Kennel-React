import React, { Component } from 'react';
import './Location.css'
import { Link } from 'react-router-dom';

class LocationCard extends Component {
  render() {
    return (
      <div className="location">
        <div className="location-content">
          <picture>
            <img src={require('./index.jpeg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="location-name">{this.props.location.address}</span></h3>
          <p>{this.props.location.type}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Closed Down</button>
          <Link to={`/location/${this.props.location.id}`}><button>Details</button></Link>


        </div>
      </div>
    );
  }
}

export default LocationCard;