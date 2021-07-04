import axios from 'axios';
import React, { Component } from 'react'
import ApiData from './ApiData'
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      show: false,
      message: '',
      showApiMessage: false

    }
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/con`)
    this.setState({
      apiData: request.data,
      show: true
    })
  }
  favoriteItem = async (objData) => {
    const postReq = await axios.post(`http://localhost:8080/con/favorite`, objData)
    this.setState({
      message: postReq.data,
      showApiMessage: true,
    })
  }
  render() {
    return (
      <>
        {
          this.state.show &&
          <ApiData apiData={this.state.apiData}
            favoriteItem={this.favoriteItem} />
        }
      </>
    )
  }
}

export default Main
