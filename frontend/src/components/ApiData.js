import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class ApiData extends Component {
  render() {
    return (
      this.props.apiData.map((data, idx) => {
        return (
          <div key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  {data.psiPowers}
                </Card.Text>
                <Button onClick={e => this.props.favoriteItem(data)} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    )
  }
}

export default ApiData
