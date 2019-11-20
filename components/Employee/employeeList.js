import React, { Component } from 'react'
import EmployeeCard from './employeeCard'
import employeeManager from '../../modules/employeeManager'

class EmployeeList extends Component {
    
    state = {
        employee: [],
    }

componentDidMount(){
    employeeManager.getAll()
    // console.log("componentDidMount")
    .then((employee) => {
        this.setState({
            employee: employee
        })
    })
}

render(){
    console.log("EmployeeList: Render");
  
    return(
      <div className="container-cards">
        {this.state.employee.map(employee =>
          <EmployeeCard key={employee.id} employee={employee} />
        )}
      </div>
    )
  }
}

export default EmployeeList