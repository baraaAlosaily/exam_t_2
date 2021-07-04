import React, { Component } from 'react'

export class CrudUpdatedForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateItem}>
          <input onChange={this.props.updateDescChange} type='text' value={this.props.psiPowers} />
          <input type="submit" value="Update value" />
        </form>
      </div>
    )
  }
}

export default CrudUpdatedForm
