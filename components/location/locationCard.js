import React, { Component } from 'react';

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
        </div>
      </div>
    );
  }
}

export default LocationCard;