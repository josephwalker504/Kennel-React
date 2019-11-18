import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
import LocationCard from './location/location'
import EmployeeCard from './Employee/employeeCard'
import OwnersCard from './OwnerCard/ownerCard'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalCard />
        }} />
          <Route path="/location" render={(props) => {
              return <LocationCard />
          }} />
          <Route path="/Employee" render={(props) => {
              return <EmployeeCard />
          }} />
          <Route path="/OwnerCard" render={(props) => {
              return <OwnersCard />
          }} />
      </React.Fragment>

    )
  }
}

export default ApplicationViews