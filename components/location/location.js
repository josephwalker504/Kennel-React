import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="location">
        <div className="location-content">
          <picture>
            <img src={require('./index.jpeg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="location-name">The HUB</span></h3>
          <p>type: Building</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;