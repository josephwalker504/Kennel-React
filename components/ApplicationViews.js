import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/locationList'
import EmployeeList from './Employee/employeeList'
import AnimalDetail from './animal/AnimalDetail'
import OwnersList from './OwnerCard/ownersList'
import LocationDetail from './location/LocationDetails'
import EmployeeDetail from './Employee/EmployeeDetail'
import OwnerDetail from './OwnerCard/OwnerDetail'

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
{/* Make sure you add the `exact` attribute here */}
<Route exact path="/animals" render={(props) => {
  return <AnimalList />
}} />
<Route path="/animals/:animalId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  return <AnimalDetail
   animalId={parseInt(props.match.params.animalId)}
   {...props}
  />
}} />

{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
          <Route exact path="/location" render={(props) => {
              return <LocationList />
          }} />
          <Route path="/location/:locationId(\d+)" render={(props) => {
  return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
}} />
          <Route exact path="/Employee" render={(props) => {
              return <EmployeeList />
          }} />
          <Route path="/employee/:employeeId(\d+)" render={(props) => {
  return <EmployeeDetail 
          employeeId={parseInt(props.match.params.employeeId)}
          {...props}
  />
}} />
          <Route exact path="/owners" render={(props) => {
              return <OwnersList />
          }} />
          <Route path="/owners/:ownersId(\d+)" render={(props) => {
  return <OwnerDetail
         ownerId={parseInt(props.match.params.ownerId)}
         {...props}
         />
}} />
      </React.Fragment>

    )
  }
}

export default ApplicationViews