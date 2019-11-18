import React, { Component } from 'react';

class OwnersCard extends Component {
  render() {
    return (
      <div className="owner">
        <div className="owner-content">
          <picture>
            <img src={require('./images.jpeg')} alt="Owner" />
          </picture>
          <h3>Name: <span className="owner-name">Jerry Jones</span></h3>
          <p>Type: COOL</p>
        </div>
      </div>
    );
  }
}

export default OwnersCard;