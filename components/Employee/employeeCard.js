import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="emplyoee">
        <div className="employee-content">
          <picture>
            <img src={require('./employeeCard.jpeg')} alt="Employees" />
          </picture>
          <h3>Name: <span className="employee-codename">{this.props.employee.name}</span></h3>
          <p>{this.props.employee.department}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;