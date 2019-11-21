import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

  state = {
    name: "",
    phoneNumber: "",
    loadingStatus: true,
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        phoneNumber: owner.phoneNumber,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in ownerManger and re-direct to the owner list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owners"))
}

  render() {
    return (
      <div className="owner">
        <div className="owner-content">
          <picture>
            <img src={require('./images.jpeg')} alt="Building" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p> {this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>

        </div>
      </div>
    );
  }
}

export default OwnerDetail;