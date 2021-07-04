import React, { Component } from 'react'
import ApiCrudData from "./ApiCrudData"
import axios from 'axios';
import CrudUpdatedForm from './CrudUpdatedForm'
export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCrudData: [],
      showCrud: false,
      message: '',
      showApiCrudMessage: false,
      slugName: '',
      psiPowers: '',
      showupdatedForm: false

    }
  }
  showupdatedForm = (slug, psiPowers) => {
    this.setState({
      psiPowers: psiPowers,
      slug: slug,
      showupdatedForm: true
    })
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/con/favorite`)
    this.setState({
      apiCrudData: request.data,
      showCrud: true
    })
  }
  deleteItem = async (slug) => {
    await axios.delete(`http://localhost:8080/con/favorite/${slug}`)
    const newCrudData = this.state.apiCrudData.filter(obj => obj.slug !== slug)
    this.setState({
      apiCrudData: newCrudData
    })
  }
  updateDescChange = (e) => this.setState({ psiPowers: e.target.value })
  updateItem = async (e) => {
    e.preventDefault();
    const request = await axios.put(`http://localhost:8080/con/favorite/${this.state.slug}`, { psiPowers: this.state.psiPowers });
    this.setState({
      apiCrudData: request.data
    })
  }
  render() {
    return (
      <>
        {
          this.state.showupdatedForm &&
          <CrudUpdatedForm
            updateDescChange={this.updateDescChange}
            updateItem={this.updateItem}
            psiPowers={this.state.psiPowers} />
        }
        {
          this.state.showCrud &&
          <ApiCrudData apiCrudData={this.state.apiCrudData}
            favoriteItem={this.state.favoriteItem}
            deleteItem={this.deleteItem}
            showupdatedForm={this.showupdatedForm} />
        }
      </>
    )
  }
}

export default Favorite
