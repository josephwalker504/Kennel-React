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

deleteEmployee = id => {
  employeeManager.delete(id)
  .then(() => {
    employeeManager.getAll()
    .then((newEmployees) => {
      this.setState({
          employee: newEmployees
      })
    })
  })
}

render(){
    console.log("EmployeeList: Render");
  
    return(
      <div className="container-cards">
        {this.state.employee.map(employee =>
          <EmployeeCard 
            key={employee.id}
            employee={employee}
            deleteEmployeel={this.deleteEmployee} 
          />
        )}
      </div>
    )
  }
}

export default EmployeeList