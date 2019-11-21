import React, { Component } from 'react';
import employeeManager from '../../modules/employeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      department: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from employeeManager and hang on to the data; put it into state
    employeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        department: employee.department
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in employeeManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    employeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employee"))
}

  render() {
    return (
      <div className="employee">
        <div className="employee-content">
          <picture>
            <img src={require('./employeeCard.jpeg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p> {this.state.department}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;