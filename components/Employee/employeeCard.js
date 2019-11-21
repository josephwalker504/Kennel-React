import React, { Component } from 'react';
import './Employee.css'
import { Link } from 'react-router-dom';
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
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>FIRED!!!</button>
          <Link to={`/employee/${this.props.employee.id}`}><button>Details</button></Link>


        </div>
      </div>
    );
  }
}

export default EmployeeCard;