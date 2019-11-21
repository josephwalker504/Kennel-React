import React, { Component } from 'react';
import './Owner.css'
import { Link } from 'react-router-dom';


class OwnerCard extends Component {
  render() {
    console.log("test")
    return (
      <div className="Owner">
        <div className="Owner-content">
          <picture>
            <img src={require('./images.jpeg')} alt="Owner" />
          </picture>
          <h3>Name: <span className="Owner-name">{this.props.owner.name}</span></h3>
          <p>{this.props.owner.phoneNumber} </p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Moved On</button>
          <Link to={`/owner/${this.props.owner.id}`}><button>Details</button></Link>

          

        </div>
      </div>
    );
  }
}

export default OwnerCard;