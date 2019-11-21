import React, { Component } from 'react'
import OwnerManager from '../../modules/OwnerManager'
import OwnerCard from './OwnerCard'


class OwnersList extends Component {

    state = {
        owners: [],
    }


    componentDidMount() {
        OwnerManager.getAll()
        .then((OwnerValue) => {
            this.setState({
                owners: OwnerValue
            })
        })
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
        .then(() => {
          OwnerManager.getAll()
          .then((newOwner) => {
            this.setState({
                owners: newOwner
            })
          })
        })
      }

    render() {
        console.log(this.state)
        return(
            <div className="Owner-cards">
            {this.state.owners.map(owner =>
            <OwnerCard key={owner.id} owner={owner} />
            )}
        </div>
        )
    }
}
export default OwnersList