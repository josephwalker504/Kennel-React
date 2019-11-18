import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="emplyoee">
        <div className="employee-content">
          <picture>
            <img src={require('./employeeCard.jpeg')} alt="Employees" />
          </picture>
          <h3>Name: <span className="employee-codename">NSS</span></h3>
          <p>Industry: TECH</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;